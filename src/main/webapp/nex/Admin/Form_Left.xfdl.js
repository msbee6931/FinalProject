(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("adm_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"menu_id\" type=\"STRING\" size=\"256\"/><Column id=\"menu_name\" type=\"STRING\" size=\"256\"/><Column id=\"menu_level\" type=\"STRING\" size=\"256\"/><Column id=\"form_url\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menu_id\">10</Col><Col id=\"menu_name\">인적 자원 관리</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">1010</Col><Col id=\"menu_name\">교직원 관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::faculty.xfdl</Col></Row><Row><Col id=\"menu_id\">1020</Col><Col id=\"menu_name\">학생 관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::students.xfdl</Col></Row><Row><Col id=\"menu_id\">1030</Col><Col id=\"menu_name\">교수 관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::professor.xfdl</Col></Row><Row><Col id=\"menu_id\">20</Col><Col id=\"menu_name\">강좌 관리</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">2010</Col><Col id=\"menu_name\">개설 강좌 관리</Col><Col id=\"menu_level\">1</Col></Row><Row><Col id=\"menu_id\">201010</Col><Col id=\"menu_name\">강좌 개설 요청 확인</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">admWork::classReq.xfdl</Col></Row><Row><Col id=\"menu_id\">201020</Col><Col id=\"menu_name\">개설된 강좌 조회</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">admWork::classList.xfdl</Col></Row><Row><Col id=\"menu_id\">30</Col><Col id=\"menu_name\">홈페이지 관리</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">3010</Col><Col id=\"menu_name\">공지사항 관리</Col><Col id=\"menu_level\">1</Col></Row><Row><Col id=\"menu_id\">3020</Col><Col id=\"menu_name\">학사 일정 관리</Col><Col id=\"menu_level\">1</Col></Row><Row><Col id=\"menu_id\">40</Col><Col id=\"menu_name\">커뮤니티 관리</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">4010</Col><Col id=\"menu_name\">자유게시판 관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::freeboard.xfdl</Col></Row><Row><Col id=\"menu_id\">4020</Col><Col id=\"menu_name\">건의게시판 관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::requestboard.xfdl</Col></Row><Row><Col id=\"menu_id\">4030</Col><Col id=\"menu_name\">자료실 자료 등록</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::reference.xfdl</Col></Row><Row><Col id=\"menu_id\">4040</Col><Col id=\"menu_name\">자료실 관리</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::reference_controller.xfdl</Col></Row><Row><Col id=\"menu_id\">50</Col><Col id=\"menu_name\">학생 관리</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">5010</Col><Col id=\"menu_name\">등록금 관리</Col><Col id=\"menu_level\">1</Col></Row><Row><Col id=\"menu_id\">501010</Col><Col id=\"menu_name\">등록금 입력</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">admWork::tuition.xfdl</Col></Row><Row><Col id=\"menu_id\">5020</Col><Col id=\"menu_name\">신청서 관리</Col><Col id=\"menu_level\">1</Col></Row><Row><Col id=\"menu_id\">502010</Col><Col id=\"menu_name\">장학금 관리</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">admWork::requestScholar.xfdl</Col></Row><Row><Col id=\"menu_id\">502020</Col><Col id=\"menu_name\">휴학 신청 관리</Col><Col id=\"menu_level\">2</Col><Col id=\"form_url\">admWork::rest.xfdl</Col></Row><Row><Col id=\"menu_id\">502030</Col><Col id=\"menu_name\">복학 신청 관리</Col><Col id=\"menu_level\">2</Col></Row><Row><Col id=\"menu_id\">502040</Col><Col id=\"menu_name\">퇴학 신청 관리</Col><Col id=\"menu_level\">2</Col></Row><Row><Col id=\"menu_id\">5020</Col><Col id=\"menu_name\">통계</Col><Col id=\"menu_level\">1</Col></Row><Row><Col id=\"menu_id\">60</Col><Col id=\"menu_name\">쪽지함</Col><Col id=\"menu_level\">0</Col></Row><Row><Col id=\"menu_id\">6010</Col><Col id=\"menu_name\">쪽지 보내기</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::write_postmessage.xfdl</Col></Row><Row><Col id=\"menu_id\">6020</Col><Col id=\"menu_name\">받은 쪽지함</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::received_postmessage.xfdl</Col></Row><Row><Col id=\"menu_id\">6030</Col><Col id=\"menu_name\">보낸 쪽지함</Col><Col id=\"menu_level\">1</Col><Col id=\"form_url\">admWork::writtenList_postmessage.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("adm_form", this);
            obj._setContents("<ColumnInfo><Column id=\"form_id\" type=\"STRING\" size=\"256\"/><Column id=\"menu_id\" type=\"STRING\" size=\"256\"/><Column id=\"menu_name\" type=\"STRING\" size=\"256\"/><Column id=\"form_url\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","0","200",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("adm_menu");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("collapse,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:menu_name\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:menu_level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",200,550,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.av_FrameSet="";

        //Form_Left size : 200*550

        //왼쪽 aside 클릭시 Work 공간에 프레임 띄울 함수
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var menuId = this.adm_menu.getColumn(e.row, "menu_id");
        	var menuName = this.adm_menu.getColumn(e.row, "menu_name");
        	var formUrl = this.adm_menu.getColumn(e.row, "form_url");
        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.set_separatesize("30,0,*");
        	this.fn_openForm(menuId, menuName, formUrl); //form 오픈 함수
        };

        //화면을 띄우는 함수
        this.fn_openForm = function(menuId, menuName, formUrl)
        {

        	if(formUrl.length <=0) return; // formUrl이 없으면 리턴시킨다.

        	//화면 띄울 프레임 지정
        	av_FrameSet = this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.FrameSet00;

        	var nWidth  = av_FrameSet.getOffsetWidth();
        	var nHeight = av_FrameSet.getOffsetHeight();
        	//1080*520 사이즈 확인함


        	var formId = "form_" + menuId;   // FORM_1010...

        	var arrObj = av_FrameSet.all;
        	// 이 위치에 open 된 정보를 arr로 받아온다.


        	for(var i = 0; i<arrObj.length; i++)
        	{
        		if(arrObj[i].name == formId) // name이 formId랑일치하면 formId에 focus
        		{
        			arrObj[i].setFocus();
        			//mid 탭 일치시키기
        		this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.ChildFrame00.form.fn_tabChange(formId);
        			return;
        		}
        	}





        	//일치하지 않으면 차일드 프레임 띄우기
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init(formId, 0, 0, nWidth, nHeight);

        	av_FrameSet.addChild(formId, objChildFrame);

        	objChildFrame.set_resizable(true);
        	/*objChildFrame.set_openstatus("maximize");*/
        	objChildFrame.set_showtitlebar(false);  //타이틀바를 안보여야 사이즈가 맞춰짐. 우선 false 주자.
        	objChildFrame.set_titletext(menuName);
        	objChildFrame.set_formurl(formUrl);
        	objChildFrame.show();

        	var nRow = this.adm_form.addRow();
        	this.adm_form.setColumn(nRow, "form_id",formId);
        	this.adm_form.setColumn(nRow, "menu_id",menuId);
        	this.adm_form.setColumn(nRow, "menu_name",menuName);
        	this.adm_form.setColumn(nRow, "form_url",formUrl);

        	this.objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.ChildFrame00.form.fn_addTab(formId,menuName);
        	//Mdi에서 fn_addTab 호출 탭추가



        	// ▼ gds_openForm에 입력값이 잘 들어갔는지 출력
        	/*trace(this.adm_form.saveXML());*/
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("onheaddblclick",this.Grid00_onheaddblclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };

        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
