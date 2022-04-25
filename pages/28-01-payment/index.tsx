import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

const PaymentPage = () => {
  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp11209640"); // imp49910675
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "노르웨이 회전 의자",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "localhost:3000/28-01-payment",
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          // createPointTrasactionOfLoading Mutation(Imp_uid variable로 넘기기)
          // 결제 날짜, 결제된 시간, 취소된 시간 backend에서 newDate로 날짜 생성 가능
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      결제금액: <input type="text" />
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
};

export default PaymentPage;
