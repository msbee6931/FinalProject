(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("rest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("pst", this);
            obj._setContents("<ColumnInfo><Column id=\"receiver\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("professor", this);
            obj._setContents("<ColumnInfo><Column id=\"p_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("search", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">p_seq</Col><Col id=\"data\">전체</Col></Row><Row><Col id=\"code\">name</Col><Col id=\"data\">이름</Col></Row><Row><Col id=\"code\">deptCode</Col><Col id=\"data\">학과</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("depart", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1011</Col><Col id=\"data\">국어국문학과</Col></Row><Row><Col id=\"code\">1012</Col><Col id=\"data\">영어영문학과</Col></Row><Row><Col id=\"code\">1013</Col><Col id=\"data\">국사학과</Col></Row><Row><Col id=\"code\">1014</Col><Col id=\"data\">철학과</Col></Row><Row><Col id=\"code\">2021</Col><Col id=\"data\">사회복지학과</Col></Row><Row><Col id=\"code\">2022</Col><Col id=\"data\">경제학과</Col></Row><Row><Col id=\"code\">2023</Col><Col id=\"data\">사회학과</Col></Row><Row><Col id=\"code\">2024</Col><Col id=\"data\">심리학과</Col></Row><Row><Col id=\"code\">3031</Col><Col id=\"data\">통계학과</Col></Row><Row><Col id=\"code\">3032</Col><Col id=\"data\">화학부</Col></Row><Row><Col id=\"code\">3033</Col><Col id=\"data\">생명과학부</Col></Row><Row><Col id=\"code\">4041</Col><Col id=\"data\">간호학부</Col></Row><Row><Col id=\"code\">5051</Col><Col id=\"data\">전기공학부</Col></Row><Row><Col id=\"code\">5052</Col><Col id=\"data\">컴퓨터공학부</Col></Row><Row><Col id=\"code\">5053</Col><Col id=\"data\">화생물공학부</Col></Row><Row><Col id=\"code\">5054</Col><Col id=\"data\">건축학과</Col></Row><Row><Col id=\"code\">5055</Col><Col id=\"data\">산업공학과</Col></Row><Row><Col id=\"code\">6061</Col><Col id=\"data\">교육학과</Col></Row><Row><Col id=\"code\">6062</Col><Col id=\"data\">국어교육과</Col></Row><Row><Col id=\"code\">6063</Col><Col id=\"data\">영어교육과</Col></Row><Row><Col id=\"code\">6064</Col><Col id=\"data\">수학교육과</Col></Row><Row><Col id=\"code\">6065</Col><Col id=\"data\">체육교육과</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","30","520",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","80","0","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","1050","0","30","520",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","100","490","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","10",null,null,"29","30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new Div("Div00",null,"11","498","60","17",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","8","22","118","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("receiver ");
            obj.set_cssclass("sta_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","126","22","372","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_default");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00",null,"120","500",null,"7","78",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_line");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","12","9","480",null,null,"17",null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("txt_default");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"92","25","7","33",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("전송");
            obj.set_cssclass("btn_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","9","71",null,null,"520","77",null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("professor");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"135\"/><Column size=\"93\"/><Column size=\"139\"/><Column size=\"127\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"교번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"email\"/><Cell col=\"3\" text=\"연락처\"/></Band><Band id=\"body\"><Cell text=\"bind:p_seq\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:name\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:email\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:contact\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00",null,"90","100","29","407",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Send");
            obj.set_cssclass("sta_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","168","27","111","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("cmb_default");
            obj.set_innerdataset("search");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","299","27","87","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","399","26","60","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_search");
            obj.set_text("조회");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo01","290","28","104","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("cmb_default");
            obj.set_innerdataset("depart");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_visible("false");
            obj.set_text("Combo01");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Div00.form.Edit00","value","professor","p_seq");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("write_postmessage.xfdl", function() {
        this.fn_callback = function(id,ErrorCode,ErrorMsg){
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }

        this.Div00_Button00_onclick = function(obj,e)
        {
        		var receiver = this.Div00.form.Div00.form.Edit00.value;
        		var contents=nexacro.wrapQuote(this.Div00.form.Div00_00.form.TextArea00.value);

        		 this.transaction(
                    "PMInsert"
                    ,"/PMInsert.nex"
                    ,""
                    ,""
                    ,"receiver="+receiver+" contents="+contents
                    ,"fn_callback"
                 )

        		 alert("전송되었습니다.");
        		 this.Div00.form.Div00_00.form.TextArea00.set_value("");
        };



        this.rest_onload = function(obj,e)
        {
        	this.transaction(
                    "ListProfessor"
                    ,"/ListProfessor.nex"
                    ,""
                    ,"professor=out_ds"
                    ,""
                    ,"fn_callback"
                 )
        };

        this.Div00_Button00_00_onclick = function(obj,e)
        {
        	var cmb = this.Div00.form.Combo00.value;
        	var edit = this.Div00.form.Edit00.value;
        	var depart = this.Div00.form.Combo01.value;
        	if(cmb == 'p_seq')
        	{
        		this.professor.filter("");
        	}
        	else if (cmb == 'name')
        	{
        		this.professor.filter(cmb+".indexOf('"+edit+"')>=0");
        	}else if(cmb =='deptCode'){

        		this.professor.filter("deptCode=='"+depart+"'");
        	}
        	this.Div00.form.Edit00.set_value("");
        };



        this.Div00_Combo00_onitemchanged = function(obj,e)
        {
        	var cmb = this.Div00.form.Combo00.value;
        	if(cmb=='deptCode'){
        		this.Div00.form.Combo01.set_visible(true);
        		this.Div00.form.Edit00.set_visible(false);
        	}else{
        		this.Div00.form.Combo01.set_visible(false);
        		this.Div00.form.Edit00.set_visible(true);
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.rest_onload,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
            this.Div00.form.Combo00.addEventHandler("onitemchanged",this.Div00_Combo00_onitemchanged,this);
            this.Div00.form.Button00_00.addEventHandler("onclick",this.Div00_Button00_00_onclick,this);
        };

        this.loadIncludeScript("write_postmessage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
