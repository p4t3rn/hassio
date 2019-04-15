/*
挖掘了隐藏的参数，启用了自定义css
*/


var CONFIG = {
   customTheme: null, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
   transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
   tileSize: 150,
   tileMargin: 6,
   serverUrl: "http://10.10.10.143:8123",
   wsUrl: "ws://10.10.10.143:8123/api/websocket",
   passwordType: PASSWORD_TYPES.PROMPT_AND_SAVE,
   //password: null,
   //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
   debug: false, // Prints entities and state change info to the console.
   // next fields are optional
   events: [],
   timeFormat: 12,
   menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
   hideScrollbar: false, // horizontal scrollbar
   groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // or VERTICALLY

   header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
    styles: {
       padding: '10px 130px 0',
       fontSize: '28px'
    },
      // right: [
      //    {
      //       type: HEADER_ITEMS.CUSTOM_HTML,
      //       html: '<b>智能家庭控制中心 - 嗨呦君</b>',
      //       styles: {
      //       margin: '20px 0 0'
      //    },
      //    },
      //            {
      //            type: HEADER_ITEMS.WEATHER,
      //            styles: {
      //               float: 'right',
      //               margin: '0 0 0',
      //            },
      //            icon: '&sensor.heweather_cond_txt.state',
      //            icons: {
      //                                                     '晴': 'clear',
      //                                                     '多云': 'cloudy',
      //                                                     '毛毛雨': 'rain',
      //                                                     '小雨': 'rain',
      //                                                     '中雨': 'rain',
      //                                                     '大雨': 'rain',
      //                                                     '阵雨': 'rain',
      //                                                     '极端降雨': 'rain',
      //                                                     '暴雨': 'rain',
      //                                                     '大暴雨': 'rain',
      //                                                     '特大暴雨': 'rain',
      //                                                     '强阵雨': 'rain',
      //                                                     '雷阵雨': 'rain',
      //                                                     '强雷阵雨': 'rain',
      //                                                     '雨夹雪': 'sleet',
      //                                                     '雨雪天气': 'sleet',
      //                                                     '阵雨夹雪': 'sleet',
      //                                                     '雷阵雨伴有冰雹': 'sleet',
      //                                                     '小雪': 'snow',
      //                                                     '中雪': 'snow',
      //                                                     '大雪': 'snow',
      //                                                     '暴雪': 'snow',
      //                                                     '阵雪': 'snow',
      //                                                     '有风': 'hazy',
      //                                                     '微风': 'hazy',
      //                                                     '和风': 'hazy',
      //                                                     '清风': 'hazy',
      //                                                     '强风': 'hazy',
      //                                                     '疾风': 'hazy',
      //                                                     '清风': 'hazy',
      //                                                     '烈风': 'hazy',
      //                                                     '雾': 'fog',
      //                                                     '薄雾': 'fog',
      //                                                     '少云': 'partlycloudy',
      //                                                     '晴间多云': 'partlycloudy',
      //                                                     '阴': 'partlycloudy',
      //            },
      //            fields: {
      //               temperature: '&sensor.heweather_tmp.state',
      //               temperatureUnit: '&sensor.heweather_tmp.attributes.unit_of_measurement',
      //               //summary: '&sensor.heweather_cond_txt.state',
      //    }
      // }
      //         ],
      left: [
         {
            type: HEADER_ITEMS.DATETIME,
            dateFormat: 'yyyy-MM-dd, EEEE', //https://docs.angularjs.org/api/ng/filter/date
         }
      ]
   },

   screensaver: {// optional. [url=https://github.com/resoai/TileBoard/wiki/Screensaver-configuration]https://github.com/resoai/TileBo ... saver-configuration[/url]
      timeout: 60, // after 5 mins of inactive
      slidesTimeout: 10, // 10s for one slide
      styles: { fontSize: '40px' },
      leftBottom: [
              {
                      type: SCREENSAVER_ITEMS.DATETIME,
                      dateFormat: 'yyyy-MM-dd, EEEE',
              }
              ], // put datetime to the left-bottom of screensaver
      slides: [
         {
            bg: 'images/4.png',
            rightTop: [ // put text to the 2nd slide
               {
                  type: SCREENSAVER_ITEMS.CUSTOM_HTML,
                  html: "<b>智能家庭控制中心</b>",
                  styles: { fontSize: '40px' }
               }
            ]
         }
      ]
   },

   pages: [
      {
         title: 'Main page',
         bg: 'images/bg3.jpg',
         icon: 'mdi-home-outline', // home icon
         groups: [
            {
               title: '生活讯息',
               width: 2,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                                         bg: 'images/yj.jpg',
                                         bgOpacity: 1,
                     list: [
                        {
                           title: '日出日落',
                           icon: 'mdi-weather-sunny',
                           value: '&sun.sun_state.state'
                        },
                        {
                           title: '月满月缺',
                           icon: 'mdi-weather-night',
                           value: '&sensor.moon_state.state'
                        },
                        {
                           title: '到达公司所需时间',
                           icon: 'mdi-traffic-light',
                           value: '&sensor.traffic_home_to_office.state 分钟'
                        },
                        {
                           title: '秦皇西大街路况',
                           icon: 'mdi-traffic-light',
                           value: '&sensor.traffic_home_to_office.attributes.2'
                        },
                        {
                           title: '洗车指数',
                           icon: 'mdi-traffic-light',
                           value: '&sensor.heweather_cw.state'
                        },
                        {
                           title: '距离过年',
                           icon: 'mdi-scale-bathroom',
                           //value: '&sensor.phicomm_balance.state kg'
                           value: '17 天'
                        }
                     ]
                  },
                  {
                                   position: [0, 1],
                                   type: TYPES.SENSOR,
                                   title: '书房温度',
                                   height: 0.5,
                                   id: 'sensor.temperature_158d00016ffa41',
                                   bg: 'images/sfwd.jpg',
                                   bgOpacity: 1,
                   unit: 'C', // override default entity unit
                   state: false, // hidding state
                  },
                  {
                                   position: [0, 1.5],
                                   type: TYPES.SENSOR,
                                   title: '书房湿度',
                                   height: 0.5,
                                   id: 'sensor.humidity_158d00016ffa41',
                                   bg: 'images/sfsd.jpg',
                                   bgOpacity: 1,
                   unit: '%', // override default entity unit
                   state: false, // hidding state
                  },
                  {
                                   position: [1, 1],
                                   type: TYPES.SENSOR,
                                   title: '书房亮度',
                                   height: 0.5,
                                   id: 'sensor.illumination_34ce008be535',
                                   bg: 'images/sfld.jpg',
                                   bgOpacity: 1,
                   unit: 'Lm', // override default entity unit
                   state: false, // hidding state
                  },
                  {
                                   position: [1, 1.5],
                                   type: TYPES.SENSOR,
                                   title: '系统运行',
                                   height: 0.5,
                                   id: 'sensor.homeassistant',
                                   bg: 'images/xtyx.jpg',
                                   bgOpacity: 1,
                   unit: 'h', // override default entity unit
                   state: false, // hidding state
                  },
                  {
                                   position: [0, 2],
                                   type: TYPES.SENSOR_ICON,
                                   title: '门传感器',
                                   //height: 0.5,
                                   width: 0.5,
                                   id: 'binary_sensor.door_window_sensor_158d00016fdb4c',
                                   bg: 'images/444.jpg',
                                   states: {
                                      on: "开",
                                      off: "关"
                                   },
                                   icons: {
                                      on: 'mdi-door-open',
                                      off: 'mdi-door-closed'
                                   },
                                  },
                  {
                                   position: [0.5, 2],
                                   type: TYPES.SENSOR_ICON,
                                   title: '窗传感器',
                                   width: 0.5,
                                   id: 'binary_sensor.door_window_sensor_158d000120c802',
                                   bg: 'images/333.jpg',
                                   states: {
                                      on: "开",
                                      off: "关"
                                   },
                                   icons: {
                                      on: 'mdi-window-open',
                                      off: 'mdi-window-closed'
                                   },
                  },
                  {
                                   position: [1, 2],
                                   type: TYPES.SENSOR_ICON,
                                   title: '人员活动',
                                   width: 0.5,
                                   id: 'binary_sensor.motion_sensor_158d0001db0ae8',
                                   bg: 'images/222.jpg',
                                   states: {
                                      on: "有人",
                                      off: "无人"
                                   },
                                   icons: {
                                      on: 'mdi-run',
                                      off: 'mdi-human-male'
                                   },
                                  },
                                  //扫地机器人
                                   {
                                    position: [1.5, 2],
                                    type: TYPES.SENSOR_ICON,
                                    title: '扫地机器',
                                    width: 0.5,
                                    id: 'vacuum.robot',
                                    bg: 'images/111.jpg',
                                    states: {
                                       docked: "停靠",
                                       cleaning: "清扫",
                                       returning: "返回"
                                    },
                                    icons: {
                                       docked: 'mdi-battery-charging-30',
                                       cleaning: 'mdi-fan mdi-spin',
                                       returning: 'mdi-keyboard-return'
                                    },
                                   },
               ]
            },
            {
               title: '常用开关',
               width: 3,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "fan.xiaomi_air_purifier_2",
                                         bg: 'images/jhq.jpg',
                                         classes: ["switch-bg"],
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     title: '净化器',
                     icons: {'off': 'mdi-fan-off', 'on': 'mdi-fan mdi-spin'}

                  },
                  {
                     position: [0.75, 0],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.plug_158d0001db17e9",
                                         bg: 'images/jsq.jpg',
                                         classes: ["switch-bg"],
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     title: '加湿器',
                     icons: {'off': 'mdi-water-off', 'on': 'mdi-water'}
                  },
                  {
                     position: [1.5, 0],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.sw_tv",
                                         bg: 'images/tv.jpg',
                                         bgOpacity: 0.9,
                                         classes: ["switch-bg"],
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     title: '客厅电视',
                     icons: {'off': 'mdi-television-off', 'on': 'mdi-television'}
                  },
                  {
                     position: [2.25, 0],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.led_hallway",
                                         bg: 'images/zl.jpg',
                                         bgOpacity: 0.9,
                                         classes: ["switch-bg"],
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     icons: {'off': 'mdi-ceiling-light', 'on': 'mdi-lightbulb-on'}
                  },
                  {
                     position: [0, 0.75],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.kt_light",
                                         bg: 'images/kt.jpg',
                                         bgOpacity: 0.9,
                                         classes: ["switch-bg"],
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     icons: {'off': 'mdi-ceiling-light', 'on': 'mdi-lightbulb-on'}
                  },
                  {
                     position: [0.75, 0.75],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.kt_light1",
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                                         bg: 'images/kt.jpg',
                                         classes: ["switch-bg"],
                                         bgOpacity: 0.9,
                     icons: {'off': 'mdi-ceiling-light', 'on': 'mdi-lightbulb-on'}
                  },
                  {
                     position: [1.5, 0.75],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.kt_light2",
                                         bg: 'images/kt.jpg',
                                         bgOpacity: 0.9,
                                         classes: ["switch-bg"],
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     icons: {'off': 'mdi-track-light', 'on': 'mdi-track-light'}
                  },
                  {
                     position: [2.25, 0.75],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.cf_light",
                                         bg: 'images/cf.jpg',
                                         classes: ["switch-bg"],
                                         bgOpacity: 0.9,
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     icons: {'off': 'mdi-ceiling-light', 'on': 'mdi-lightbulb-on'}
                  },
                  {
                     position: [0, 1.5],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.ctld_light",
                                         bg: 'images/ct.jpg',
                                         classes: ["switch-bg"],
                                         bgOpacity: 0.9,
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     icons: {'off': 'mdi-ceiling-light', 'on': 'mdi-lightbulb-on'}
                  },
                  {
                     position: [0.75, 1.5],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.dw_light",
                                         bg: 'images/ys.jpg',
                                         classes: ["switch-bg"],
                                         bgOpacity: 0.9,
                                         title: '浴室灯',
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     icons: {'off': 'mdi-ceiling-light', 'on': 'mdi-lightbulb-on'}
                  },
                  {
                     position: [1.5, 1.5],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.xw_light",
                                         bg: 'images/wsj.jpg',
                                         classes: ["switch-bg"],
                                         bgOpacity: 0.9,
                                         title: '卫生间灯',
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     icons: {'off': 'mdi-ceiling-light', 'on': 'mdi-lightbulb-on'}
                  },
                  {
                     position: [2.25, 1.5],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.led_test",
                                         bg: 'images/zw.jpg',
                                         classes: ["switch-bg"],
                                         bgOpacity: 0.9,
                                         title: '主卧灯',
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     icons: {'off': 'mdi-ceiling-light', 'on': 'mdi-lightbulb-on'}
                  },
                  {
                     position: [0, 2.25],
                     width: 0.75,
                     height: 0.75,
                     type: TYPES.SWITCH,
                     id: "switch.sf_light",
                                         bg: 'images/sf.jpg',
                                         classes: ["switch-bg"],
                                         bgOpacity: 0.9,
                                         title: '书房灯',
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     icons: {'off': 'mdi-ceiling-light', 'on': 'mdi-lightbulb-on'}
                                  },
                                  {
                     position: [0.75, 2.25],
                     width: 0.75,
                     height: 0.75,
                      type: TYPES.SWITCH,
                     id: "switch.plug_158d0001deaab7",
                                         bg: 'images/td.jpg',
                                         classes: ["switch-bg"],
                                         bgOpacity: 0.9,
                                         title: '书房台灯',
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     icons: {'off': 'mdi-desk-lamp', 'on': 'mdi-desk-lamp'}
                                  },
                                  {
                                         position: [2.25, 2.25],
                     width: 0.75,
                     height: 0.75,
                                         type: TYPES.SWITCH,
                                         bg: 'images/ktiao.jpg',
                                         classes: ["switch-bg"],
                                         title: '空调',
                                         bgOpacity: 0.9,
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                                         id: 'switch.kt_kt',
                                         icons: {'off': 'mdi-fan-off', 'on': 'mdi-fan mdi-spin'}
                                  },
                                  {
                                         position: [1.5, 2.25],
                     width: 0.75,
                     height: 0.75,
                                         type: TYPES.SWITCH,
                     id: "switch.yt_light",
                                         bg: 'images/yt.jpg',
                                         classes: ["switch-bg"],
                                         bgOpacity: 0.9,
                                         //title: '阳台灯',
                                         states: {
                                            on: "开",
                                            off: "关",
                                         },
                     icons: {'off': 'mdi-ceiling-light', 'on': 'mdi-lightbulb-on'}
                                  }
               ]
            },

            {
               title: '',
               width: 2,
               height: 3,
               items: [
                        {
                           position: [0, 0],
                           height: 2,
                           title: '天气',
                           //classes: ['-compact'], // enable this if you want a little square tile (1x1)
                           type: TYPES.WEATHER,
                           id: 'group.weather',
                       bg: 'images/tq.jpg',
                       bgOpacity: 1,
                           state: '&sensor.heweather_cond_txt.state', // label with weather summary (e.g. Sunny)
                           icon: '&sensor.heweather_cond_txt.state',
                           //iconImage: '&sensor.heweather_cond_txt.state', // use this one if you want to replace icon with image
                           icons: {
                                  '晴': 'clear',
                                  '多云': 'cloudy',
                                  '毛毛雨': 'rain',
                                  '小雨': 'rain',
                                  '中雨': 'rain',
                                  '大雨': 'rain',
                                  '阵雨': 'rain',
                                  '极端降雨': 'rain',
                                  '暴雨': 'rain',
                                  '大暴雨': 'rain',
                                  '特大暴雨': 'rain',
                                  '强阵雨': 'rain',
                                  '雷阵雨': 'rain',
                                  '强雷阵雨': 'rain',
                                  '雨夹雪': 'sleet',
                                  '雨雪天气': 'sleet',
                                  '阵雨夹雪': 'sleet',
                                  '雷阵雨伴有冰雹': 'sleet',
                                  '小雪': 'snow',
                                  '中雪': 'snow',
                                  '大雪': 'snow',
                                  '暴雪': 'snow',
                                  '阵雪': 'snow',
                                  '有风': 'hazy',
                                  '微风': 'hazy',
                                  '和风': 'hazy',
                                  '清风': 'hazy',
                                  '强风': 'hazy',
                                  '疾风': 'hazy',
                                  '清风': 'hazy',
                                  '烈风': 'hazy',
                                  '雾': 'fog',
                                  '薄雾': 'fog',
                                  '少云': 'partlycloudy',
                                  '晴间多云': 'partlycloudy',
                                  '阴': 'partlycloudy',
                           },
                           fields: { // most of that fields are optional
                                  summary: '&sensor.heweather_cond_txt.state',
                                  temperature: '&sensor.heweather_tmp.state',
                                  temperatureUnit: '&sensor.heweather_tmp.attributes.unit_of_measurement',
                                  windSpeed: '&sensor.heweather_wind_spd.state',
                                  windSpeedUnit: '&sensor.heweather_wind_spd.attributes.unit_of_measurement',
                                  humidity: '&sensor.heweather_hum.state',
                                  humidityUnit: '&sensor.heweather_hum.attributes.unit_of_measurement',

                                  list: [
                                         // custom line
                                         '空气质量： '
                                                + '&sensor.heweather_qlty.state',

                                         // another custom line
                                         '气压： '
                                                + '&sensor.heweather_pres.state'
                                                + '&sensor.heweather_pres.attributes.unit_of_measurement',

                                         // yet another custom line
                                         '风力：'
                                                + '&sensor.heweather_wind_dir.state'
                                                + '&sensor.heweather_wind_sc.state'
                                            + '级'
                                  					]
                                                   }
                                                },
                      {
                         position: [1, 0],
                         type: TYPES.DEVICE_TRACKER,
                         id: 'device_tracker.mix2s',
                         map: 'yandex',
                         states: {
                            home: "在家",
                            not_home: "离家",
                         },
                         bg: 'images/mix2s.jpg',
                         zoomLevels: [9, 13], // or [9] for only one map slide
                         hideEntityPicture: false, //hide entity pic, if you need only map
                         slidesDelay: 2 // delay before first slide animation
                      },
                      {
                         position: [1, 1],
                         type: TYPES.DEVICE_TRACKER,
                         id: 'device_tracker.iphone6s',
                         map: 'yandex',
                         states: {
                            home: "在家",
                            not_home: "离家",
                         },
                         bg: 'images/iphone6s.jpg',
                         zoomLevels: [9, 13], // or [9] for only one map slide
                         hideEntityPicture: false, //hide entity pic, if you need only map
                         slidesDelay: 2 // delay before first slide animation
                      },
                      // {
                      //         position: [0, 2],
                      //         width: 2,
                      //         height: 1,
                      //         type: TYPES.AUTOMATION,
                      //         state: false,
                      //         bg: 'images/yt.jpg',
                      // bgOpacity: 1,
                      //         id: 'automation.zoulangkai',
                      //         title: '走廊自动化',
                      // }

               ]
            }
         ]
      },
      {
         title: 'Second page',
         bg: 'images/bg2.png',
         icon: 'mdi-numeric-2-box-outline',
         groups: [
            {
               title: '',
               width: 2,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     title: 'Short instruction',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Read',
                           icon: 'mdi-numeric-1-box-outline',
                           value: 'README.md'
                        },
                        {
                           title: 'Ask on forum',
                           icon: 'mdi-numeric-2-box-outline',
                           value: 'home-assistant.io'
                        },
                        {
                           title: 'Open an issue',
                           icon: 'mdi-numeric-3-box-outline',
                           value: 'github.com'
                        }
                     ]
                  }
               ]
            },
         ]
      }
     ],
}
