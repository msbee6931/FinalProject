(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("absence_pop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("absenceCode_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">군입대</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">질병</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">가사사정</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">사고</Col></Row><Row><Col id=\"name\">기타</Col><Col id=\"code\">05</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00_00_00_00","150","0","600","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_03","0","40","30","520",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","870","40","30","520",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_01","160","580","600","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.set_background("RGBA(236,135,135,0.71)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","30","20","842","560",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_border("1px solid #c1c1c1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","29","30","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학 과");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_title","98","30","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","289","30","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("학 번");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_title00","358","30","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","550","30","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("생년월일");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_title00_00","619","30","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","29","60","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("학 년");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_title01","98","60","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","289","60","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("연락처");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_title00_01","358","60","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","550","60","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("성 명");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_title00_00_00","619","60","191","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","29","90","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("주 소");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_title01_00","98","90","712","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","29","120","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("기 간");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_title01_00_00","98","120","712","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","28","150","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("사 유");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","28","179","100","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("첨부파일");
            obj.set_background("#c1c1c1");
            obj.set_border("1px solid #000000");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_add","709","179","100","39",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("파일찾기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del","709","218","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("파일 삭제");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","29","410","780","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("※유의사항\r\n1. 입대휴학 신청자는 입대 사실을 확인할 수 있는 증명서 1통을 첨부해야 함.\r\n2. 군입대 후 귀향조취 된 경우에는 즉시 행정팀으로 통보해야함.\r\n3. 일반휴학기간 중 입대할 경우에는 입대 전에 입영통지서 사본 1통을 첨부하여 휴학연기 신청서를 제출해야 함.\r\n4. 질병으로 휴학하는 경우에는 종합병원장이 발행하는 4주 이상의 진단서를 첨부해야함.\r\n5. 휴학기간 만료 후 해당 학기 등록기간 내에 복학하지 않을 경우에는  제적처리 됨.");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","129","180","575","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj._setContents("");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","102","155","707","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_innerdataset("absenceCode_ds");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_rowcount("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","592","515","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("확인");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","714","515","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("취소");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","28","250","782","152",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("\r\n\r\n본인은 보호자의 동의하에 위와 같이 휴학하고자 하오니 허가하여 주시기 바랍니다.");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.btn_add.addEventHandler("onclick",this.Div00_btn_add_onclick,this);
            this.Div00.form.btn_del.addEventHandler("onclick",this.Div00_btn_del_onclick,this);
        };

        this.loadIncludeScript("absence_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
