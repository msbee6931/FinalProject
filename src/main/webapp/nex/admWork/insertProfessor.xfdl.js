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
                this._setFormPosition(300,420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_professor_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"p_seq\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"contact\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"lecture\" type=\"STRING\" size=\"256\"/><Column id=\"pw\" type=\"STRING\" size=\"256\"/><Column id=\"secNumber\" type=\"STRING\" size=\"256\"/><Column id=\"colCode\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("deptCode_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">11</Col><Col id=\"name\">국어국문학과</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"name\">영어영문학과</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"name\">국사학과</Col></Row><Row><Col id=\"code\">14</Col><Col id=\"name\">철학과</Col></Row><Row><Col id=\"code\">21</Col><Col id=\"name\">사회복지학과</Col></Row><Row><Col id=\"code\">22</Col><Col id=\"name\">경제학부</Col></Row><Row><Col id=\"code\">23</Col><Col id=\"name\">사회학과</Col></Row><Row><Col id=\"code\">24</Col><Col id=\"name\">심리학과</Col></Row><Row><Col id=\"code\">31</Col><Col id=\"name\">통계학과</Col></Row><Row><Col id=\"code\">32</Col><Col id=\"name\">화학부</Col></Row><Row><Col id=\"code\">33</Col><Col id=\"name\">생명과학부</Col></Row><Row><Col id=\"code\">41</Col><Col id=\"name\">간호학부</Col></Row><Row><Col id=\"code\">51</Col><Col id=\"name\">전기공학부</Col></Row><Row><Col id=\"code\">52</Col><Col id=\"name\">컴퓨터공학부</Col></Row><Row><Col id=\"code\">53</Col><Col id=\"name\">화학생물공학부</Col></Row><Row><Col id=\"code\">54</Col><Col id=\"name\">건축학과</Col></Row><Row><Col id=\"code\">55</Col><Col id=\"name\">산업공학과</Col></Row><Row><Col id=\"code\">61</Col><Col id=\"name\">교육학과</Col></Row><Row><Col id=\"code\">62</Col><Col id=\"name\">국어교육과</Col></Row><Row><Col id=\"code\">63</Col><Col id=\"name\">영어교육과</Col></Row><Row><Col id=\"code\">64</Col><Col id=\"name\">수학교육과</Col></Row><Row><Col id=\"code\">65</Col><Col id=\"name\">체육교육과</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("colCode_Copy", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">10</Col><Col id=\"name\">인문대학</Col></Row><Row><Col id=\"code\">20</Col><Col id=\"name\">사회과학대학</Col></Row><Row><Col id=\"code\">30</Col><Col id=\"name\">자연과학대학</Col></Row><Row><Col id=\"code\">40</Col><Col id=\"name\">간호대학</Col></Row><Row><Col id=\"code\">50</Col><Col id=\"name\">공과대학</Col></Row><Row><Col id=\"code\">60</Col><Col id=\"name\">사범대학</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","20","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("교수번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","55","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","10","90","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("주민번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","10","125","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이메일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","10","160","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전화번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04","10","195","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("주소");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_05","10","230","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("강사");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06","10","265","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("초기비밀번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","85","55","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_email","85","125","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_contact","85","160","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_address","85","195","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pw","85","265","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("edt_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","35","390","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("입력");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","160","390","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("취소");
            obj.set_cssclass("btn_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06_00","10","300","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("학과분류");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_06_00_00","10","335","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("학과");
            this.addChild(obj.name, obj);

            obj = new Combo("com_colCode","85","300","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_innerdataset("colCode_Copy");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_cssclass("cmb_default");
            this.addChild(obj.name, obj);

            obj = new Combo("com_deptCode","85","335","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("deptCode_copy");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_cssclass("cmb_default");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mas_secNumber","85","90","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_type("string");
            obj.set_format("###### - #{######}");
            obj.set_cssclass("med_default");
            this.addChild(obj.name, obj);

            obj = new Combo("com_lecture","85","230","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("cmb_default");
            var com_lecture_innerdataset = new nexacro.NormalDataset("com_lecture_innerdataset", obj);
            com_lecture_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(com_lecture_innerdataset);
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mas_p_seq","85","20","175","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_type("string");
            obj.set_format("#########");
            obj.set_cssclass("med_default");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,420,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("insertProfessor.xfdl", function() {
        this.fn_callback = function(id,ErrorCode,ErrorMsg){	//콜백함수
        	trace(id);
        	trace(ErrorMsg);
        	trace(ErrorCode);
        }


        this.btn_insert_onclick = function(obj,e)
        {
        	var p_seq = this.mas_p_seq.value;
        	var name = this.edt_name.value;
        	var secNumber = this.mas_secNumber.value;
        	var email = this.edt_email.value;
        	var contact = this.edt_contact.value;
        	var address = this.edt_address.value;
        	var lecture = this.com_lecture.value;
        	var pw = this.edt_pw.value;
        	var colCode = this.com_colCode.value;
        	var deptCode = this.com_deptCode.value;

        	var rp_seq = this.mas_p_seq.text.length;

        	var test = this.mas_p_seq.text.substring(rp_seq,rp_seq-1);
        	trace(test);


        	if(p_seq == null || p_seq == "undefined" || test == '_'){
        		this.alert("교수번호 입력해주세요(9자리)");
        		return;
        	}else if(name == null || name == "undefined"){
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
        	}else if(pw == null || pw == "undefined"){
        		this.alert("비밀번호 입력해주세요");
        		return;
        	}else if(lecture == null || lecture == "undefined"){
        		this.alert("강사여부 입력해주세요");
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
        	this.ds_professor_copy.setColumn(addRow,"lecture",lecture);
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_insert.addEventHandler("onclick",this.btn_insert_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.com_lecture.addEventHandler("onitemchanged",this.com_lecture_onitemchanged,this);
        };

        this.loadIncludeScript("insertProfessor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
