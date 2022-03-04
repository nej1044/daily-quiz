import * as S from './style'
import * as A from '@ant-design/icons'
import {Avatar} from 'antd'
  
  export default function MyPage() {
    
    return ( 
      <>
        <S.Wrapper>
          <S.WrapperHeader>
          <A.SearchOutlined style={{ width: '100%', fontSize: '20px', fontWeight: 800, textAlign: 'right' }} />
            <S.Profile>
              <h1>마이</h1> 
              <S.ProfileTitle>
                <Avatar style={{ width:32, height: 32, borderRadius: 16, overflow: 'hidden'}} src="https://joeschmoe.io/api/v1/random" /> 
                <span style={{ padding: 0 }}>임정아</span>
                <A.RightOutlined style={{fontSize: '12px', color: '#999999' }} />
              </S.ProfileTitle>
            </S.Profile>
            <S.HeaderNavbar>
              <S.MenuTitle>공지사항</S.MenuTitle>
              <S.MenuTitle>이벤트</S.MenuTitle>
              <S.SelectTitle>FAQ</S.SelectTitle>
              <S.MenuTitle>Q&amp;A</S.MenuTitle>
            </S.HeaderNavbar>
          </S.WrapperHeader>
          <S.WrapperBody>
            <S.Question>
              <S.QuestionTitle>
                <S.QuestionNum>Q.01</S.QuestionNum>리뷰 작성은 어떻게 하나요?
              </S.QuestionTitle>
              <A.DownOutlined style={{fontSize: '18px', color: '#999999' }} />
            </S.Question>
            <S.Question>
              <S.QuestionTitle>
                <S.QuestionNum>Q.02</S.QuestionNum>리뷰 수정/삭제는 어떻게 하나요?
              </S.QuestionTitle>
              <A.DownOutlined style={{fontSize: '18px', color: '#999999' }} />
            </S.Question>
            <S.Question>
              <S.QuestionTitle>
                <S.QuestionNum>Q.03</S.QuestionNum>아이디/비밀번호를 잊어버렸어요.
              </S.QuestionTitle>
              <A.DownOutlined style={{fontSize: '18px', color: '#999999' }} />
            </S.Question>
            <S.Question>
              <S.QuestionTitle>
                <S.QuestionNum>Q.04</S.QuestionNum>회원탈퇴를 하고 싶어요.
              </S.QuestionTitle>
              <A.DownOutlined style={{fontSize: '18px', color: '#999999' }} />
            </S.Question>
            <S.Question>
              <S.QuestionTitle>
                <S.QuestionNum>Q.05</S.QuestionNum>출발지 설정은 어떻게 하나요?
              </S.QuestionTitle>
              <A.DownOutlined style={{fontSize: '18px', color: '#999999' }} />
            </S.Question>
            <S.Question>
              <S.QuestionTitle>
                <S.QuestionNum>Q.06</S.QuestionNum>비밀번호를 변경하고 싶어요.
              </S.QuestionTitle>
              <A.DownOutlined style={{fontSize: '18px', color: '#999999' }} />
            </S.Question>
          </S.WrapperBody>
          <S.WrapperFooter>
            <S.FooterMenu><A.HomeOutlined style={{ fontSize: '24px', marginBottom: 5 }} />홈</S.FooterMenu>
            <S.FooterMenu><A.EnvironmentOutlined style={{ fontSize: '24px', marginBottom: 5 }} />잇츠로드</S.FooterMenu>
            <S.FooterMenu><A.HeartOutlined style={{ fontSize: '24px', marginBottom: 5 }} />마이찜</S.FooterMenu>
            <S.SelectFooterMenu><A.UserOutlined style={{ fontSize: '24px', marginBottom: 5 }} />마이</S.SelectFooterMenu>
          </S.WrapperFooter>
        </S.Wrapper>
      </>
    )
  }