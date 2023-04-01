import React from "react";
import './blogCase.css';
import lockIcon from './images/lock.svg';
import gift from './images/gift.png';
import topHouse from './images/topHouse.png';
import topSky from './images/topSky.png';
import bottomSky from './images/topHouseBottomSky.png';
import formBottomSky from './images/topFormBottomSky.png';
import leftTree from './images/leftTree.png';
import Article from "../Article";
import thing from "./images/thing.png";
import leaf from "./images/leaf.png";
import Gallery from "../Gallery";
import ContactForm from "../ContactForm";

export const BlogCase = () => {
    return (
        <main className="blog-case">
            <h1>
                Кейс: дом из оцилиндрованного бруса
                <br/>
                в Балашихе под ключ
            </h1>
            <p className="blog-case_description">
                Двухэтажный дом, площадью 128 м² в европейском стиле
            </p>
            <section className="blog-case_review">
                <form className="blog-case_form">
                    <h2>
                        Хотите сотрудничать с профессионалами? 
                    </h2>
                    <p className="blog-case_form-description">
                        Оставьте заявку и получите бесплатную консультацию
                    </p>
                    <div className="blog-case_form-fields">
                        <input placeholder="Ваше имя" className="blog-case_form-field"/>
                        <div className="blog-case_form-select">
                            <select className="blog-case_form-field">
                                <option selected disabled hidden>Выберите услугу</option>
                                <option>lorem</option>
                                <option>ipsum</option>
                            </select>
                        </div>
                        <input placeholder="Ваш телефон" className="blog-case_form-field"/>
                        <button className="blog-case_form-field">Отправить</button>
                        <p className="blog-case_form-privacy">
                            <img src={lockIcon} alt="lock" />
                            Ваши данные не будут переданы третьим лицам
                        </p>
                    </div>
                    <img className="big-gift" src={gift} alt="gift"/>
                    <img className="small-gift" src={gift} alt="gift"/>
                    <img className="sky" src={formBottomSky} alt="sky"/>
                </form>
                <button className="video-review">видеоотзыв</button>
            </section>
            <img className="top-right" src={topHouse} alt="house"/>
            <img className="top-right" src={topSky} alt="sky"/>
            <img className="underForm-right" src={bottomSky} alt="sky"/>
            <img className="left-tree" src={leftTree} alt="tree"/>

            <Article header={"Какие задачи поставил клиент?"}>
                <img className="top-right" src={thing} />
                <p>
                    С другой стороны начало повседневной работы по формированию позиции обеспечивает широкому кругу 
                    (специалистов) участие в формировании систем массового участия. 
                    С другой стороны начало повседневной работы по формированию позиции представляет собой интересный
                    эксперимент проверки существенных финансовых и административных условий. 
                    Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует 
                    подготовки и реализации направлений прогрессивного развития.
                </p>
                <br/>
                <p>
                    Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности
                    обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития.
                    Равным образом укрепление и развитие структуры представляет собой интересный эксперимент проверки позиций,
                    занимаемых участниками в отношении поставленных задач. С другой стороны постоянное
                    информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает
                    создание дальнейших направлений развития. Идейные соображения высшего порядка, а также постоянное
                    информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения
                    и модернизации систем массового участия.
                </p>
                <img className="bottom-left" src={leaf} />
            </Article>

            <Article header={"Этап 1"} description={"подготовка проекта"}>
                <p>
                    С другой стороны начало повседневной работы по формированию позиции обеспечивает широкому кругу
                    (специалистов) участие в формировании систем массового участия. С другой стороны начало повседневной
                    работы по формированию позиции представляет собой интересный эксперимент проверки существенных
                    финансовых и административных условий. Не следует, однако забывать, что дальнейшее развитие
                    различных форм деятельности способствует подготовки и реализации направлений прогрессивного развития.
                </p>
                <br/>
                <p>
                    Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности
                    обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития.
                    Равным образом укрепление и развитие структуры представляет собой интересный эксперимент проверки
                    позиций, занимаемых участниками в отношении поставленных задач. С другой стороны постоянное
                    информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает
                    создание дальнейших направлений развития. Идейные соображения высшего порядка, а также постоянное
                    информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и
                    модернизации систем массового участия.
                </p>
            </Article>
            <Gallery />
            <ContactForm />
        </main>
    );
}
 
export default BlogCase;