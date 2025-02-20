import { Icons } from "@/components/icons";
import { Description } from "@radix-ui/react-dialog";
import { url } from "inspector";
import { HomeIcon, NotebookIcon, ThumbsDown, VideoIcon, FolderIcon } from "lucide-react";
import { title } from "process";
import resumeDataEn from '../data/i18n/resume-data_en.json'
import resumeDataZh from '../data/i18n/resume-data_zh.json'

export const getResumeData = (locale: string) => {
  const i18nData = locale === 'zh' ? resumeDataZh : resumeDataEn;

  return {
    ...i18nData,
    initials: "PN",
    url: "https://github.com/alongLFB",
    locationLink: "https://www.google.com/maps/place/abu+dhabi",
    avatarUrl: "/along ava3.jpg",
    skills: [
      "iOS Development",
      "Objective-C",
      "Swift",
      "Python",
      "Git",
      "Linux",
      "Rest API",
      "AI API",
    ],
    // ...其他不需要翻译的数据
  };
};

export const DATA = {
  name: "Along Li",
  initials: "PN",
  url: "https://github.com/alongLFB",
  location: "Abu Dhabi, UAE",
  locationLink: "https://www.google.com/maps/place/abu+dhabi",
  description:
    "A rookie software engineer.",
  summary:
    "A Network Engineering graduate from [Xi'an University of Science and Technology](https://www.xust.edu.cn/), specialize in mobile development and am actively working on [open-source projects](https://github.com/alongLFB). I'm passionate about creating impactful solutions and sharing knowledge.",
  avatarUrl: "/along ava3.jpg",
  skills: [
    "iOS Development",
    "Objective-C",
    "Swift",
    "Python",
    "Git",
    "Linux",
    "Rest API",
    "AI API",
  ],
  videos: [
    {
      title: "Track Your Coding time for free",
      description: "Learn how to track your code time with complete analytics and insights.",
      thumbnail: "/video1.avif",
      url: "https://youtu.be/tBatfQjWxCg?si=sy2vZbCHoIYNME-3",
      date: "2024-05-15"
    },
    {
      title: "Fix multi-cursor in VS Code",
      description: "Simple trick to fix multi-cursor in VS Code.",
      thumbnail: "/video2.avif",
      url: "https://youtu.be/E9h7M6ZK_tA?si=ykzV7ARU4VMnbBRo",
      date: "2024-07-01"
    },
    {
      title: "Twitter(X)'s monetization (Hindi)",
      description: "Is the policy broken? Let's find out.",
      thumbnail: "/video3.avif",
      url: "https://youtu.be/Z3h1jt6jKLY?si=blL4l4FNco9WW9FT",
      date: "2024-11-04"
    },
    {
      title: "How to fix any kind of ban in twitter (Hindi)",
      description: "Learn how to fix any kind of ban in twitter.",
      thumbnail: "/video4.avif",
      url: "https://youtu.be/P7JRFrcXlQU",
      date: "2024-12-24"
    },
    {
      title: "Microsoft's new shocking move (Hindi)",
      description: "GitHub Copilot is now free for everyone, let's see what's the catch.",
      thumbnail: "/video5.avif",
      url: "https://www.youtube.com/watch?v=uIJOUe8T3_I",
      date: "2024-12-19"
    },
    {
      title: "How to run DeepSeek R1 model locally (Hindi)",
      description: "Learn how to run DeepSeek R1 model locally, in easy steps",
      thumbnail: "/video6.avif",
      url: "https://youtu.be/BgB2pW6QgVg",
      date: "2025-01-29"
    }

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "/videos", icon: VideoIcon, label: "Videos" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
    // { href: "/gadgets", icon: Icons.shop, label: "Gadgets" },
  ],
  contact: {
    email: "lal603743923@gmail.com",
    tel: "+971 58 566 2082",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/alongLFB",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alonglfb/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/alongLFB",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:lal603743923@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Bayanat",
      badges: [],
      href: "https://space42.ai/en",
      location: "Abu Dhbai",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "March 2021",
      end: "now",
      description:
        "1. Develop Tarjamah business features and building reusable components.",
    },
    {
      company: "Tuya Inc.",
      href: "https://www.tuya.com/",
      badges: [],
      location: "Hangzhou, China",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "October 2018",
      end: "January 2021",
      description:
        "1. Responsible for the maintenance of the smart device camera panel, as well as the update and iteration of related functions.",
    },
    {
      company: "ZheJiang Hexin Flush Network Services Ltd ",
      href: "https://www.10jqka.com.cn/",
      badges: [],
      location: "Hangzhou, China",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "February 2017",
      end: "October 2018",
      description:
        "1. Responsible for the maintenance of the smart device camera panel, as well as the update and iteration of related functions.",
    }
  ],
  jobs: [
    {
      "company": "腾讯科技",
      "position": "高级前端工程师",
      "duration": "2020年6月 - 2022年8月",
      "location": "深圳",
      "department": "微信支付部门",
      "description": "负责微信支付前端系统的开发与维护，包括支付流程优化、性能监控和安全加固。主导了支付页面的重构项目，提升了页面加载速度30%。",
      "achievements": [
        "设计并实现了新的组件库，被5个内部项目采用",
        "优化了支付流程，使转化率提升15%",
        "主导前端性能监控系统搭建，覆盖99%的用户场景"
      ],
      "skills": ["React", "TypeScript", "微前端", "性能优化", "WebSocket"],
      "companyLogo": "/images/tencent-logo.png",
      "companyWebsite": "https://www.tencent.com",
      "managers": ["张三（技术总监）", "李四（产品经理）"],
      "links": [
        {
          "icon": "<GithubIcon className=\"h-3 w-3\" />",
          "type": "项目仓库",
          "href": "https://github.com/example/project"
        },
        {
          "icon": "<FileTextIcon className=\"h-3 w-3\" />",
          "type": "项目文档",
          "href": "https://docs.example.com"
        }
      ]
    },
    {
      "company": "阿里巴巴",
      "position": "前端开发工程师",
      "duration": "2018年7月 - 2020年5月",
      "location": "杭州",
      "department": "淘宝技术部",
      "description": "参与淘宝购物车和结算页面的开发与优化。负责前端性能优化，实现了页面按需加载和资源预加载，大幅提升了用户体验。",
      "achievements": [
        "重构购物车页面，减少50%的DOM操作，页面渲染速度提升40%",
        "开发结算页SDK，简化了跨团队协作流程",
        "编写自动化测试脚本，测试覆盖率从60%提升到90%"
      ],
      "skills": ["Vue", "JavaScript", "Webpack", "Jest", "性能优化"],
      "companyLogo": "/images/alibaba-logo.png",
      "companyWebsite": "https://www.alibaba.com",
      "managers": ["王五（前端负责人）"],
      "links": [
        {
          "icon": "<ExternalLinkIcon className=\"h-3 w-3\" />",
          "type": "项目演示",
          "href": "https://demo.example.com"
        }
      ]
    },
    {
      "company": "字节跳动",
      "position": "前端实习生",
      "duration": "2017年12月 - 2018年6月",
      "location": "北京",
      "department": "抖音技术团队",
      "description": "参与抖音Web版的开发，主要负责用户评论组件和分享功能的实现。学习并实践了现代前端开发流程和工程化方案。",
      "achievements": [
        "独立开发了评论楼层展示组件，支持无限滚动和楼中楼回复",
        "优化了分享链接的生成逻辑，提高了分享成功率15%"
      ],
      "skills": ["React", "Redux", "CSS3", "Git"],
      "companyLogo": "/images/bytedance-logo.png",
      "companyWebsite": "https://www.bytedance.com",
      "managers": ["赵六（技术经理）"],
      "links": []
    }
  ],
  education: [
    {
      school: "Xi'an University of Science and Technology",
      href: "https://www.xust.edu.cn/",
      degree: "Network Engineering",
      logoUrl: "/Xi'An_University_of_Science_and_Technology_Seal.svg",
      start: "2013",
      end: "2017",
    }
  ],
  projects: [
    {
      title: "Moyuban",
      href: "https://moyuban.alonglfb.com/",
      dates: "May 2023 - Sept 2023",
      active: true,
      description:
        "A humorous web-based reminder application that helps office workers track their work-life balance through various time-based notifications and holiday countdowns.",
      technologies: [
        "CSS",
        "javascript",
        "HTML"
      ],
      links: [
        {
          type: "Website",
          href: "https://moyuban.alonglfb.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alongLFB/moyuban",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "https://imgbed.alonglfb.com/file/1739878830665_moyuban_preview.png",
      video:
        "",
    },
    {
      title: "Ride Sharing Platform",
      href: "https://ride-sharing.alonglfb.com/",
      dates: "January 2025 - February 2025",
      active: true,
      description:
        "A Next.js, Express and MongoDB based ride sharing web application.",
      technologies: [
        "Next.js",
        "Git",
        "TailwindCSS",
        "Framer-motion",
        "TypeScript",
        "Imagekit",
        "ShadcnUI",
        "Node.js",
        "MongoDB",
        "Docker"
      ],
      links: [
        {
          type: "Website",
          href: "https://ride-sharing.alonglfb.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alongLFB/Ride-Sharing",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://imgbed.alonglfb.com/file/1739878830445_ride-sharing_preview.png",
      video: "",
    }
  ]
} as const;
