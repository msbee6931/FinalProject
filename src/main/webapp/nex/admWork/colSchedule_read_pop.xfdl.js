(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("colSchedule_read_pop");
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

            obj = new Button("btn_ok","160","259","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_title","value","colSchedule_ds","title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cal_sDate","value","colSchedule_ds","sDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_eDate","value","colSchedule_ds","eDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tea_content","value","colSchedule_ds","contents");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("colSchedule_read_pop.xfdl", function() {
        this.seq=this.parent.seq;

        this.colSchedule_read_pop_onload = function(obj,e)
        {
        	this.transaction(
        		"selectOneColSchedule",//id
        		"/schedule/selectOneColSchedule",//url (절대경로)
        		"",//in_ds:U
        		"colSchedule_ds=out_ds",//()_out_ds
        		"seq="+this.seq,//argument
        		"fn_callback"
        		)
        };

        this.btn_ok_onclick = function(obj,e)
        {
        	var title = this.edt_title.value;
        	var sDate = nexacro.toNumber(this.cal_sDate.value);
        	var eDate = this.cal_eDate.value;
        	var contents = this.tea_content.value;


        	var nRow = this.colSchedule_ds.addRow();
        	this.colSchedule_ds.setColumn(nRow,"title",title);
        	this.colSchedule_ds.setColumn(nRow,"sDate",sDate);
        	this.colSchedule_ds.setColumn(nRow,"eDate",eDate);
        	this.colSchedule_ds.setColumn(nRow,"contents",contents);

        	this.transaction(
        		"updateColSchedule",//id
        		"/schedule/updateColSchedule",//url (절대경로)
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
            this.addEventHandler("onload",this.colSchedule_read_pop_onload,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
        };

        this.loadIncludeScript("colSchedule_read_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
