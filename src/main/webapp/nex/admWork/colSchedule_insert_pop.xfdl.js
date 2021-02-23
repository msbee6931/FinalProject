(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("colSchedule_insert_pop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("colSchedule_ds", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"sDate\" type=\"STRING\" size=\"256\"/><Column id=\"eDate\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"writeDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","10","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제목");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_title","70","10","320","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","40","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("일자");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_sDate","70","40","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","10","70","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("내용");
            this.addChild(obj.name, obj);

            obj = new TextArea("tea_content","10","100","380","150",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_eDate","260","40","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","225","40","10","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","100","259","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("확인");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle","203","259","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("취소");
            obj.set_cssclass("btn_can");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("colSchedule_insert_pop.xfdl", function() {

        this.btn_cancle_onclick = function(obj,e)
        {
        	this.close();
        };



        this.btn_ok_onclick = function(obj,e)
        {
        	var title = this.edt_title.value;
        	var sDate = nexacro.toNumber(this.cal_sDate.value);
        	var eDate = this.cal_eDate.value;
        	var contents = this.tea_content.value;
        	alert(title+sDate+eDate+contents)


        	var nRow = this.colSchedule_ds.addRow();
        	this.colSchedule_ds.setColumn(nRow,"title",title);
        	this.colSchedule_ds.setColumn(nRow,"sDate",sDate);
        	this.colSchedule_ds.setColumn(nRow,"eDate",eDate);
        	this.colSchedule_ds.setColumn(nRow,"contents",contents);

        	this.transaction(
        		"insertColSchedule",//id
        		"/schedule/insertColSchedule",//url (절대경로)
        		"in_ds=colSchedule_ds:U",//in_ds:U
        		"",//()_out_ds
        		"",//argument
        		"fn_callback"
        		)


        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
            this.btn_cancle.addEventHandler("onclick",this.btn_cancle_onclick,this);
        };

        this.loadIncludeScript("colSchedule_insert_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
