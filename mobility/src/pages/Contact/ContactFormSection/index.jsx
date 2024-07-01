import style from "./index.module.css";

function ContactFormSection () {
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <h2 className={style.title}>문의하기</h2>

        <form action="" className={style.input_form}>
          <span>* 필수입력</span>
          <ul className={style.input_list}>
            <li className={style.input_item}>
              <span className={style.category}>연락처</span>
              <input type="text" name="" id="" className={style.basic_input} placeholder="연락처를 입력해주세요." />
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
}

export default ContactFormSection;