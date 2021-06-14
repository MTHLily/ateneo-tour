var APP_DATA = {
  scenes: [
    {
      id: "0-jacinto-street-1",
      name: "Jacinto Street 1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: -2.554021265892402,
        pitch: 0.021319709774145323,
        fov: 1.383443981596956,
      },
      linkHotspots: [
        {
          yaw: -2.6074798856177885,
          pitch: -0.013288410369582948,
          rotation: 0,
          target: "1-jacinto-entrance",
        },
      ],
      infoHotspots: [
        {
          yaw: 0.41615896303432187,
          pitch: -0.028891069216344434,
          title: "GEC",
          text:
            "Print stuff here because printing at AdDU is super expensive.<br>",
        },
        {
          yaw: -0.6712061885332226,
          pitch: -0.0028206919225457483,
          title: "JFC",
          text: "RIP :( T_T <br>",
        },
      ],
    },
    {
      id: "1-jacinto-entrance",
      name: "Jacinto Entrance",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: 3.0141961490746016,
        pitch: 0.014041975764623515,
        fov: 1.383443981596956,
      },
      linkHotspots: [
        {
          yaw: -3.0631942136805552,
          pitch: 0.006726169634784895,
          rotation: 0,
          target: "2-to-canisius",
        },
        {
          yaw: 0.6740001760444123,
          pitch: 0.010673764087957949,
          rotation: 0,
          target: "0-jacinto-street-1",
        },
      ],
      infoHotspots: [
        {
          yaw: 1.716066883701921,
          pitch: -0.023219896104999194,
          title: "Entrance to the Parking Lots<br>",
          text:
            "Apply for a spot at the appropriate office. For students and staff only.<br>",
        },
        {
          yaw: 2.256084365184961,
          pitch: -0.7170645608809725,
          title: "Martin Hall<br>",
          text: "Contains many offices and lots and stuff.<br>",
        },
      ],
    },
    {
      id: "2-to-canisius",
      name: "To Canisius",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: -3.06803329510101,
        pitch: 0.0018607518403932488,
        fov: 1.383443981596956,
      },
      linkHotspots: [
        {
          yaw: -3.06803329510101,
          pitch: 0.0018607518403932488,
          rotation: 0,
          target: "3-canisius-building-hallway-1f",
        },
        {
          yaw: 2.3090191849701647,
          pitch: 0.0340165894406077,
          rotation: 0,
          target: "4-laudato-si",
        },
        {
          yaw: 0.10094938770845019,
          pitch: 0.03291810941186135,
          rotation: 0,
          target: "1-jacinto-entrance",
        },
        {
          yaw: 1.7540265888671431,
          pitch: -0.010783675114215185,
          rotation: 0,
          target: "5-chapel-entrance-1f",
        },
      ],
      infoHotspots: [
        {
          yaw: -2.61963445907757,
          pitch: 0.028165598716228146,
          title: "Map of AdDU<br>",
          text: "<a href='https://www.addu.edu.ph/'>Visit the AdDU website</a>",
        },
        {
          yaw: 2.0910015562676927,
          pitch: 0.07325266337577752,
          title: "Flagpoles",
          text: "Contains the Philippines flag &amp; the AdDU flag<br>",
        },
      ],
    },
    {
      id: "3-canisius-building-hallway-1f",
      name: "Canisius Building Hallway 1F",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: -3.091896226014292,
        pitch: 0.060401664234252195,
        fov: 1.383443981596956,
      },
      linkHotspots: [
        {
          yaw: 2.504320681399827,
          pitch: 0.09552823292178125,
          rotation: 0,
          target: "4-laudato-si",
        },
        {
          yaw: 0.03484922010685132,
          pitch: 0.058664044285942296,
          rotation: 0,
          target: "2-to-canisius",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "4-laudato-si",
      name: "Laudato-Si",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: 3.008878329913979,
        pitch: -0.10329548316114057,
        fov: 1.383443981596956,
      },
      linkHotspots: [
        {
          yaw: 1.41960225546641,
          pitch: -0.011009642599223213,
          rotation: 0,
          target: "5-chapel-entrance-1f",
        },
        {
          yaw: -1.6501571773817822,
          pitch: -0.02973964660046491,
          rotation: 0,
          target: "3-canisius-building-hallway-1f",
        },
        {
          yaw: -0.7074952070149774,
          pitch: -0.011099395355145703,
          rotation: 0,
          target: "2-to-canisius",
        },
      ],
      infoHotspots: [
        {
          yaw: -2.867014614891607,
          pitch: -0.4658811620099321,
          title: "Finster Hall<br>",
          text:
            "Contains most of the classrooms and many administrative offices.<br>",
        },
        {
          yaw: 1.8235973520352848,
          pitch: -0.3999172738690646,
          title: "Community Center<br>",
          text: "Big blue building<br>",
        },
      ],
    },
    {
      id: "5-chapel-entrance-1f",
      name: "Chapel Entrance 1F",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: -3.036235940171931,
        pitch: 0.0005722386794229095,
        fov: 1.383443981596956,
      },
      linkHotspots: [
        {
          yaw: -3.1054082573379773,
          pitch: 0.020988781323248773,
          rotation: 0,
          target: "6-chapel-front-1f",
        },
        {
          yaw: 2.3293354078139465,
          pitch: 0.016684578190327315,
          rotation: 0,
          target: "7-chapel-2f",
        },
        {
          yaw: 0.048818918505038056,
          pitch: 0.02459760110992093,
          rotation: 0,
          target: "4-laudato-si",
        },
      ],
      infoHotspots: [
        {
          yaw: 1.2272227088866252,
          pitch: 0.4596195936048577,
          title: "Sir Iggy<br>",
          text: "Gwapo<br>",
        },
        {
          yaw: 1.4297085838752945,
          pitch: 0.030197493741663806,
          title: "Painting 1<br>",
          text: "Very nice painting<br>",
        },
        {
          yaw: -1.5147990363043053,
          pitch: 0.006016922457765972,
          title: "Painting 2<br>",
          text: "Nice painting, but there is some damage.<br>",
        },
      ],
    },
    {
      id: "6-chapel-front-1f",
      name: "Chapel Front 1F",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        yaw: -3.083428606088333,
        pitch: -0.328231851779913,
        fov: 1.383443981596956,
      },
      linkHotspots: [
        {
          yaw: 0.01251863309547474,
          pitch: 0.10484587202929774,
          rotation: 0,
          target: "5-chapel-entrance-1f",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "7-chapel-2f",
      name: "Chapel 2F",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.2234984945899834,
          pitch: 0.3221578296140546,
          rotation: 0,
          target: "5-chapel-entrance-1f",
        },
        {
          yaw: -3.108374141764701,
          pitch: 0.29702404512265623,
          rotation: 0,
          target: "7-chapel-2f",
        },
      ],
      infoHotspots: [
        {
          yaw: -1.7340224366799575,
          pitch: -0.040241340671839154,
          title: "Raccoon is bad<br>",
          text: "Please fix ty<br>",
        },
      ],
    },
  ],
  name: "Project Title",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: false,
    fullscreenButton: true,
    viewControlButtons: true,
  },
};

export default APP_DATA;