
var actions = [
  {
    "element_id": "wx_text_bc3f9bac", 
    "data": {
      "args": {
        "a_ids": [], 
        "e_ids": [], 
        "st": 2
      }, 
      "type": 0, 
      "exec": 0
    }, 
    "id": "M_faf2c494440c9bb1", 
    "isNew": true
  }, 
  {
    "element_id": "wx_navigator88b01255", 
    "data": {
      "args": {
        "url": "../page1/page1", 
        "a_ids": [], 
        "e_ids": [], 
        "open_type": "navigate", 
        "st": 1
      }, 
      "type": 0, 
      "exec": 5
    }, 
    "id": "M_48aa18ffb3db9780", 
    "isNew": true
  }, 
  {
    "element_id": "wx_navigator3f11737a", 
    "data": {
      "args": {
        "url": "../page2/page2", 
        "a_ids": [], 
        "e_ids": [], 
        "open_type": "navigate", 
        "st": 1
      }, 
      "type": 0, 
      "exec": 5
    }, 
    "id": "M_38ed565b9616b1bf", 
    "isNew": true
  }, 
  {
    "element_id": "wx_navigator6a497cba", 
    "data": {
      "args": {
        "url": "../page9/page9", 
        "a_ids": [], 
        "e_ids": [], 
        "open_type": "navigate", 
        "st": 1
      }, 
      "type": 0, 
      "exec": 5
    }, 
    "id": "M_88d790f4c0997bf2", 
    "isNew": true
  }, 
  {
    "element_id": "wx_navigator39f6c5d0", 
    "data": {
      "args": {
        "url": "../page3/page3", 
        "a_ids": [], 
        "e_ids": [], 
        "open_type": "navigate", 
        "st": 1
      }, 
      "type": 0, 
      "exec": 5
    }, 
    "id": "M_af6babae4fe0ed82", 
    "isNew": true
  }, 
  {
    "element_id": "wx_navigator258582ba", 
    "data": {
      "args": {
        "url": "../page4/page4", 
        "a_ids": [], 
        "e_ids": [], 
        "open_type": "navigate", 
        "st": 1
      }, 
      "type": 0, 
      "exec": 5
    }, 
    "id": "M_dadb1fef2815f5b1", 
    "isNew": true
  }
];

var animations = [
  {
    "data": {
      "type": 3, 
      "t": {
        "rv": 0, 
        "rp": 0, 
        "name": "", 
        "wa": 0, 
        "de": 0, 
        "st": 1, 
        "du": 1, 
        "type": 3, 
        "es": 0
      }, 
      "d": {}
    }, 
    "element_id": "wx_text_bc3f9bac", 
    "iType": "ani", 
    "id": "ani_3bfd31f7e7a53017", 
    "isNew": true
  }
];

var timelines = [
  {
    "iType": 0, 
    "isNew": true, 
    "animations": [
      "ani_3bfd31f7e7a53017"
    ], 
    "element_id": "body_04cb4de138a9edff", 
    "data": {
      "type": 0, 
      "t": {
        "rv": 0, 
        "rp": 0, 
        "wa": 0, 
        "de": 0, 
        "st": 1, 
        "du": 1, 
        "es": 0
      }, 
      "d": {}
    }, 
    "id": "M_1c4c7f5e15a4536f"
  }
];

getApp().coolsite360.DATA[__wxRoute] = {
   animations:animations,
   actions:actions,
   timelines:timelines
};

