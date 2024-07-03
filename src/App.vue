<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
import "./column.css";
import me from "./assets/atchi.jpg";
import Rigel from "./assets/Rigel.jpg";
import NL2Rigel from "./assets/NL2Rigel.jpg";
import Havoc from "./assets/havoc.png";
import TI from "./assets/TI.png";
import {
  GithubOutlined,
  TwitterOutlined,
  MailOutlined,
  LinkedinOutlined
} from '@ant-design/icons-vue';
import { ref } from 'vue'
const publications = ref({
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
const _years = Object.keys(publications.value).sort(function(a, b) {
  return b-a;
});
const news = [{
  msg: "I am actively seeking Ph.D. positions in Vis/HCI for Fall 2025.",
  time: "[TOP]",
}, {
  msg: "I'm thrilled to spend this summer as a research assistant in CMU Data Interaction Group. Hello Pittsburgh!",
  time: "Jul. 2024",
}, {
  msg: "I'll present my paper \"Table Illustrator: Puzzle-based interactive authoring of plain tables\" in CHI'24 at Honolulu on May 13, 2024.",
  time: "Mar. 2024",
}, {
  msg: "One paper has been accepted by IEEE TVCG! Great thanks to all collaborators!",
  time: "Oct. 2023",
}, {
  msg: "I obtained my B.E. degree at ZJU and will start my graduate career this fall.",
  time: "Sept. 2022",
}, {
  msg: "One of our papers has been accepted by IEEE VIS 2022.",
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
            <div class="title is-4" style="font-weight: bold; margin: 0"> Yanwei Huang </div>
            <div> 2nd-year master, ZJU </div>
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
                  <br/><br/>
                </li>
              </ul>
          </div>
        </div>
        <div class="column c2 column-right is-full-mobile is-8-tablet is-8-desktop is-9-widescreen">
          <div class="card" style="text-align: left;">
            <div class="title is-3">About Me</div>
            <p class="paragraph">
              I am currently pursuing a Master Degree in Computer Science at <a
                href="https://www.zju.edu.cn/english/">Zhejiang University</a>, supervised by <a
                href="http://www.ycwu.org/">Prof. Yingcai Wu</a>. As a member of <a href="https://zjuidg.org/">ZJUIDG</a>,
              I am fortunate to work closely with <a href="https://dwe.ng/">Di Weng</a>, <a
                href="https://shuxinhuan.github.io/#about">Xinhuan Shu</a>, and other exceptional colleagues. Prior to
              this, I obtained my Bachelor's degree in Computer Science from Chu Kochen Honors College, Zhejiang
              University.
            </p>
            <p class="paragraph">
              My research focuses on the design and development of interfaces and interactive tools tailored for data
              practitioners, covering activities such as data wrangling, table construction, and data cleaning. I am also highly interested 
              in the sensemaking and application of large language models, especially in the context of visualization and data science.
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
                  <a-badge-ribbon :text="item.venue" :color="item.venue && badgeColor[item.venue] ? badgeColor[item.venue] : 'grey'"
                    style="padding: 0 15px;">
                    <img class="articleImg" :src="item.imgsrc" />
                  </a-badge-ribbon>
                </div>
                <div class="articleDescription">
                  <div class="title is-5" style="font-weight: bold;"> {{ item.title }} </div>
                  <div>
                    <span v-for="(author, i) in item.authors" :class="{ 'authorHighlighted': author == 'Yanwei Huang' }"> {{
                      i
                      != item.authors.length - 1 ? author + ', ' : 'and ' + author }} </span>
                  </div>
                  <div style="font-style: italic;">
                    <span> {{ item.venue_full }} </span>
                  </div>
                  <div style="margin-top: 5px">
                    <a-tag v-for="(lnk, i) in item.links">
                      <a :class="{'disabled-link': lnk.href == ''}" :href="lnk.href"> {{ lnk.name }} </a>
                    </a-tag>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div class="title is-3">Interns</div>
            <ul style="line-height: 1.5em">
              <li><span style="font-weight: bold;">2024.7-2024.12,</span> Visiting Student and Research Assistant @<a href="https://dig.cmu.edu/about">CMU DIG</a>
                <ul>
                  <li style="font-size: 13px;">I am happy to work with <a href="https://perer.org/">Prof. Adam Perer</a> in Pittsburgh.</li>
                </ul>
              </li>
              <li><span style="font-weight: bold;">2021.7-2021.9,</span> Research Assistant @<a href="https://www.sustech.edu.cn/en/">SUSTech</a> & <a href="https://illinois.edu/">UIUC</a>
                <ul>
                  <li style="font-size: 13px;">I was lucky to work closely with <a href="https://lingming.cs.illinois.edu/">Prof. Lingming Zhang</a> and <a href="https://zhangyuqun.github.io/">Prof. Yuqun Zhang</a>.</li>
                </ul>
              </li>
              <li><span style="font-weight: bold;">2021.2-2021.6,</span> Frontend Engineer @<a href="https://www.bytedance.com/en/">ByteDance Inc.</a></li>
            </ul>
            <br />
            <div class="title is-3">Awards</div>
            <ul style="line-height: 1.5em">
              <li><span style="font-weight: bold;">2023,</span> Outstanding Graduate Student of ZJU (Top 10%) </li>
              <li><span style="font-weight: bold;">2019-2022,</span> University Scholarships of ZJU </li>
              <li><span style="font-weight: bold;">2019, </span> China Collegiate Programming Contest, Bronze Medal  </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">Copyright @Yanwei Huang. Last updated on Jul 3, 2024. </div>
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
  width: 42%;
  padding: 5px 15px;
  position: relative;
}

.articleImg {
  width: 100%;
}

.articleDescription {
  width: 58%;
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
