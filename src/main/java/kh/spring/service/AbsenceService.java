package kh.spring.service;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.compress.archivers.zip.ZipArchiveEntry;
import org.apache.commons.compress.archivers.zip.ZipArchiveOutputStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.spring.dao.AbsenceDAO;
import kh.spring.dto.AbsenceDTO;
import kh.spring.dto.AbsenceFileDTO;
import kh.spring.dto.RestDTO;

@Service
public class AbsenceService {

	@Autowired
	AbsenceDAO aDao;
	
		public int insertAbsence(AbsenceDTO dto) {
			return aDao.insertAbsence(dto);
		}
		public int insertFileUp(AbsenceFileDTO dto) {
			return aDao.insertFileUp(dto);
		}
		public List<AbsenceDTO> selectAllAbsence(){
			return aDao.selectAllAbsence();
		}
		public AbsenceDTO selectOneAbsence(int seq) {
			return aDao.selectOneAbsence(seq);
		}
		public int selectCountFile(int seq) {
			return aDao.selectCountFile(seq);
		}
		public  List<AbsenceFileDTO> selectOneFile (int seq) {
			return aDao.selectOneFile(seq);
		}
		
		public AbsenceDTO selectStdOne(int sCode) {
			return aDao.selectStdOne(sCode);
		}
		
		public int insertRest(RestDTO dto) {
			return aDao.insertRest(dto);
		}
		
		public List<RestDTO> selectOneRest(int std_code) {
			return aDao.selectOneRest(std_code);
		}
		
		public File getCompressZipFile(ArrayList arrSaved, String filePath, String compressName) throws Exception {

			  String path = filePath;
			  String files[] = new String[arrSaved.size()];		  
			  File destination = new File(path);
			  
			  for(int i=0;i<arrSaved.size();i++) {
			    files[i] = (String)arrSaved.get(i);
			  }
			  
			  //buffer size
			  int size = 1024;
			  byte[] buf = new byte[size];
			  String outZipNm = path +File.separator+ compressName +".zip";
			  
			  File file = new File(outZipNm);
			   
			  FileInputStream fis = null;
			  ZipArchiveOutputStream zos = null;
			  BufferedInputStream bis = null;
			   
			  try {
			    // Zip 파일생성
			   // zos = new ZipArchiveOutputStream(new BufferedOutputStream(new FileOutputStream(outZipNm))); 
			    for( int i=0; i < files.length; i++ ){
			      //encoding 설정
			      zos.setEncoding("UTF-8");
			       
			      //buffer에 해당파일의 stream을 입력한다.
			      fis = new FileInputStream(path +"/"+ files[i]);
			      bis = new BufferedInputStream(fis,size);
			       
			      //zip에 넣을 다음 entry 를 가져온다.
			      zos.putArchiveEntry(new ZipArchiveEntry(files[i].substring(33)));   // saved 내임을 원래이름으로 바꾸기 위에 uuid 앞의 33개를 빼고 출력              
			       
			      //준비된 버퍼에서 집출력스트림으로 write 한다.
			      int len;
			      while((len = bis.read(buf,0,size)) != -1){
			        zos.write(buf,0,len);
			      }
			       
			      bis.close();
			      fis.close();
			      zos.closeArchiveEntry();

			    }
			    zos.close();

			  } catch (Exception e) {
			    e.printStackTrace();
			  }finally{
			    if( zos != null ){  zos.close();  }
			    if( fis != null ){  fis.close();  }
			    if( bis != null ){  bis.close();  }
			  }
			  
			  return file;
			}
}
