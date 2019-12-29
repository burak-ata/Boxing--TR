import React from 'react';
import { NavLink as Link } from 'react-router-dom';

export const Sparring = () => (



    <div>
        <ul className="flex-container">
            <li className="flex-item">
                <h4>Sparring Buluşması</h4>
                <p>Boksun ve boksörün gelişmesi için yola çıktığımız bu sitenin bir diğer amacı da kendini geliştirmek isteyen boksörleri ve onların değerli hocalarını <em>biraraya getirebilmek. Halizhazırda büyük ve sporcu sayısı fazla kulüplerimizin
            buna pek fazla ihtiyaçları olmamakla beraber il ve ilçelerimizde daha mütevazi imkanlarla boksu yaşatmaya çalışan kulüplerimizin buna fazlasıyla gereksinimi var.</em>
                    İşte tam bu sebeple yetenekli boksörlerimize sparring çalışmalarını yapacakları uygun takım arkadaşlarını kolayca bulabilmeleri için bu sayfa hazırlanmıştır.<br />
                    Sparring arkadaşı listesini görmek için <Link to="/Sparring#İdmanListe">tıklayınız.</Link>
                </p>
            </li>
        </ul>

        <ul className="flex-container">
            <li className="flex-item">
                <h2>Sparring nedir</h2>
                <p>Profesyonel veya amatör boksta kişinin kendini geliştirmesi için farklı ve fazlaca teknik bulunmakta. Bu tekniklerden biri de ingilizce <em>sparring</em> kelimesiyle ifade edilen
        türkçeye idman olarak çevirebileceğimiz çalışmadır. Boksörün köşesi, rakip belli ise ona göre değilse karşılarına çıkabilecek rakipleri göz önüne alarak
        boksöre çalışma arkadaşları seçer. Genelde aynı kiloda olması tercih edilirken uzun veya kısa, hızlı veya yavaş, sert veya teknik gibi rakip boksörlerin
        özelliğine göre farklı tercihler değerlendirilir. İdeal olanı boksörün her tür farklı tekniğe ve fiziksel yapıya sahip rakiplerle sparring çalışması yapması ve
        buradan edindiği tecrübeyi amatör veya profesyonel müsabakalarda kullanmasıdır.</p>
                İki ünlü ismin sparring çalışmasını aşağıdan izleyebilirsiniz.

        </li>
        </ul>

        <ul className="flex-container">
            <li className="flex-item" id="idmanarkadaşları">
                <ul>
                    <strong>İşte yakından tanıdığınız sparring arkadaşları ünlü boksörler;</strong><br />
                    <li>Tyson Fury'nin idman arkadaşları <a href="http://basementgymboxing.blogspot.com/2014/12/tyson-furys-sparring-profile-sparring.html">listesi</a> </li>
                    <li> Oscar De La Hoya; Shane Mosley, Antonio Margarito </li>
                    <li>Genady Golovkin idman arkadaşları <a href="http://basementgymboxing.blogspot.com/2014/07/gennady-golovkins-sparring-profile.html">listesi</a></li>
                    <li>Saul "Canelo" Alvarez; Chris Algieri, Francisco Santana </li>
                    <li>Devon Alexander;  Miguel Cruz, Amir Imam</li>
                    <li>M. Ali; Larry Holmes, Jimmy Ellis</li>
                    <li>Timothy Bradley; Lucas Matthysse, Terence Crawford </li>
                    <li>Adrien Broner;  Errol Spence, Robert Easter  </li>
                    <li>Ricky Burns; Luke Campbell, Kevin Mitchell </li>
                    <li>Wladimir Klitschko; Eddie Chambers, Antony Joshua   </li>
                </ul>
            </li>
        </ul>
        <ul className="flex-container">
            <li className="flex-item"><p>Belki ilk defa duymuş olabilirsiniz ancak bu çalışmanın boks dünyasının olmazsa olmazı olduğunu birazdan vereceğim örneklerle daha net anlamış olacaksınız.Ayrıntılı bir çalışmaya
        <a href="http://basementgymboxing.blogspot.com/2014/07/who-were-their-sparring-partners-boxing.html"> buradan</a> ulaşabilirsiniz.</p> <br />
                <p><strong>Şimdi gelelim bizim boksun ve boksörün gelişmesi </strong> için bu konuda neler yapabileceğimize. Aşağıda, sparring buluşmasının tam olarak amacına
                    ulaşması adına olmazsa olmaz bazı bilgierin girilmesi gerekmektedir. Burada asıl amaç girilen bilgiler üzerinden uygun idman arkadaşını bulmaktır.
            Sonrasında ise mümkün olduğunca boksörlerin/Boks hocalarının iletişime geçerek bu buluşmayı ayarlamalarıdır. <br />
                    Böylece ülkemizin
                    dört bir yanında sporunu yapan boksör arkadaşlarımız/Boks hocalarımız hem tanışacak, motive olacak, kendilerini tartacak hem de boksörlerimiz uygun kişilerle kendilerini
            ulusal veya uluslararası müsabakalarda başarı ortaya koyabilecek seviyeye getirecek nitelikli çalışmaları yapabileceklerdir.          </p>
                <p>Bu bilgileri giridiğinizde adınız listeye eklenecek ve sizinle idman arkadaşı olmak isteyenler iletişime geçebilecektir.
                İşin amacına ve ciddiyetine binaen bilgileri titizlikle ve en doğru haliyle girmenizi rica ediyorum.
            </p>
            </li>
        </ul>



        <ul className="flex-container">
            <li className="flex-item">
                <form action="https://formspree.io/mvogynoz" autocomplete="on" id="form1" method="POST">
                    <fieldset>
                        <legend>Boksörün Bilgileri</legend>
                        Adınız: <br></br>
                        <input type="text" name="adı" placeholder="Mike Tyson" size="45" required></input><br></br>
                        Sıkletiniz/Kilonuz ve Gardınız: <br></br>
                        <input type="text" name="kilo" placeholder="Ağır Sıklet, 90+, sağ gard" size="45" required></input><br></br>
                        Resmi maçlara çıktı iseniz amatörde kaç maç yaptınız? <br></br>
                        <input type="text" name="resmimaç" placeholder="12" size="45" required></input><br></br>
                        En son katıldığınız müsabaka ve varsa başarınız nedir?<br />
                        <input type="text" name="müsabaka" placeholder="Gençler Türkiye Şampiyonası 3.lük " size="45" required></input><br></br>
                        Kulübünüz: <br></br>
                        <input type="text" name="kulüp" placeholder="Tyson Spor Kulübü" size="45" required></input><br></br>
                        Sparring yapmak istediğiniz ilk 3 yeri belirtiniz: <br></br>
                        <input type="text" name="yer" placeholder="Antalya ve çevresi (Konya, Isparta) " size="45" required></input><br></br>
                        Varsa yaptığınız bir maçın youtube videosunun adresini buraya kopyalayıp yapıştırınız: <br></br>
                        <input type="url" name="video" placeholder="https://youtube..." size="45"></input><br></br>
                        Sizinle nasıl iletişime geçilmesini istiyorsanız aşağıda belirtiniz.<br></br>
                        <input type="text, number" name="iletişim" size="45" placeholder="telefon 0555 555 55 55, abc@gmail.com"></input><br></br>
                        <input type="submit" name="Gönder" value="Gönder"/><br></br>
                    </fieldset>
                </form>
            </li>
        </ul>

        <ul className="flex-container">
            <li className="flex-item">
                <h2 id="İdmanListe">İdman Arkadaşı Listesi </h2>

                <table>
                    <tr>
                        <th>Adı</th>
                        <th>Kilo/Sıklet</th>
                        <th>Resmi Maç Sayısı</th>
                        <th>En Son Katıldığı müsabaka</th>
                        <th>Kulübü</th>
                        <th>Sparringi yapabileceği yerler</th>
                        <th>En son yaptığı maç videosu</th>
                        <th>İletişim </th>

                    </tr>
                    <tr>
                        <td>Canelo Alvarez</td>
                        <td>74</td>
                        <td>53</td>
                        <td>Chalenge</td>
                        <td>Canelo Team</td>
                        <td>USA, Mexica</td>
                        <td><a href="https://youtu.be/KtigRU26xjQ">Canelo vs Kovalev</a></td>
                        <td><a href="https://caneloteam.com/">caneloteam</a></td>

                    </tr>
                    <tr>
                        <td>Canelo Alvarez</td>
                        <td>74</td>
                        <td>53</td>
                        <td>Chalenge</td>
                        <td>Canelo Team</td>
                        <td>USA, Mexica</td>
                        <td><a href="https://youtu.be/KtigRU26xjQ">Canelo vs Kovalev</a></td>
                        <td><a href="https://caneloteam.com/">caneloteam</a></td>

                    </tr>
                    <tr>
                        <td>Canelo Alvarez</td>
                        <td>74</td>
                        <td>53</td>
                        <td>Chalenge</td>
                        <td>Canelo Team</td>
                        <td>USA, Mexica</td>
                        <td><a href="https://youtu.be/KtigRU26xjQ">Canelo vs Kovalev</a></td>
                        <td><a href="https://caneloteam.com/">caneloteam</a></td>

                    </tr>
                    <tr>
                        <td>Canelo Alvarez</td>
                        <td>74</td>
                        <td>53</td>
                        <td>Chalenge</td>
                        <td>Canelo Team</td>
                        <td>USA, Mexica</td>
                        <td><a href="https://youtu.be/KtigRU26xjQ">Canelo vs Kovalev</a></td>
                        <td><a href="https://caneloteam.com/">caneloteam</a></td>

                    </tr>
                    <tr>
                        <td>Canelo Alvarez</td>
                        <td>74</td>
                        <td>53</td>
                        <td>Chalenge</td>
                        <td>Canelo Team</td>
                        <td>USA, Mexica</td>
                        <td><a href="https://youtu.be/KtigRU26xjQ">Canelo vs Kovalev</a></td>
                        <td><a href="https://caneloteam.com/">caneloteam</a></td>

                    </tr>
                    <tr>
                        <td>Canelo Alvarez</td>
                        <td>74</td>
                        <td>53</td>
                        <td>Chalenge</td>
                        <td>Canelo Team</td>
                        <td>USA, Mexica</td>
                        <td><a href="https://youtu.be/KtigRU26xjQ">Canelo vs Kovalev</a></td>
                        <td><a href="https://caneloteam.com/">caneloteam</a></td>

                    </tr>
                    <tr>
                        <td>Canelo Alvarez</td>
                        <td>74</td>
                        <td>53</td>
                        <td>Chalenge</td>
                        <td>Canelo Team</td>
                        <td>USA, Mexica</td>
                        <td><a href="https://youtu.be/KtigRU26xjQ">Canelo vs Kovalev</a></td>
                        <td><a href="https://caneloteam.com/">caneloteam</a></td>

                    </tr>
                    <tr>
                        <td>Canelo Alvarez</td>
                        <td>74</td>
                        <td>53</td>
                        <td>Chalenge</td>
                        <td>Canelo Team</td>
                        <td>USA, Mexica</td>
                        <td><a href="https://youtu.be/KtigRU26xjQ">Canelo vs Kovalev</a></td>
                        <td><a href="https://caneloteam.com/">caneloteam</a></td>

                    </tr>

                </table>
            </li>
        </ul>
        </div>
        )
        
        
        export default Sparring;
        
        
