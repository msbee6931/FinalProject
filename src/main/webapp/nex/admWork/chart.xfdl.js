(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("chart");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("colCodeChart_ds", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("deptCodeChart_ds", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("genderChart_ds", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("colCodeChartCopy_ds", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("deptCodeChartCopy_ds", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("genderChartCopy_ds", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("Div00","30","39","1021","451",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_line");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","19","20","490","250",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("colCodeChart_ds");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "단과대 학생 수",
            		"textfont": "16pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"visible": false
            	},
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": false
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": false
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px",
            		"visible": true
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "8pt '맑은 고딕'",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0",
            		"visible": true
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "8pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"labelmask": "#"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:value",
            			"barlinestyle": "1px solid #1abd9c",
            			"barfillstyle": "#1abd9c",
            			"selectcolumn": "bind:category"
            		}
            	]
            });
            obj.set_categorycolumn("bind:category");
            this.Div00.addChild(obj.name, obj);

            obj = new PieChart("PieChart00","174","280","175","160",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("genderChart_ds");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "학생 성(姓) 수",
            		"textfont": "14pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"visible": true
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "#ffffff",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px",
            		"visible": true
            	},
            	"board": {
            		"id": "board"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"radius": 150,
            			"innerradius": "60",
            			"linestyle": "2px solid #ffffff",
            			"itemtextvisible": true,
            			"itemtextfont": "12pt/normal '맑은 고딕'",
            			"valuecolumn": "bind:value",
            			"itemtextguidelinestyle": "1px solid transparent",
            			"itemtextguidesize": "10"
            		}
            	]
            });
            obj.set_categorycolumn("bind:category");
            this.Div00.addChild(obj.name, obj);

            obj = new FloatChart("FloatChart00","559","18","432","393",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_binddataset("deptCodeChart_ds");
            obj._setContents({
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "#ffffff",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px",
            		"visible": false
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "8pt '맑은 고딕'",
            		"axislinestyle": "1px solid #d0d0d0",
            		"boardlinestyle": "1px solid #d0d0d0",
            		"visible": true
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt '맑은 고딕'",
            			"axislinestyle": "1px solid #d0d0d0",
            			"boardlinestyle": "1px solid #d0d0d0",
            			"boardlinevisible": "true",
            			"labeltype": "text",
            			"opposite": "false",
            			"tickinterval": "1",
            			"labelmask": "#"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"linevisible": true,
            			"itemtextvisible": "true",
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "bold 8pt '맑은 고딕'",
            			"valuecolumn": "bind:value",
            			"tooltiptext": "",
            			"positivebarlinestyle": "1px solid red",
            			"positivebarfillstyle": "#eb495c",
            			"negativebarlinestyle": "1px solid blue",
            			"negativebarfillstyle": "#5058eb",
            			"highlightbarvisible": "false",
            			"selecttype": "bind"
            		}
            	],
            	"title": {
            		"id": "title",
            		"text": "Float Chart",
            		"textfont": "20pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"linestyle": "0px none"
            	}
            });
            obj.set_categorycolumn("bind:category");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","30","9","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("통계 관리");
            obj.set_cssclass("sta_title");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,520,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_title01_00","value","students_ds","adress");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_title00_00","value","students_ds","birth");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edt_title00_01","value","students_ds","contact");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_title00_00_00","value","students_ds","name");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("chart.xfdl", function() {

        this.chart_onload = function(obj,e)
        {
        	this.transaction(
        		"chatCount",//id
        		"/students/chart.students",//url (절대경로)
        		"",//in_ds:U
        		"colCodeChartCopy_ds=listCol deptCodeChartCopy_ds=listDept genderChartCopy_ds=listGender",//()_out_ds
        		"",//argument
        		"fn_callback"
        	)
        };

        this.fn_callback = function()
        {

        	for (var i=0; i<this.colCodeChartCopy_ds.getRowCount();i++)
        	{
        		var category = this.colCodeChartCopy_ds.getColumn(i,"category");
        		var count = this.colCodeChartCopy_ds.getColumn(i,"count");
        		if(category == '10')
        		{
        			this.colCodeChart_ds.addRow();
        			this.colCodeChart_ds.setColumn(i,"category","인문대학");
        			this.colCodeChart_ds.setColumn(i,"value",count);

        		}
        		else if (category == '20')
        		{
        			this.colCodeChart_ds.addRow();
        			this.colCodeChart_ds.setColumn(i,"category","사회과학대학");
        			this.colCodeChart_ds.setColumn(i,"value",count);
        		}
        		else if (category == '30')
        		{
        			this.colCodeChart_ds.addRow();
        			this.colCodeChart_ds.setColumn(i,"category","자연과학대학");
        			this.colCodeChart_ds.setColumn(i,"value",count);
        		}
        		else if (category == '40')
        		{
        			this.colCodeChart_ds.addRow();
        			this.colCodeChart_ds.setColumn(i,"category","간호대학");
        			this.colCodeChart_ds.setColumn(i,"value",count);
        		}
        		else if (category == '50')
        		{
        			this.colCodeChart_ds.addRow();
        			this.colCodeChart_ds.setColumn(i,"category","공과대학");
        			this.colCodeChart_ds.setColumn(i,"value",count);
        		}
        		else if (category == '60')
        		{
        			this.colCodeChart_ds.addRow();
        			this.colCodeChart_ds.setColumn(i,"category","사범대학");
        			this.colCodeChart_ds.setColumn(i,"value",count);
        		}
        	}






        	for (var j=0; j<this.deptCodeChartCopy_ds.getRowCount(); j++)
        	{
        		var category = this.deptCodeChartCopy_ds.getColumn(j,"category");
        		var count = this.deptCodeChartCopy_ds.getColumn(j,"count");
        		if(category == '11')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","국어국문학과");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '12')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","영어영문학과");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '13')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","국사학과");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '14')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","철학과");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '21')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","사회복지학과");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '12')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","영어영문학과");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '22')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","경제학부");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '23')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","사회학과");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '24')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","심리학과");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '31')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","통계학과");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '32')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","화학부");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '33')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","생명과학부");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '41')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","간호학부");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '51')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","전기공학부");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '52')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","컴퓨터공학부");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '53')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","화학생물공학부");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '54')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","건축학과");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '55')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","산업공학과");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '61')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","교육학과");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '62')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","국어교육과");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '63')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","영어교육과");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '64')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","수학교육과");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        		else if (category == '65')
        		{
        			this.deptCodeChart_ds.addRow();
        			this.deptCodeChart_ds.setColumn(j,"category","체육교육과");
        			this.deptCodeChart_ds.setColumn(j,"value",count);
        		}
        	}

        	//성별 사람 수
        	for (var i=0; i<this.genderChartCopy_ds.getRowCount();i++)
        	{
        		var category = this.genderChartCopy_ds.getColumn(i,"category");
        		var count = this.genderChartCopy_ds.getColumn(i,"count");
        		if(category == '남')
        		{
        			this.genderChart_ds.addRow();
        			this.genderChart_ds.setColumn(i,"category","남학생");
        			this.genderChart_ds.setColumn(i,"value",count);

        		}
        		else if (category == '여')
        		{
        			this.genderChart_ds.addRow();
        			this.genderChart_ds.setColumn(i,"category","여학생");
        			this.genderChart_ds.setColumn(i,"value",count);
        		}

        	}


        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.chart_onload,this);
        };

        this.loadIncludeScript("chart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
