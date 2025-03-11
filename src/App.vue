<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
import "./column.css";
import me from "./assets/atchi.jpg";
import Rigel from "./assets/Rigel.jpg";
import NL2Rigel from "./assets/NL2Rigel.jpg";
import Havoc from "./assets/havoc.png";
import TI from "./assets/TI.png";
import SV from "./assets/StructVizor.png";
import VP from "./assets/vipera.png";
import RB from "./assets/ridgebuilder.png";
import XV from "./assets/xavier.png";
import {
  GithubOutlined,
  TwitterOutlined,
  MailOutlined,
  LinkedinOutlined
} from '@ant-design/icons-vue';
import { ref } from 'vue'
const publications = ref({
  // "Under Review / In progress": [{
  //   title: "Vipera: Towards systematic auditing of generative text-to-image models at scale",
  //   links: [],
  //   imgsrc: VP,
  //   authors: ["Yanwei Huang", "Wesley Hanwen Deng", "Sijia Xiao", "Motahhare Eslami", "Ken Holstein", "Jason Hong", "Adam Perer"],
  //   venue: "ACM CHI",
  //   venue_full: "CHI Late-Breaking Work 2025 (Under Review)",
  //   note: "test",
  // }],
  "2025": [
    {
      title: "Vipera: Towards systematic auditing of generative text-to-image models at scale",
      links: [],
      imgsrc: VP,
      authors: ["Yanwei Huang", "Wesley Hanwen Deng", "Sijia Xiao", "Motahhare Eslami", "Jason Hong", "Adam Perer"],
      venue: "ACM CHI",
      venue_full: "CHI Late-Breaking Work 2025 (Accepted)",
      note: "test",
    },
    {
      title: "StructVizor: Interactive profiling of semi-structured textual data",
      links: [{
        name: "Paper (Preprint)",
        href: "https://arxiv.org/abs/2503.06500"
      }, {
        name: "PDF",
        href: "https://yhuang.top/pdf/chi25_StructVizor.pdf"
      }],
      imgsrc: SV,
      authors: ["Yanwei Huang", "Yan Miao", "Di Weng", "Adam Perer", "Yingcai Wu"],
      venue: "ACM CHI",
      venue_full: "CHI 2025 (Accepted)",
      note: "test",
    },
    {
      title: "RidgeBuilder: Interactive Authoring of Expressive Ridgeline Plots",
      links: [],
      imgsrc: RB,
      authors: ["Shuhan Liu", "Yangtian Liu", "Junxin Li", "Yanwei Huang", "Yue Shangguan", "Zikun Deng", "Di Weng", "Yingcai Wu"],
      venue: "ACM CHI",
      venue_full: "CHI 2025 (Accepted)",
      note: "test",
    },
    {
      title: "Xavier: Toward Better Coding Assistance in Authoring Tabular Data Wrangling Scripts",
      links: [{
        name: "Paper (Preprint)",
        href: "https://arxiv.org/abs/2503.02639"
      }],
      imgsrc: XV,
      authors: ["Yunfan Zhou", "Xiwen Cai", "Qiming Shi", "Yanwei Huang", "Haotian Li", "Huamin Qu", "Di Weng", "Yingcai Wu"],
      venue: "ACM CHI",
      venue_full: "CHI 2025 (Accepted)",
      note: "test",
    }
  ],
  "2024": [{
    title: "Table Illustrator: Puzzle-based interactive authoring of plain tables",
    links: [{
      name: "Paper",
      href: "https://dl.acm.org/doi/10.1145/3613904.3642415"
    }, {
      name: "PDF",
      href: "https://yhuang.top/pdf/chi24_Table_Illustrator.pdf"
    }, {
      name: "GitHub",
      href: "https://github.com/Ais0n/tableshop"
    }, {
      name: "Video",
      href: "https://www.youtube.com/watch?v=OrFKL5-Fc1Y"
    }, {
      name: "System",
      href: "https://yhuang.top/tableshop/",
    }],
    imgsrc: TI,
    authors: ["Yanwei Huang", "Yurun Yang", "Xinhuan Shu", "Ran Chen", "Di Weng", "Yingcai Wu"],
    venue: "ACM CHI",
    venue_full: "CHI 2024 - Honolulu, HI, USA",
    note: "test",
  }],
  "2023": [{
    title: "Interactive Table Synthesis with Natural Language",
    links: [{
      name: "Paper",
      href: "https://ieeexplore.ieee.org/document/10304286"
    }, {
      name: "PDF",
      href: "https://yhuang.top/pdf/tvcg_nl2rigel.pdf"
    }, {
      name: "Video",
      href: "https://www.youtube.com/watch?v=qjjKAykyDZU"
    }],
    imgsrc: NL2Rigel,
    authors: ["Yanwei Huang", "Yunfan Zhou", "Ran Chen", "Changhao Pan", "Xinhuan Shu", "Di Weng", "Yingcai Wu"],
    venue: "IEEE TVCG",
    venue_full: "IEEE TVCG 2023",
    note: "test",
  }],
  "2022": [{
    title: "Rigel: Transforming Tabular Data by Declarative Mapping",
    links: [{
      name: "Paper",
      href: "https://ieeexplore.ieee.org/document/9908529"
    }, {
      name: "PDF",
      href: "https://yhuang.top/pdf/rigel.pdf"
    }, {
      name: "GitHub",
      href: "https://github.com/rigel-js/rigel-system",
    }, {
      name: "Video",
      href: "https://youtu.be/fvM_W-1n7N4?si=2BoDyGzgakzS9BB9"
    }, {
      name: "System",
      href: "https://rigel-system.github.io/rigel-system",
    }],
    imgsrc: Rigel,
    authors: ["Ran Chen", "Di Weng", "Yanwei Huang", "Xinhuan Shu", "Jiayi Zhou", "Guodao Sun", " Yingcai Wu"],
    venue: "IEEE VIS",
    venue_full: "IEEE VIS 2022 - Oklahoma City, OK, USA",
    note: "test",
  }, {
    title: "One Fuzzing Strategy to Rule Them All",
    links: [{
      name: "Paper",
      href: "https://ieeexplore.ieee.org/document/9794101"
    }, {
      name: "PDF",
      href: "https://yhuang.top/pdf/icse22-main-1314.pdf"
    }],
    imgsrc: Havoc,
    authors: ["Mingyuan Wu", "Ling Jiang", "Jiahong Xiang", "Yanwei Huang", "Heming Cui", "Lingming Zhang", "Yuqun Zhang"],
    venue: "ICSE",
    venue_full: "ICSE 2022 - Pittsburgh, PA, USA",
  }]
});
const _years = Object.keys(publications.value).sort(function (a, b) {
  if (typeof (a) === 'string' && typeof (b) === 'string') {
    return b.localeCompare(a);
  }
  return b - a;
});
const news = [{
  msg: "Three full papers and one late-breaking work have been accepted by ACM CHI 2025! See you in Yokohama!",
  time: "Jan. 2025",
}, {
  msg: "Serving as a student volunteer in UIST'24 at Pittsburgh! Please say hi if you are there!",
  time: "Oct. 2024",
}, {
  msg: "I'm thrilled to spend this summer and fall as a visiting scholar in CMU Data Interaction Group. Hello Pittsburgh!",
  time: "Jul. 2024",
}, {
  msg: "I'll present Table Illustrator in CHI'24 at Honolulu on May 13, 2024.",
  time: "Mar. 2024",
}, {
  msg: "One paper is accepted by IEEE TVCG! Great thanks to all collaborators!",
  time: "Oct. 2023",
}, {
  msg: "I obtained my B.E. degree at ZJU.",
  time: "Sept. 2022",
}, {
  msg: "One paper is accepted by IEEE VIS 2022.",
  time: "Jun. 2022",
}]

