//XJS=Common.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        /*******************************************************************************
         * Grid Sort
         * parameter : object Grid / GridClickEventInfo e
         * return None
         ******************************************************************************/
        this.cfn_GridSort = function (obj, e)
        {
        	var objDs = this.objects[obj.binddataset];
        	for (var i = 1; i < obj.getCellCount("head"); i++)
        	{
        		var sHeadText = obj.getCellText(-1, i); //Head영역은 index가 -1
        		var nLen   = sHeadText.length - 1;    //텍스트 길이
        		if (i == e.cell)
        		{
        			var sColId = (obj.getCellProperty("body", e.col,"text")).toString().split(":"); //Text값이 bind:형태로 나오기 떄문에
        			if (sHeadText.substr(nLen) == "▲")
        			{
        				obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen)+ "▼");
        				objDs.set_keystring("S:-" + sColId[1]);
        			}
        			else if (sHeadText.substr(nLen) == "▼")
        			{
        				obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen)+ "▲");
        				objDs.set_keystring("S:+" + sColId[1]);
        			}
        			else
        			{
        				obj.setCellProperty( "head", i, "text", sHeadText+"▲"); //없을 경우 기호 붙힘
        				objDs.set_keystring("S:+" + sColId[1]);
        			}
        		}
        		else //선택된 Head 제외하고 모두 기호 삭제
        		{
        			if (sHeadText.substr(nLen) == "▲" || sHeadText.substr(nLen) == "▼")
        			{
        				obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen));
        			}
        		}
        	}
        }

        //cRow : 필터링할 Row 개수
        //objDs : 필터링할 DataSet
        //this.page = 현재 페이지
        this.gfn_navi = function(cRow,objDs,type){
        	if(type == "init"){
        		this.nPageCount = Math.ceil(objDs.getRowCount()/cRow);  //총 페이지 수
        		this.page = 1; //페이지번호
        		var nWidth = ""; //> >>를 붙히기 위한 넓이
        		this.cRow = cRow;
        		this.objDs = objDs;
        		var objButton = "";


        	//맨 앞으로 가기
        	if(this.nPageCount >= 10 ){ //화면에 보여줄 최대 페이지 개수를 10으로 잡았음
        		endPage = 10;
        	}else{
        		endPage = this.nPageCount; //전체페이지 수가 10보다 작을 경우는 전체페이지
        	}
        		var objStart = new Button("btnStart",0,0, 30, 30, null, null);
        		this.div_navi.removeChild("naviStart");
        		this.div_navi.addChild("naviStart",objStart);
        		objStart.set_text("<<");
        		objStart.show();
        		objStart.addEventHandler("onclick",this.gfn_start,this);
        		objStart.set_css

        	//이전으로 가기
        		var	objBack = new Button("btnBack",30,0, 30, 30, null, null);
        		this.div_navi.removeChild("naviBack");
        		this.div_navi.addChild("naviBack",objBack);
        		objBack.set_text("<");
        		objBack.show();
        		objBack.addEventHandler("onclick",this.gfn_back,this);

        	//페이징 버튼
        	for(var i=1; i<=endPage; i++){
        		objButton = new Button("btn'"+i+"'",i*30+30,0, 30, 30, null, null);
        		this.div_navi.removeChild("navi'"+i+"'");
        		this.div_navi.addChild("navi'"+i+"'",objButton);
        		objButton.set_text(i);
        		nWidth = i*30+30;
        		objButton.addEventHandler("onclick",this.gfn_paging, this);
        		objButton.show();
        	}
        	//다음 버튼
        		var objNext = new Button("btnNext",nWidth+30,0, 30, 30, null, null);
        		this.div_navi.removeChild("naviNext");
        		this.div_navi.addChild("naviNext",objNext);
        		objNext.set_text(">");
        		objNext.show();
        		objNext.addEventHandler("onclick",this.gfn_next,this);

        	//맨 끝으로 가기
        		var	objEnd = new Button("btnEnd",nWidth+60,0, 30, 30, null, null);
        		this.div_navi.removeChild("naviEnd");
        		this.div_navi.addChild("naviEnd",objEnd);
        		objEnd.set_text(">>");
        		objEnd.show();
        		objEnd.addEventHandler("onclick",this.gfn_end,this);

        		objDs.filter("currow < '"+this.cRow*1+"' && currow >= 0"); //초기 성정값


        	}else if(type == "start"){
        		this.gfn_create(1,"start");
        		objDs.filter("currow < '"+this.cRow*1+"' && currow >= 0");
        	}else if(type == "end"){
        		startPage = Math.floor(this.nPageCount/10)*10+1;
        		this.gfn_create(startPage,"end");
        	}else if(type =="next"){
        		if(this.page == Math.floor(this.nPageCount/10)*10+1){
        			this.gfn_create(this.page,"end");
        		}else{
        			this.gfn_create(this.page,"next");
        		}
        	}else if(type =="back"){
        		startPage = parseInt(this.page) -9;
        		this.gfn_create(startPage,"back");
        	}
        }
        this.gfn_create = function(startPage,type){
        	if(this.nPageCount >= 10 ){
        		var endPage = 10;
        		if(type =="end"){
        			var lastPage = Math.floor(this.nPageCount/10)*10+10;
        			if(lastPage > this.nPageCount){
        				endPage = this.nPageCount%10;
        				if(endPage == 0){ //나누어 떨어질 경우 전체적으로 -10
        					startPage -=10;
        					endPage =10;
        				}
        			}
        		}
        	}else{
        		var endPage = this.nPageCount;
        	}
        	for(var i=1; i<= 10; i++){
        		this.div_navi.removeChild("navi'"+i+"'");
        	}
        	for(var i=1; i<=endPage; i++){
        		objButton = new Button("btn'"+i+"'",i*30+30,0, 30, 30, null, null);
        		this.div_navi.addChild("navi'"+i+"'",objButton);
        		nWidth = i*30+30;
        		objButton.set_text(i+startPage-1);
        		objButton.addEventHandler("onclick",this.gfn_paging, this);
        		objButton.show();
        	}
        	//다음 버튼
        		var objNext = new Button("btnNext",nWidth+30,0, 30, 30, null, null);
        		this.div_navi.removeChild("naviNext");
        		this.div_navi.addChild("naviNext",objNext);
        		objNext.set_text(">");
        		objNext.show();
        		objNext.addEventHandler("onclick",this.gfn_next,this);

        	//맨 끝으로 가기
        		var	objEnd = new Button("btnEnd",nWidth+60,0, 30, 30, null, null);
        		this.div_navi.removeChild("naviEnd");
        		this.div_navi.addChild("naviEnd",objEnd);
        		objEnd.set_text(">>");
        		objEnd.show();
        		objEnd.addEventHandler("onclick",this.gfn_end,this);
        }


        this.gfn_paging = function(obj,e){
        	this.page = obj.text; //버튼 번호가 페이지 번호
        	this.objDs.filter("currow < '"+this.cRow*this.page+"' && currow >='"+this.cRow*(this.page-1)+"'");
        }
        //맨 앞으로
        this.gfn_start = function(obj,e){
        	this.page =1;
        	this.objDs.filter("currow < '"+this.cRow*1+"' && currow >= 0");
        	this.gfn_navi(this.cRow,this.objDs,"start"); //버튼 초기생성모양으로
        }

        //맨 뒤로
        this.gfn_end = function(obj,e){
        	this.page = this.nPageCount;
        	this.objDs.filter("currow < '"+this.nPageCount*this.cRow+"' && currow >='"+(this.nPageCount-1)*this.cRow+"'");
        	this.gfn_navi(this.cRow,this.objDs,"end"); //맨 마지막 페이지의 십의 자리 ~ 마지막페이지
        }
        //다음
        this.gfn_next = function(obj,e){
        	if(this.page < this.nPageCount){
        		this.page = parseInt(this.page)+1;
        		this.objDs.filter("currow < '"+this.cRow*this.page+"' && currow >='"+this.cRow*(this.page-1)+"'");
        		if(this.page%10 == 1){ //끝자리가 0->1로 넘어갈떄
        			this.gfn_navi(this.cRow,this.objDs,"next")
        		}
        	}
        }
        //이전
        this.gfn_back = function(obj,e){
        	if(this.page > 1){
        		this.page = parseInt(this.page)-1;
        		this.objDs.filter("currow < '"+this.cRow*this.page+"' && currow >='"+this.cRow*(this.page-1)+"'");
        		if(this.page%10 == 0){ //끝자리가 1->0으로 넘어갈때
        			this.gfn_navi(this.cRow,this.objDs,"back")
        		}
        	}
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
