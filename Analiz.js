import React from 'react';
import { isJSXOpeningFragment } from '@babel/types';


export const Analiz = () => (

    <div>
        <ul className="flex-container">
            <li className="flex-item">
                <h2>Ünlü Boksörlerin Teknik Analizi</h2>

                <p><strong>Ülkemizde boks sporu uzun yıllar öncesine dayanmakla birlikte profesyonel anlamda</strong>
                    yaygınlaşması çok uzun bir geçmişe sahip değildir. Şu an ismini, başarılarını duyduğumuz çoğu boksörümüz
                    profesyonel maçlara çıkabilmek için çoğunlukla Almanya vatandaşı olarak lisans almış ve spor yapmışlardır.
                    Profesyonel boksun ülkemizdeki kısa geçmişine rağmen Almanya, Meksika, Küba ve Amerika'da
                    profesyonel anlamda yılların birikimiyle geniş bir boks kültürü oluşmuştur. Bu kültürün bir yansıması olarak da
                    çoğu şampiyon olan boksörlerin nasıl savunma aldıkları, atağa nasıl ve ne şekilde geçtikleri gibi onları
        diğerlerinden ayıran yetenek ve tekniklerin çok kaliteli şekilde analizlerinin videoları hazırlanmış olmasıdır.<br />
                    İsteğim boksun gelişmesi adına bizde de bu şekilde analizlerin yapılmasıdır. Eğer varsa elinizde teknik analiz videoları
        veya yazılı metinler benimle paylaşırsanız, ben de buradan sporcuların kullanımına sunabilirim.  <br />

                    Aşağıya youtube'da rastladığım ve beğendiğim, çoğunlukla ingilizce olarak hazırlanmış analiz videolarını sıralamaya
        başlıyorum. Öneri ve öneri videolarınızı buradan bana gönderebilirsiniz.<br />

                    Hadi başlayalım...<br /></p>
            </li>

            <li className="flex-item" id="Floyd">
                <h3>Floyd Myweather Jr.</h3>

                <p>Yakından tanıdığımız emekli şampiyonun ayrıntılı ve gördüğüm en iyi analiz videosu. Dikkatli izlenirse
                    müsabakalarda rahatlıkla uygulanabilecek çok değerli dersler çıkarılacaktır. İngilizce olmasına bakmayın, anlatılanlar
                    çizimlerle de gösterilmiş. Zaman bulabilsem türkçeye çevirmek istiyorum ancak yardımcı olabilecek sporsevelerin
                     tekliflerine de açığım.</p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/rTSJqpOkgRo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
            </li>

            <li className="flex-item">
                <h3>Boks Sporunun Temelleri</h3>

                <p>Şampiyonların maç analizlerine geçmeden önce çok iyi hazırlanmış boksun temelleri video serisini sizlerle
                    paylaşmak istiyorum. Profesyonel manada boksörün duruşundan, atak ve savunma yolları üzerine
                    hazırlanmış ayrıntılı, maçlardan video kesitleri ile görsellik eklenmiş bu videoları izlemeden geçmeyin derim.
                    </p>
                    <ul><b>
                        <li>Circle Line</li>
                        <li>Triangle Theory</li>
                        <li>Conventional Fight Strategies</li>
                        <li>Cutting The Ring</li>
                        <li>The Jub</li>
                        <li>Distance Deception</li>
                        <li>Weight Distribution</li>
                        </b></ul>

            </li>

        </ul>
    </div>
)
export default Analiz;
