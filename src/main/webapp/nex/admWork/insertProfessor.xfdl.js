(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("insertProfessor");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_professor_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"p_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"secNumber\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("colCode_Copy", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Code\">10</Col><Col id=\"Value\">인문대학</Col></Row><Row><Col id=\"Code\">20</Col><Col id=\"Value\">사회과학대학</Col></Row><Row><Col id=\"Code\">30</Col><Col id=\"Value\">자연과학대학</Col></Row><Row><Col id=\"Code\">40</Col><Col id=\"Value\">간호대학</Col></Row><Row><Col id=\"Code\">50</Col><Col id=\"Value\">공과대학</Col></Row><Row><Col id=\"Code\">60</Col><Col id=\"Value\">사범대학</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("deptCode_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"Code\" type=\"STRING\" size=\"256\"/><Column id=\"Value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Code\">1011</Col><Col id=\"Value\">국어국문학과</Col></Row><Row><Col id=\"Code\">1012</Col><Col id=\"Value\">영어영문학과</Col></Row><Row><Col id=\"Code\">1013</Col><Col id=\"Value\">국사학과</Col></Row><Row><Col id=\"Code\">1014</Col><Col id=\"Value\">철학과</Col></Row><Row><Col id=\"Code\">2021</Col><Col id=\"Value\">사회복지학과</Col></Row><Row><Col id=\"Code\">2022</Col><Col id=\"Value\">경제학부</Col></Row><Row><Col id=\"Code\">2023</Col><Col id=\"Value\">사회학과</Col></Row><Row><Col id=\"Code\">2024</Col><Col id=\"Value\">심리학과</Col></Row><Row><Col id=\"Code\">3031</Col><Col id=\"Value\">통계학과</Col></Row><Row><Col id=\"Code\">3032</Col><Col id=\"Value\">화학부</Col></Row><Row><Col id=\"Code\">3033</Col><Col id=\"Value\">생명과학부</Col></Row><Row><Col id=\"Code\">4041</Col><Col id=\"Value\">간호학부</Col></Row><Row><Col id=\"Code\">5051</Col><Col id=\"Value\">전기공학부</Col></Row><Row><Col id=\"Code\">5052</Col><Col id=\"Value\">컴퓨터공학부</Col></Row><Row><Col id=\"Code\">5053</Col><Col id=\"Value\">화학생물공학부</Col></Row><Row><Col id=\"Code\">5054</Col><Col id=\"Value\">건축학과</Col></Row><Row><Col id=\"Code\">5055</Col><Col id=\"Value\">산업공학과</Col></Row><Row><Col id=\"Code\">6061</Col><Col id=\"Value\">교육학과</Col></Row><Row><Col id=\"Code\">6062</Col><Col id=\"Value\">국어교육과</Col></Row><Row><Col id=\"Code\">6063</Col><Col id=\"Value\">영어교육과</Col></Row><Row><Col id=\"Code\">6064</Col><Col id=\"Value\">수학교육과</Col></Row><Row><Col id=\"Code\">6065</Col><Col id=\"Value\">체육교육과</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","10","20","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","10","55","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("주민번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","10","90","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이메일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","10","125","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("전화번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04","10","160","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("주소");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_05","10","195","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("성별");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","85","20","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_email","85","90","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_contact","85","125","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_address","85","160","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","85","320","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","210","320","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06_00","10","230","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("학과분류");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06_00_00","10","265","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("학과");
            this.addChild(obj.name, obj);

            obj = new Combo("com_colCode","85","230","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("colCode_Copy");
            obj.set_codecolumn("Code");
            obj.set_datacolumn("Value");
            this.addChild(obj.name, obj);

            obj = new Combo("com_deptCode","85","265","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("Code");
            obj.set_datacolumn("Value");
            obj.set_innerdataset("deptCode_copy");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mas_secNumber","85","55","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_type("string");
            obj.set_format("###### - #{######}");
            this.addChild(obj.name, obj);

            obj = new Combo("com_gender","85","195","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var com_gender_innerdataset = new nexacro.NormalDataset("com_gender_innerdataset", obj);
            com_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(com_gender_innerdataset);
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,360,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("insertProfessor.xfdl", function() {
        var p_seq;
        var r_seq;

        this.fn_callback = function(id,ErrorCode,ErrorMsg){	//콜백함수
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }

        this.fn_p_seqcallback = function(id,ErrorCode,ErrorMsg){	//콜백함수
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);

        	trace(this.ds_professor_copy.getCount());
        	trace(this.ds_professor_copy.getCountNF());
        	for(var i = 0; i< this.ds_professor_copy.getCount(); i++){

        	r_seq = this.ds_professor_copy.getColumn(i,"p_seq");
        	trace(r_seq);

        	}
        	if(this.ds_professor_copy.getCount()==0){
        		this.alert("없다고소리쳐");
        		r_seq = 0;
        	}
        }


        this.btn_insert_onclick = function(obj,e)
        {
        	var name = this.edt_name.value;
        	var secNumber = this.mas_secNumber.value;
        	var email = this.edt_email.value;
        	var contact = this.edt_contact.value;
        	var address = this.edt_address.value;
        	var gender = this.com_gender.value;
        	var colCode = this.com_colCode.value;
        	var deptCode = this.com_deptCode.value;

        	p_seq = deptCode+"001";
        	trace(p_seq);
        	var pw = this.mas_secNumber.text.substring(0,6);

        	for(var i = 0; i< this.ds_professor_copy.getCount(); i++){

        	r_seq = this.ds_professor_copy.getColumn(i,"p_seq");
        	if(p_seq == r_seq){
        		p_seq = deptCode;
        	}
        	}
        	trace(p_seq);
        	if(name == null || name == "undefined"){
        		this.alert("이름 입력해주세요");
        		return;
        	}else if(secNumber == null || secNumber == "undefined"){
        		this.alert("주민번호 입력해주세요.");
        		return;
        	}else if(email == null || email == "undefined"){
        		this.alert("이메일 입력해주세요");
        		return;
        	}else if(contact == null || contact == "undefined"){
        		this.alert("전화번호 입력해주세요");
        		return;
        	}else if(address == null || address == "undefined"){
        		this.alert("주소 입력해주세요");
        		return;
        	}else if(colCode == null || colCode == "undefined"){
        		this.alert("학과분류 입력해주세요");
        		return;
        	}else if(deptCode == null || deptCode == "undefined"){
        		this.alert("학과 입력해주세요");
        		return;
        	}

        	var addRow = this.ds_professor_copy.addRow();
        	this.ds_professor_copy.setColumn(addRow,"p_seq",p_seq);
        	this.ds_professor_copy.setColumn(addRow,"name",name);
        	this.ds_professor_copy.setColumn(addRow,"secNumber",secNumber);
        	this.ds_professor_copy.setColumn(addRow,"email",email);
        	this.ds_professor_copy.setColumn(addRow,"contact",contact);
        	this.ds_professor_copy.setColumn(addRow,"address",address);
        	this.ds_professor_copy.setColumn(addRow,"gender",gender);
        	this.ds_professor_copy.setColumn(addRow,"pw",pw);
        	this.ds_professor_copy.setColumn(addRow,"colCode",colCode);
        	this.ds_professor_copy.setColumn(addRow,"deptCode",deptCode);

        	this.transaction(

        				"ds_insertPro" //1. strSvcID
        				,"/insertProfessor.nex" //2. strURL
        				,"in_ds=ds_professor_copy:U" //3.strInDatasets - I,U,D Sds=Fds:U 변경된값만보내겟다, :A, :N
        				,"" //4.strOutDatasets -select Fds=Sds
        				,"" //5.strArgument text값
        				,"fn_callback" //6.strCallbackFunc
        			);
        			this.close("");


        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close("");
        };

        this.mas_secNumber_oninput = function(obj,e)
        {
        	var test = this.mas_secNumber.text.substring(9,10);

        	if(test == 1){
        		this.com_gender.set_value("M");
        	}else if(test == 2){
        		this.com_gender.set_value("W");
        	}
        };

        this.insertProfessor_onload = function(obj,e)
        {
        	var arrComboList = [this.com_colCode, this.com_deptCode];

        	this.gfnInitMultiCombo(arrComboList);

        };
        this.gfnInitMultiCombo = function(arrComboList)
        {
        	var i;
        	var nCount = arrComboList.length;
        	var objCombo;
        	var objChildCombo;

        	for(i=0;i<nCount;i++)
        	{
        		objCombo = arrComboList[i];

        		if(i!=nCount-1)
        		{
        			objChildCombo = arrComboList[i+1];
        			objCombo.childcombo = objChildCombo;
        			objCombo.addEventHandler("onitemchanged", this.cmbMultiCombo_onitemchanged, this);
        		}
        	}

        	this.gfnItemChangedMultiCombo(arrComboList[0], "-1");
        }

         /**
        * @description 	   : 콤보 아이템 변경 처리 함수
        * @param objCombo  : 아이템 변경할 콤보 컴포넌트
        * @param sValue    : 변경할 콤보 값
        * @return          : 없음
        */
        this.gfnItemChangedMultiCombo = function(objCombo, sValue)
        {
        	//하위 콤보 컴포넌트 가져오기
        	var objChildCombo = objCombo.childcombo;

        	//현재 컴포넌트 값 변경
        	objCombo.set_value(sValue);

        	//하위 콤보가 있을 경우
        	if(objChildCombo!=null)
        	{
        		//하위 콤보의 InnerDataset 가져오기
        		var objDs = objChildCombo.getInnerDataset();

        		//상위콤보 값을 기준으로 하위콤보 필터링
        		objDs.filter("Code.toString().indexOf('"+sValue+"')==0||Code=='-1'");

        		//콤보 아이템 변경 처리 함수 호출
        		this.gfnItemChangedMultiCombo(objChildCombo, "-1");
        	}
        }

        /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/

          /**
        * @description 	   : 콤보 아이템 변경 이벤트
        * @param obj       : 이벤트 발생한 콤보 컴포넌트
        * @param e         : 이벤트 오브젝트
        * @return          : 없음
        */
        this.cmbMultiCombo_onitemchanged = function(obj, e)
        {
        	//콤보 아이템 변경 처리 함수 호출
        	this.gfnItemChangedMultiCombo(obj, e.postvalue);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.insertProfessor_onload,this);
            this.btn_insert.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.mas_secNumber.addEventHandler("oninput",this.mas_secNumber_oninput,this);
        };

        this.loadIncludeScript("insertProfessor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
