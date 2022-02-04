import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Phase2 from "../Phase/Phase2";
import style from './Projects.module.css'

const Projects = ({ phase, setPhase, page, setPage, fromPage, setFromPage}) => {
  useEffect(() => {
    setPage(true);
    setFromPage(true);
    setPhase(2);
  },[]);
  const scrollUp = () => {
    document.getElementById("top").scroll(0,0)
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'auto'
    // })
  }
  return (
    <div id="top">
      
      <Phase2 phase={phase} page={page}  fromPage={fromPage} setFromPage={setFromPage}/>
      <div className={style.projectsCont}>
        <h1>PROJECTS</h1>
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus illum at veritatis distinctio, nisi dignissimos aspernatur voluptates officiis modi ipsum doloribus alias fugiat voluptatem veniam corporis eum consectetur velit mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam voluptas cum quibusdam ullam laudantium voluptatum, consectetur omnis ea, eaque consequuntur itaque est repellendus neque ratione inventore. Aut, odit illum? <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <button  onClick={()=>setPhase(2)}>Klik</button>

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero atque harum cupiditate provident aspernatur dolorum deleniti labore temporibus distinctio, odio sapiente numquam tempore facere rem repudiandae iure recusandae excepturi est.
        Culpa at non amet possimus, quod nobis reprehenderit officia saepe delectus ullam perferendis cumque vitae deleniti numquam debitis nisi! Eum placeat labore harum quos, ipsa ullam quis voluptates est perspiciatis!
        Aliquam, amet delectus ratione pariatur odit nobis magnam magni adipisci at accusantium quis eligendi tenetur itaque eaque veniam nihil necessitatibus architecto dolores porro neque nisi enim doloribus quasi. Minima, fugiat!
        Ducimus doloremque voluptatum soluta est veritatis commodi unde corrupti, rerum placeat suscipit ut quam. Ratione eos vel, magni commodi modi autem asperiores facilis aperiam quasi omnis consequatur. Perspiciatis, eligendi ab.
        Praesentium temporibus consectetur ducimus. Dolor perferendis omnis ut aliquam, ab veniam a laborum impedit doloremque facilis natus beatae quod nesciunt iusto nemo optio reprehenderit exercitationem cum fuga. Pariatur, accusantium obcaecati?
        Quod tenetur sint consequatur. Similique recusandae beatae voluptatem velit sint corrupti, nemo ea qui error doloribus impedit ullam eius vitae accusamus asperiores deserunt? Minima quos optio molestiae animi illo inventore.
        Maiores assumenda ad praesentium, ipsum pariatur repellat, magni deserunt nihil repellendus aliquid adipisci vel dolores blanditiis. Asperiores voluptas quis accusantium quisquam autem voluptatum, incidunt eligendi possimus doloremque eos voluptatem aliquam!
        Similique numquam, repellat, expedita laudantium neque sint rem unde fuga eos corrupti voluptatum, ab et! Quod, inventore voluptatum dignissimos, dolore nemo fugit perspiciatis adipisci architecto iusto amet saepe repellendus sunt.
        Facilis vero assumenda tenetur laborum, ab deserunt? Inventore excepturi, repellat autem ab facere delectus voluptatum at vitae dolores porro animi tempora praesentium quae quo dolorum quas ipsam expedita earum. Eveniet.
        Possimus nemo dolor repellat itaque beatae magnam ullam tempore, dolorem dolores animi impedit ad iure nesciunt, maxime dolore iste esse vero molestias odit eligendi! Eum neque atque culpa rerum quia.
        Officia architecto perspiciatis ab, hic eos eveniet a deleniti dolores illo quia quas cum dolor, reiciendis neque minima culpa voluptate quod quidem. Cupiditate quia perspiciatis praesentium. At delectus et autem?
        Nulla eaque, sapiente nihil distinctio quos, totam dicta repudiandae id ad eligendi amet soluta voluptates ipsam cupiditate hic nostrum architecto expedita sunt. Accusamus ut, ipsam adipisci molestias quia commodi nemo.
        Impedit nesciunt, cumque, soluta reprehenderit veritatis, non quo inventore omnis tempore amet odit illum sed consectetur qui eum id illo asperiores quod enim quas eveniet libero. Aspernatur amet enim reiciendis?
        Tenetur adipisci veniam voluptatibus, similique reprehenderit possimus. Eum, incidunt earum! Inventore, dolor modi possimus quis veritatis repudiandae alias fugit aliquam excepturi velit ducimus, facere officia delectus iste nam, reiciendis voluptatem!
        Nesciunt repellat quasi a natus? Unde velit hic ullam reprehenderit nobis doloribus itaque odit similique adipisci, eveniet dolores consequuntur deserunt eaque nulla! Cupiditate vel animi non praesentium dolores, eos dolore?
        Unde velit fugit, ipsa ex nisi ipsam reprehenderit, doloremque ut fugiat numquam dolor molestiae laborum modi, cum consequuntur non eaque reiciendis eos fuga saepe nihil magnam. Eos exercitationem enim quo.
        Odio nam magni maxime tempora modi, rerum, dolores asperiores deserunt tenetur delectus accusamus debitis assumenda pariatur. Ratione aut quia facere tempore autem, similique excepturi saepe, ea itaque dolores nihil sequi.
        Nisi ab, nostrum veritatis quibusdam ratione provident omnis, cum expedita cumque odio error fugit rem reiciendis? Dolorum adipisci commodi sequi, animi accusamus placeat fugiat iure voluptatum eligendi, ullam qui fuga.
        Praesentium soluta ipsum reiciendis voluptatem commodi autem ut vero dolor corporis rerum assumenda cupiditate quibusdam consequatur quod fugiat dignissimos dolorum sed porro provident omnis quidem, eveniet officiis impedit. Repellat, odio.
        Dolore voluptas sunt, nobis sint aut voluptatibus expedita rerum! Alias veritatis odit reprehenderit. Dolores fuga perferendis quis, molestias rem nisi ipsum eligendi eum non vitae exercitationem recusandae magnam asperiores doloremque.
        Nulla repellendus modi voluptatum soluta facere quam tempora blanditiis natus dolorum rerum, laborum nemo commodi? Fuga similique itaque, cumque minima nesciunt veritatis, neque ipsum temporibus quidem rem provident, officia blanditiis?
        Esse praesentium tempora omnis consequatur libero. Itaque ducimus rem consequuntur facere quo ex provident sit consectetur expedita quibusdam culpa consequatur ipsam suscipit voluptatem incidunt, animi numquam et quas fugiat. Nisi!
        Itaque, magni harum! Amet ea deleniti recusandae ut, dolorem quasi! Ullam, deserunt. Sunt officia corrupti rem! Assumenda fuga explicabo quam, suscipit, ut ipsam doloribus eum unde asperiores quod, obcaecati consequatur.
        Dolor voluptas corrupti vero ratione commodi vel libero, laborum maxime, beatae saepe labore recusandae sit assumenda iusto. Facilis, dolores! Tenetur beatae minima recusandae delectus enim aliquid nemo quaerat quasi aspernatur.
        Perferendis eius qui quia saepe incidunt? Quibusdam praesentium facilis eligendi, rerum voluptatem quo aspernatur nemo unde ut voluptate architecto amet eos tempora veniam qui asperiores, explicabo ea autem ad impedit?
        Quibusdam, mollitia? Cupiditate officia fuga architecto, asperiores minima consequuntur repudiandae voluptates iste quia perspiciatis iusto nulla assumenda aut vel nam delectus ipsam nobis cumque a sed. Dolor aspernatur minima tenetur!
        Quisquam totam dolorem, vel omnis, aperiam veritatis quis harum ut, accusantium tenetur reprehenderit non? Atque, incidunt repellendus! Voluptatum eos harum totam. Accusamus totam nihil doloremque atque inventore officia facilis necessitatibus.
        Unde numquam voluptate nisi! Dolorum repellat dignissimos eum reprehenderit minus ab recusandae ad, voluptatibus quisquam deleniti nisi commodi, repudiandae est dolore ratione velit animi, a corporis esse odio qui! Consectetur.
        Possimus illum reprehenderit alias quos ex laudantium, ut dolorum expedita dicta quasi aspernatur veniam beatae nulla, earum velit eligendi sint voluptatem libero quam! Laborum maxime ipsam ut voluptates. Laboriosam, quos.
        Ullam corrupti, quod temporibus assumenda repellat repudiandae consectetur sit natus! Illum totam praesentium ut quaerat magnam, quisquam ea asperiores! Voluptas, quibusdam sed autem hic voluptatem tenetur veritatis iusto alias tempore!
        Suscipit ratione cumque et iure corrupti accusantium pariatur quisquam distinctio quasi quia autem voluptates unde, atque, rerum commodi dolorum officia eum nemo, quibusdam beatae architecto illo hic odio id. Architecto!
        Necessitatibus omnis ex voluptatum asperiores deleniti ab beatae hic voluptatibus harum, ipsam adipisci aliquid quaerat et impedit magni recusandae nihil sed dicta quisquam? Necessitatibus aut, dolore rerum quas expedita placeat.
        Culpa accusamus tenetur molestias ducimus tempora, excepturi aut cupiditate voluptatibus quasi eius ullam ab, deleniti ratione obcaecati consequatur dolor in ad distinctio delectus temporibus! Reprehenderit accusantium tempora modi hic sit!
        Esse hic dicta dolorem enim mollitia nisi, eveniet aspernatur beatae ex officiis! Beatae vero, ipsam, quis odit incidunt necessitatibus asperiores eum ex repellat doloribus sunt vitae eveniet tenetur vel odio.
        Doloremque, rerum animi illum odio hic quis vitae reiciendis optio incidunt ullam tempora porro, dolor, et commodi obcaecati minima recusandae id. Nisi, obcaecati sit ducimus laboriosam reprehenderit ad aspernatur deserunt?
        Laborum voluptatem velit officia ab aperiam, eos excepturi minus ratione ipsa odio error dolore nihil quo quasi. Nisi, a molestias! Modi blanditiis consequuntur eius excepturi cumque, provident fuga illo minima.
        Quasi corporis dolore saepe, nobis minus alias nihil quo ipsa nostrum adipisci totam unde recusandae dolores magni obcaecati mollitia laboriosam, assumenda soluta libero dolorum? Adipisci reprehenderit voluptatibus quae distinctio amet!
        Esse quasi modi similique rem dolorem? Repellat necessitatibus soluta, consequatur laboriosam aspernatur dicta eaque amet sed culpa sint iste repellendus provident earum minus molestias dolorem? Magnam deserunt nam non sapiente?
        Harum iure asperiores expedita consequuntur corrupti ipsam? Officia possimus, corporis saepe commodi fuga amet consequatur sapiente! Porro quod qui deleniti in, delectus praesentium cum nisi vel modi nesciunt aspernatur magni.
        Molestias, eaque. Ad, a odit doloribus dolore modi dignissimos suscipit. Molestias, repudiandae dolorem modi blanditiis ab possimus aperiam totam repellendus! Ipsum repellat voluptatum eveniet ea incidunt perspiciatis vero corporis harum.
        Suscipit eum adipisci assumenda a consequuntur quisquam ex omnis quaerat facere temporibus ipsa quod magni vero error porro quos consectetur ducimus dolore architecto, voluptate, ea nostrum tempora provident corrupti? Architecto.
        Tenetur neque adipisci saepe nihil fugit voluptate omnis vel, sunt eveniet fuga doloribus vero eligendi laboriosam nemo. Quibusdam, suscipit ipsam tenetur deserunt, perferendis culpa provident eos, cum modi ullam laudantium.
        Tempora enim veniam illo exercitationem laboriosam dolores alias. Dolorem architecto laboriosam explicabo illum sapiente harum facere, officiis nostrum asperiores hic suscipit odio numquam veritatis dolore voluptas, sed, fuga quia? Maxime!
        Quasi nemo dolor eaque a natus deleniti corrupti sed cum maxime ullam, itaque consectetur dicta, ea enim quo illo, unde perspiciatis culpa nobis voluptatibus quae aliquam. Fugit obcaecati asperiores quisquam!
        Explicabo maxime adipisci veritatis aliquid magnam incidunt tempore natus culpa? Accusantium neque exercitationem at rerum officiis impedit perferendis dolor voluptatem! Velit officiis quod eos excepturi! Temporibus beatae impedit natus reiciendis?
        Dolorem pariatur blanditiis molestias delectus numquam tempora quam dolor quasi laudantium maiores aut cumque natus assumenda voluptatem dolorum accusantium, consequatur totam ad? Exercitationem numquam quibusdam mollitia sunt. Alias, asperiores maxime!
        Velit distinctio quam nemo saepe hic beatae, inventore sequi esse exercitationem, voluptatem quaerat, voluptate possimus. Excepturi laborum ut ex sit debitis eum, obcaecati fuga maxime reiciendis impedit? Aliquid, neque illum!
        Dolorum saepe qui a aliquam quaerat nihil deleniti harum perspiciatis odio corporis, tenetur, quas eveniet vitae culpa, nisi ea esse alias error id tempora! Soluta autem quidem corporis quisquam aliquid?
        Officiis nisi distinctio quisquam suscipit quidem pariatur porro dolores recusandae nesciunt nam. Asperiores autem aliquid cum! Quia, eaque praesentium dolor dignissimos pariatur accusamus, consectetur voluptatem accusantium officiis dicta quam. Blanditiis.
        Nam nemo fugit inventore deleniti tempora, laborum repellendus sint sit distinctio dolor harum voluptatibus nisi commodi officiis? At minus porro excepturi delectus deleniti, hic, facilis nemo amet mollitia, est consequuntur.
      </div>
    </div>
  );
};

export default Projects;