const badgeColor = {
  "ACM CHI": '#018571',
  "IEEE TVCG": '#006400',
  "IEEE VIS": '#108ee9',
  "ICSE": '#756bb1'
}
</script>


<template>
  <!-- <div class="header">Header</div> -->
  <div class="mainContent">
    <div class="container">
      <div class="columns">
        <div class="column c1 column-left is-full-mobile is-4-tablet is-4-desktop is-3-widescreen">
          <div class="card">
            <a-avatar :size="150" :src="me" style="margin-bottom: 10px;"></a-avatar>
            <div class="title is-4" style="font-weight: bold; margin: 0" title="Pronounced as /Ian-Weigh/"> Yanwei Huang
            </div>
            <div> MSCS Student, ZJU </div>
            <div> Hangzhou, China </div>
            <a-button href="https://github.com/Ais0n" style="border:none">
              <template #icon>
                <GithubOutlined />
              </template>
            </a-button>
            <a-button href="https://twitter.com/Yanwei6161" style="border:none">
              <template #icon>
                <TwitterOutlined />
              </template>
            </a-button>
            <a-button href="mailto:huangyw@zju.edu.cn" style="border:none">
              <template #icon>
                <MailOutlined />
              </template>
            </a-button>
            <a-button href="https://www.linkedin.com/in/yanwei-huang-b404552aa/" style="border:none">
              <template #icon>
                <LinkedinOutlined />
              </template>
            </a-button>
          </div>
          <div class="card" style="text-align: left;">
            <div class="title is-3">News</div>
            <ul style="line-height: 1.5em">
              <li v-for="(item, index) in news">
                <span style="font-weight: bold;">{{ item.time }}</span>
                <span> - {{ item.msg }} </span>
                <br /><br />
              </li>
            </ul>
          </div>
        </div>
        <div class="column c2 column-right is-full-mobile is-8-tablet is-8-desktop is-9-widescreen">
          <div class="card" style="text-align: left;">
            <div class="title is-3">About Me</div>
            <p class="paragraph" style="font-weight: bold;">
              I am actively looking for Ph.D. positions starting from Fall 2025. Please feel free to contact me if you
              are
              interested!
            </p>
            <p class="paragraph">
              I am a Master's student in Computer Science at <a href="https://www.zju.edu.cn/english/">Zhejiang
                University</a>,
              supervised by <a href="http://www.ycwu.org/">Prof. Yingcai Wu</a>. As a member of <a
                href="https://zjuidg.org/">ZJUIDG</a>,
              I am fortunate to work closely with <a href="https://dwe.ng/">Di Weng</a>, <a
                href="https://shuxinhuan.github.io/#about">Xinhuan Shu</a>, and other exceptional colleagues. I also
              work on
              research projects
              on visual auditing of generative models with <a href="https://perer.org">Prof. Adam Perer</a> and <a
                href="https://www.cs.cmu.edu/~jasonh/">Prof. Jason Hong</a> in CMU.
              Prior to this, I obtained my Bachelor's degree in Computer Science from Chu Kochen Honors College,
              Zhejiang
              University.
            </p>
            <p class="paragraph">
              I love designing tools tailored for data
              practitioners, covering activities such as data wrangling, table construction, and data cleaning. I am also interested in designing interactive tools for sensemaking and auditing of large language models,
                especially
                in the context of visualization and data science.
            </p>
            <p class="paragraph">
              My CV is available <a href="https://yhuang.top/pdf/yanwei_CV.pdf">here</a>.
            </p>
            <br />
            <div class="title is-3">Research</div>
            <div v-for="(year, _i) in _years">
              <div class="title is-4" style="margin-top: 15px"> {{ year }} </div>
              <div v-for="(item, index) in publications[year]" class="articleItem">
                <div class="articleImgContainer">
                  <a-badge-ribbon :text="item.venue"
                    :color="item.venue && badgeColor[item.venue] ? badgeColor[item.venue] : 'grey'"
                    style="padding: 0 15px;">
                    <img class="articleImg" :src="item.imgsrc" />
                  </a-badge-ribbon>
                </div>
                <div class="articleDescription">
                  <div class="title is-5" style="font-weight: bold;"> {{ item.title }} </div>
                  <div>
                    <span v-for="(author, i) in item.authors"
                      :class="{ 'authorHighlighted': author == 'Yanwei Huang' }"> {{
                        i
                          != item.authors.length - 1 ? author + ', ' : 'and ' + author }} </span>
                  </div>
                  <div style="font-style: italic;">
                    <span> {{ item.venue_full }} </span>
                  </div>
                  <div style="margin-top: 5px">
                    <a-tag v-for="(lnk, i) in item.links">
                      <a :class="{ 'disabled-link': lnk.href == '' }" :href="lnk.href"> {{ lnk.name }} </a>
                    </a-tag>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div class="title is-3">Interns</div>
            <ul style="line-height: 1.5em">
              <li><span style="font-weight: bold;">2024.7-2024.12,</span> Visiting Scholar @<a
                  href="https://dig.cmu.edu/about">CMU DIG</a>
                <ul>
                  <li style="font-size: 13px;">I am happy to work with <a href="https://perer.org/">Prof. Adam
                      Perer</a>, <a href="https://www.cs.cmu.edu/~jasonh/">Prof. Jason Hong</a>, and many other
                    wonderful colleagues in
                    Pittsburgh.</li>
                </ul>
              </li>
              <li><span style="font-weight: bold;">2021.7-2021.9,</span> Research Assistant @<a
                  href="https://www.sustech.edu.cn/en/">SUSTech</a> (and remotely with <a
                  href="https://illinois.edu/">UIUC</a>)
                <ul>
                  <li style="font-size: 13px;">I was lucky to work closely with <a
                      href="https://lingming.cs.illinois.edu/">Prof. Lingming Zhang</a> and <a
                      href="https://zhangyuqun.github.io/">Prof. Yuqun Zhang</a>.</li>
                </ul>
              </li>
              <li><span style="font-weight: bold;">2021.2-2021.6,</span> Frontend Engineer @<a
                  href="https://www.bytedance.com/en/">ByteDance Inc.</a></li>
            </ul>
            <br />
            <div class="title is-3">Awards</div>
            <ul style="line-height: 1.5em">
              <li><span style="font-weight: bold;">2024,</span> National Scholarship </li>
              <li><span style="font-weight: bold;">2023-2024,</span> Outstanding Graduate Student of ZJU (Top 10%) </li>
              <li><span style="font-weight: bold;">2022,</span> Yongping Scholarship (ZJU, Top 1%) </li>
              <li><span style="font-weight: bold;">2019-2022,</span> University Scholarships of ZJU </li>
              <li><span style="font-weight: bold;">2019, </span> China Collegiate Programming Contest, Bronze Medal
              </li>
            </ul>
            <br />
            <div class="title is-3">Teaching</div>
            <ul style="line-height: 1.5em">
              <li><span style="font-weight: bold;">Fall 2023,</span> "C Programming", provided guidance on lab projects
                (~120
                students) </li>
              <li><span style="font-weight: bold;">Fall 2022 - Spring 2024,</span> "Seminars for Mixed-class Students",
                organized bi-weekly academic seminars (~600 students) </li>
            </ul>
            <br />
            <div class="title is-3">Services</div>
            <ul style="line-height: 1.5em">
              <li><span style="font-weight: bold;">2024, </span>Student volunteer for UIST'24 </li>
              <li><span style="font-weight: bold;">2024-present, </span>Reviewer for IEEE VIS, IEEE PacificVis Journal
                Track,
                ACM CHI, ChinaVis </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">Copyright @Yanwei Huang. Last updated on Mar 11, 2025. </div>
</template>

<style scoped>
.header {
  background-color: #fff;
  height: 50px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.footer {
  background-color: #f7f7f7;
  height: 50px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.mainContent {
  box-sizing: border-box;
  /* height: 100%; */
  background-color: #f7f7f7;
  padding: 3rem 1.5rem;
}

/* .columns {
  display: flex;
} */

.c1 {
  /* border: 1px solid; */
  order: 1 !important;
}

.c2 {
  /* border: 1px solid; */
  order: 2 !important;
}

.title {
  margin-bottom: 10px;
}

.articleItem {
  display: flex;
  margin-bottom: 5px;
}

.articleImgContainer {
  width: 30%;
  padding: 5px 15px;
  position: relative;
}

.articleImg {
  width: 100%;
}

.articleDescription {
  width: 70%;
  padding: 5px 15px;
}

.authorHighlighted {
  font-weight: bold;
}

.disabled-link {
  color: gray;
  cursor: not-allowed;
  /* pointer-events: none; */
  text-decoration: none;
}
</style>
