package user;

import java.sql.*;

public class UserDAO {
    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;

    public UserDAO(){
        try {
            String URL ="jdbc:mysql://localhost:3306/spao";
            String DBID ="root";
            String DBPW ="1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(URL, DBID, DBPW);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // 회원가입
    public int signup(UserDTO userDTO){
        String SQL ="insert into spao_member(user_name,user_id,user_pw,user_birth,user_hp,user_addr,user_email,user_receive) values(?,?,?,?,?,?,?,?)";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, userDTO.getUser_name());
            ps.setString(2, userDTO.getUser_id());
            ps.setString(3, userDTO.getUser_pw());
            ps.setString(4, userDTO.getUser_birth());
            ps.setString(5, userDTO.getUser_hp());
            ps.setString(6, userDTO.getUser_addr());
            ps.setString(7, userDTO.getUser_email());
            ps.setString(8, userDTO.getUser_receive());

            return ps.executeUpdate();
            
        } catch (Exception e) {
             e.printStackTrace();
        }
        return -1;
    }

    // 아이디 중복 검사
    public int id_search(UserDTO userDTO){
        String SQL ="select * from spao_member where user_id=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1,userDTO.getUser_id());

            rs = ps.executeQuery();
            if(rs.next()){ 
                return -1; 
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return 1;
    }

    // 로그인

    public int signin(String user_id, String user_pw){
        String SQL = "SELECT user_pw FROM spao_member WHERE user_id = ?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_id);

            rs = ps.executeQuery();
            if(rs.next()){
                if(rs.getString(1).equals(user_pw)){
                    return 1;
                }
                else { 
                    
                    return 0;
                }
            }
            else {
                return -1;
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        finally{
            try {
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch (Exception e) {   
                e.printStackTrace();
            }
        }
        return -2;
        
    }

}
