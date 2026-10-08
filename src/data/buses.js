// ON BUS V2 — Mumbai Bus Data (Expanded Fleet of 225 Buses)
// Realistic BEST (BRIHANMUMBAI ELECTRIC SUPPLY AND TRANSPORT) bus route data

export const BUS_TYPES = {
  AC: 'AC',
  NON_AC: 'Non-AC',
  MINIBUS: 'Minibus',
  ELECTRIC: 'Electric'
}

export const BUS_STATUS = {
  LIVE: 'LIVE',
  ON_TIME: 'ON TIME',
  DELAYED: 'DELAYED',
  ARRIVING: 'ARRIVING',
  DEPARTED: 'DEPARTED',
  CANCELLED: 'CANCELLED'
}

// Mumbai coordinate bounds
export const MUMBAI_BOUNDS = {
  north: 19.32,
  south: 18.89,
  east: 73.15,
  west: 72.77
}

// Key Mumbai stops with coordinates
export const MUMBAI_STOPS = {
  "Colaba": {
    "lat": 18.9067,
    "lng": 72.8147
  },
  "Nariman Point": {
    "lat": 18.9258,
    "lng": 72.8218
  },
  "Churchgate": {
    "lat": 18.935,
    "lng": 72.8259
  },
  "Marine Lines": {
    "lat": 18.9433,
    "lng": 72.8236
  },
  "CST / VT": {
    "lat": 18.9399,
    "lng": 72.8355
  },
  "Charni Road": {
    "lat": 18.9515,
    "lng": 72.8188
  },
  "Grant Road": {
    "lat": 18.9632,
    "lng": 72.816
  },
  "Mumbai Central": {
    "lat": 18.9696,
    "lng": 72.8194
  },
  "Mahalaxmi": {
    "lat": 18.9827,
    "lng": 72.8234
  },
  "Lower Parel": {
    "lat": 18.9953,
    "lng": 72.8306
  },
  "Prabhadevi": {
    "lat": 19.0166,
    "lng": 72.8295
  },
  "Worli Sea Face": {
    "lat": 19.0157,
    "lng": 72.8177
  },
  "Haji Ali": {
    "lat": 18.9774,
    "lng": 72.8115
  },
  "Byculla": {
    "lat": 18.9763,
    "lng": 72.8335
  },
  "Parel": {
    "lat": 18.9989,
    "lng": 72.8396
  },
  "Dadar Station": {
    "lat": 19.0178,
    "lng": 72.8442
  },
  "Dadar TT": {
    "lat": 19.0195,
    "lng": 72.8491
  },
  "Matunga": {
    "lat": 19.0316,
    "lng": 72.8596
  },
  "Mahim": {
    "lat": 19.041,
    "lng": 72.8427
  },
  "Wadala": {
    "lat": 19.0215,
    "lng": 72.8601
  },
  "Bandra Station": {
    "lat": 19.0544,
    "lng": 72.8402
  },
  "BKC (Bandra Kurla Complex)": {
    "lat": 19.0662,
    "lng": 72.8687
  },
  "Khar": {
    "lat": 19.0699,
    "lng": 72.8385
  },
  "Santacruz Station": {
    "lat": 19.0819,
    "lng": 72.8441
  },
  "Juhu Beach": {
    "lat": 19.0987,
    "lng": 72.8263
  },
  "Vile Parle Station": {
    "lat": 19.0984,
    "lng": 72.8458
  },
  "Airport Terminal 1": {
    "lat": 19.0886,
    "lng": 72.8535
  },
  "Airport Terminal 2": {
    "lat": 19.0928,
    "lng": 72.8613
  },
  "Andheri Station": {
    "lat": 19.1197,
    "lng": 72.8466
  },
  "Versova": {
    "lat": 19.1225,
    "lng": 72.8111
  },
  "Lokhandwala": {
    "lat": 19.1415,
    "lng": 72.8258
  },
  "SEEPZ Andheri": {
    "lat": 19.119,
    "lng": 72.874
  },
  "MIDC Andheri": {
    "lat": 19.1235,
    "lng": 72.8621
  },
  "Jogeshwari": {
    "lat": 19.135,
    "lng": 72.849
  },
  "Goregaon Station": {
    "lat": 19.1663,
    "lng": 72.8493
  },
  "Aarey Milk Colony": {
    "lat": 19.1538,
    "lng": 72.8753
  },
  "Malad Station": {
    "lat": 19.1865,
    "lng": 72.8486
  },
  "Mindspace Malad": {
    "lat": 19.1783,
    "lng": 72.834
  },
  "Kandivali Station": {
    "lat": 19.2046,
    "lng": 72.8468
  },
  "Borivali Station": {
    "lat": 19.2307,
    "lng": 72.8567
  },
  "Gorai Creek": {
    "lat": 19.2361,
    "lng": 72.831
  },
  "Dahisar": {
    "lat": 19.257,
    "lng": 72.859
  },
  "Mira Road": {
    "lat": 19.2812,
    "lng": 72.856
  },
  "Bhayandar": {
    "lat": 19.3015,
    "lng": 72.8524
  },
  "Sion Station": {
    "lat": 19.0392,
    "lng": 72.8598
  },
  "Kurla Station": {
    "lat": 19.0636,
    "lng": 72.8797
  },
  "Chunabhatti": {
    "lat": 19.052,
    "lng": 72.871
  },
  "Vidyavihar": {
    "lat": 19.08,
    "lng": 72.8965
  },
  "Ghatkopar Station": {
    "lat": 19.0832,
    "lng": 72.9073
  },
  "Powai Lake": {
    "lat": 19.1197,
    "lng": 72.9057
  },
  "Hiranandani Powai": {
    "lat": 19.118,
    "lng": 72.915
  },
  "Chandivali": {
    "lat": 19.113,
    "lng": 72.894
  },
  "Sakinaka": {
    "lat": 19.1025,
    "lng": 72.8875
  },
  "Vikhroli": {
    "lat": 19.1059,
    "lng": 72.9262
  },
  "Kanjurmarg": {
    "lat": 19.1305,
    "lng": 72.934
  },
  "Bhandup": {
    "lat": 19.144,
    "lng": 72.9375
  },
  "Nahur": {
    "lat": 19.158,
    "lng": 72.946
  },
  "Mulund Station": {
    "lat": 19.1732,
    "lng": 72.9542
  },
  "Thane Station": {
    "lat": 19.1833,
    "lng": 72.9667
  },
  "Kalwa": {
    "lat": 19.198,
    "lng": 72.998
  },
  "Dombivli": {
    "lat": 19.2184,
    "lng": 73.0867
  },
  "Kalyan": {
    "lat": 19.2394,
    "lng": 73.1267
  },
  "Chembur": {
    "lat": 19.0627,
    "lng": 72.9009
  },
  "Govandi": {
    "lat": 19.055,
    "lng": 72.915
  },
  "Mankhurd": {
    "lat": 19.049,
    "lng": 72.932
  },
  "Vashi": {
    "lat": 19.0771,
    "lng": 72.9986
  },
  "Sanpada": {
    "lat": 19.065,
    "lng": 73.01
  },
  "Nerul": {
    "lat": 19.033,
    "lng": 73.0297
  },
  "Navi Mumbai": {
    "lat": 19.033,
    "lng": 73.0297
  },
  "Belapur": {
    "lat": 19.019,
    "lng": 73.039
  },
  "Kharghar": {
    "lat": 19.047,
    "lng": 73.069
  },
  "Panvel": {
    "lat": 18.9894,
    "lng": 73.1175
  }
}

// Real BEST bus routes for Mumbai (Fleet of 225 buses)
export const BUSES = [
  {
    "id": "B421_1",
    "number": "421",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Andheri Station",
      "stops": [
        "Borivali Station",
        "Kandivali Station",
        "Malad Station",
        "Goregaon Station",
        "Andheri Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "05:55",
        "arrival": "06:42"
      },
      {
        "departure": "06:50",
        "arrival": "07:44"
      },
      {
        "departure": "07:45",
        "arrival": "08:46"
      },
      {
        "departure": "08:40",
        "arrival": "09:48"
      },
      {
        "departure": "09:35",
        "arrival": "10:15"
      },
      {
        "departure": "10:30",
        "arrival": "11:17"
      },
      {
        "departure": "11:25",
        "arrival": "12:19"
      }
    ],
    "fare": 20,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#00c9ff",
    "currentLocation": {
      "lat": 19.2271,
      "lng": 72.8543
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      }
    ]
  },
  {
    "id": "B210_2",
    "number": "210",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "CST / VT",
      "to": "Borivali Station",
      "stops": [
        "CST / VT",
        "Marine Lines",
        "Bandra Station",
        "Andheri Station",
        "Malad Station",
        "Kandivali Station",
        "Borivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:06",
        "arrival": "07:53"
      },
      {
        "departure": "08:12",
        "arrival": "09:06"
      },
      {
        "departure": "09:18",
        "arrival": "10:19"
      },
      {
        "departure": "10:24",
        "arrival": "11:32"
      },
      {
        "departure": "11:30",
        "arrival": "12:10"
      },
      {
        "departure": "12:36",
        "arrival": "13:23"
      },
      {
        "departure": "13:42",
        "arrival": "14:36"
      }
    ],
    "fare": 35,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#22d3a0",
    "currentLocation": {
      "lat": 18.9409,
      "lng": 72.8224
    },
    "routePath": [
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9433,
        "lng": 72.8236
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      }
    ]
  },
  {
    "id": "B202_3",
    "number": "202",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Gorai Creek",
      "to": "Goregaon Station",
      "stops": [
        "Gorai Creek",
        "Borivali Station",
        "Kandivali Station",
        "Malad Station",
        "Goregaon Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:17",
        "arrival": "09:04"
      },
      {
        "departure": "09:34",
        "arrival": "10:28"
      },
      {
        "departure": "10:51",
        "arrival": "11:52"
      },
      {
        "departure": "12:08",
        "arrival": "13:16"
      },
      {
        "departure": "13:25",
        "arrival": "14:05"
      },
      {
        "departure": "14:42",
        "arrival": "15:29"
      },
      {
        "departure": "15:59",
        "arrival": "16:53"
      }
    ],
    "fare": 18,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#4f8cff",
    "currentLocation": {
      "lat": 19.2034,
      "lng": 72.8468
    },
    "routePath": [
      {
        "lat": 19.2361,
        "lng": 72.831
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      }
    ]
  },
  {
    "id": "B203_4",
    "number": "203",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Dahisar",
      "to": "Andheri Station",
      "stops": [
        "Dahisar",
        "Borivali Station",
        "Kandivali Station",
        "Mindspace Malad",
        "Andheri Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:28",
        "arrival": "10:15"
      },
      {
        "departure": "10:56",
        "arrival": "11:50"
      },
      {
        "departure": "12:24",
        "arrival": "13:25"
      },
      {
        "departure": "13:52",
        "arrival": "15:00"
      },
      {
        "departure": "15:20",
        "arrival": "16:00"
      },
      {
        "departure": "16:48",
        "arrival": "17:35"
      },
      {
        "departure": "18:16",
        "arrival": "19:10"
      }
    ],
    "fare": 25,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#00f5c4",
    "currentLocation": {
      "lat": 19.1783,
      "lng": 72.8352
    },
    "routePath": [
      {
        "lat": 19.257,
        "lng": 72.859
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.1783,
        "lng": 72.834
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      }
    ]
  },
  {
    "id": "B204_5",
    "number": "204",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Mira Road",
      "to": "Kandivali Station",
      "stops": [
        "Mira Road",
        "Dahisar",
        "Borivali Station",
        "Kandivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "05:59",
        "arrival": "06:46"
      },
      {
        "departure": "06:58",
        "arrival": "07:52"
      },
      {
        "departure": "07:57",
        "arrival": "08:58"
      },
      {
        "departure": "08:56",
        "arrival": "10:04"
      },
      {
        "departure": "09:55",
        "arrival": "10:35"
      },
      {
        "departure": "10:54",
        "arrival": "11:41"
      },
      {
        "departure": "11:53",
        "arrival": "12:47"
      }
    ],
    "fare": 15,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ffd166",
    "currentLocation": {
      "lat": 19.2824,
      "lng": 72.8584
    },
    "routePath": [
      {
        "lat": 19.2812,
        "lng": 72.856
      },
      {
        "lat": 19.257,
        "lng": 72.859
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      }
    ]
  },
  {
    "id": "B205_6",
    "number": "205",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Bhayandar",
      "to": "Borivali Station",
      "stops": [
        "Bhayandar",
        "Mira Road",
        "Dahisar",
        "Borivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:10",
        "arrival": "07:57"
      },
      {
        "departure": "08:20",
        "arrival": "09:14"
      },
      {
        "departure": "09:30",
        "arrival": "10:31"
      },
      {
        "departure": "10:40",
        "arrival": "11:48"
      },
      {
        "departure": "11:50",
        "arrival": "12:30"
      },
      {
        "departure": "13:00",
        "arrival": "13:47"
      },
      {
        "departure": "14:10",
        "arrival": "15:04"
      }
    ],
    "fare": 20,
    "totalSeats": 46,
    "busType": "AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#a855f7",
    "currentLocation": {
      "lat": 19.2836,
      "lng": 72.8536
    },
    "routePath": [
      {
        "lat": 19.3015,
        "lng": 72.8524
      },
      {
        "lat": 19.2812,
        "lng": 72.856
      },
      {
        "lat": 19.257,
        "lng": 72.859
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      }
    ]
  },
  {
    "id": "B207_7",
    "number": "207",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Versova",
      "stops": [
        "Borivali Station",
        "Kandivali Station",
        "Malad Station",
        "Versova"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:21",
        "arrival": "09:08"
      },
      {
        "departure": "09:42",
        "arrival": "10:36"
      },
      {
        "departure": "11:03",
        "arrival": "12:04"
      },
      {
        "departure": "12:24",
        "arrival": "13:32"
      },
      {
        "departure": "13:45",
        "arrival": "14:25"
      },
      {
        "departure": "15:06",
        "arrival": "15:53"
      },
      {
        "departure": "16:27",
        "arrival": "17:21"
      }
    ],
    "fare": 22,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ff9a3c",
    "currentLocation": {
      "lat": 19.1901,
      "lng": 72.8474
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1225,
        "lng": 72.8111
      }
    ]
  },
  {
    "id": "B212_8",
    "number": "212",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Malad Station",
      "to": "Andheri Station",
      "stops": [
        "Malad Station",
        "Mindspace Malad",
        "Goregaon Station",
        "Jogeshwari",
        "Andheri Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:32",
        "arrival": "10:19"
      },
      {
        "departure": "11:04",
        "arrival": "11:58"
      },
      {
        "departure": "12:36",
        "arrival": "13:37"
      },
      {
        "departure": "14:08",
        "arrival": "15:16"
      },
      {
        "departure": "15:40",
        "arrival": "16:20"
      },
      {
        "departure": "17:12",
        "arrival": "17:59"
      },
      {
        "departure": "18:44",
        "arrival": "19:38"
      }
    ],
    "fare": 15,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ff5571",
    "currentLocation": {
      "lat": 19.1627,
      "lng": 72.8493
    },
    "routePath": [
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1783,
        "lng": 72.834
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.135,
        "lng": 72.849
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      }
    ]
  },
  {
    "id": "B224_9",
    "number": "224",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Bandra Station",
      "stops": [
        "Borivali Station",
        "Malad Station",
        "Andheri Station",
        "Vile Parle Station",
        "Bandra Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:03",
        "arrival": "06:50"
      },
      {
        "departure": "07:06",
        "arrival": "08:00"
      },
      {
        "departure": "08:09",
        "arrival": "09:10"
      },
      {
        "departure": "09:12",
        "arrival": "10:20"
      },
      {
        "departure": "10:15",
        "arrival": "10:55"
      },
      {
        "departure": "11:18",
        "arrival": "12:05"
      },
      {
        "departure": "12:21",
        "arrival": "13:15"
      }
    ],
    "fare": 30,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#38bdf8",
    "currentLocation": {
      "lat": 19.096,
      "lng": 72.847
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.0984,
        "lng": 72.8458
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      }
    ]
  },
  {
    "id": "B235_10",
    "number": "235",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Versova",
      "to": "SEEPZ Andheri",
      "stops": [
        "Versova",
        "Lokhandwala",
        "Andheri Station",
        "MIDC Andheri",
        "SEEPZ Andheri"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:14",
        "arrival": "08:01"
      },
      {
        "departure": "08:28",
        "arrival": "09:22"
      },
      {
        "departure": "09:42",
        "arrival": "10:43"
      },
      {
        "departure": "10:56",
        "arrival": "12:04"
      },
      {
        "departure": "12:10",
        "arrival": "12:50"
      },
      {
        "departure": "13:24",
        "arrival": "14:11"
      },
      {
        "departure": "14:38",
        "arrival": "15:32"
      }
    ],
    "fare": 18,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#34d399",
    "currentLocation": {
      "lat": 19.1178,
      "lng": 72.8764
    },
    "routePath": [
      {
        "lat": 19.1225,
        "lng": 72.8111
      },
      {
        "lat": 19.1415,
        "lng": 72.8258
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.1235,
        "lng": 72.8621
      },
      {
        "lat": 19.119,
        "lng": 72.874
      }
    ]
  },
  {
    "id": "B241_11",
    "number": "241",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Malad Station",
      "to": "Powai Lake",
      "stops": [
        "Malad Station",
        "Goregaon Station",
        "Aarey Milk Colony",
        "Powai Lake"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:25",
        "arrival": "09:12"
      },
      {
        "departure": "09:50",
        "arrival": "10:44"
      },
      {
        "departure": "11:15",
        "arrival": "12:16"
      },
      {
        "departure": "12:40",
        "arrival": "13:48"
      },
      {
        "departure": "14:05",
        "arrival": "14:45"
      },
      {
        "departure": "15:30",
        "arrival": "16:17"
      },
      {
        "departure": "16:55",
        "arrival": "17:49"
      }
    ],
    "fare": 16,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#f43f5e",
    "currentLocation": {
      "lat": 19.1538,
      "lng": 72.8729
    },
    "routePath": [
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.1538,
        "lng": 72.8753
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      }
    ]
  },
  {
    "id": "B253_12",
    "number": "253",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "Borivali Station",
      "stops": [
        "Andheri Station",
        "Jogeshwari",
        "Goregaon Station",
        "Malad Station",
        "Borivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "08:56",
        "arrival": "09:43"
      },
      {
        "departure": "09:52",
        "arrival": "10:46"
      },
      {
        "departure": "10:48",
        "arrival": "11:49"
      },
      {
        "departure": "11:44",
        "arrival": "12:52"
      },
      {
        "departure": "12:40",
        "arrival": "13:20"
      },
      {
        "departure": "13:36",
        "arrival": "14:23"
      },
      {
        "departure": "14:32",
        "arrival": "15:26"
      }
    ],
    "fare": 20,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#818cf8",
    "currentLocation": {
      "lat": 19.1362,
      "lng": 72.8478
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.135,
        "lng": 72.849
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      }
    ]
  },
  {
    "id": "B271_13",
    "number": "271",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Versova",
      "to": "Santacruz Station",
      "stops": [
        "Versova",
        "Andheri Station",
        "Vile Parle Station",
        "Airport Terminal 1",
        "Santacruz Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:07",
        "arrival": "06:54"
      },
      {
        "departure": "07:14",
        "arrival": "08:08"
      },
      {
        "departure": "08:21",
        "arrival": "09:22"
      },
      {
        "departure": "09:28",
        "arrival": "10:36"
      },
      {
        "departure": "10:35",
        "arrival": "11:15"
      },
      {
        "departure": "11:42",
        "arrival": "12:29"
      },
      {
        "departure": "12:49",
        "arrival": "13:43"
      }
    ],
    "fare": 22,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#10b981",
    "currentLocation": {
      "lat": 19.1008,
      "lng": 72.8458
    },
    "routePath": [
      {
        "lat": 19.1225,
        "lng": 72.8111
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.0984,
        "lng": 72.8458
      },
      {
        "lat": 19.0886,
        "lng": 72.8535
      },
      {
        "lat": 19.0819,
        "lng": 72.8441
      }
    ]
  },
  {
    "id": "B281_14",
    "number": "281",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Juhu Beach",
      "to": "Bandra Station",
      "stops": [
        "Juhu Beach",
        "Santacruz Station",
        "Khar",
        "Bandra Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:18",
        "arrival": "08:05"
      },
      {
        "departure": "08:36",
        "arrival": "09:30"
      },
      {
        "departure": "09:54",
        "arrival": "10:55"
      },
      {
        "departure": "11:12",
        "arrival": "12:20"
      },
      {
        "departure": "12:30",
        "arrival": "13:10"
      },
      {
        "departure": "13:48",
        "arrival": "14:35"
      },
      {
        "departure": "15:06",
        "arrival": "16:00"
      }
    ],
    "fare": 12,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#6366f1",
    "currentLocation": {
      "lat": 19.0855,
      "lng": 72.8453
    },
    "routePath": [
      {
        "lat": 19.0987,
        "lng": 72.8263
      },
      {
        "lat": 19.0819,
        "lng": 72.8441
      },
      {
        "lat": 19.0699,
        "lng": 72.8385
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      }
    ]
  },
  {
    "id": "B290_15",
    "number": "290",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Malad Station",
      "stops": [
        "Borivali Station",
        "Gorai Creek",
        "Kandivali Station",
        "Malad Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:29",
        "arrival": "09:16"
      },
      {
        "departure": "09:58",
        "arrival": "10:52"
      },
      {
        "departure": "11:27",
        "arrival": "12:28"
      },
      {
        "departure": "12:56",
        "arrival": "14:04"
      },
      {
        "departure": "14:25",
        "arrival": "15:05"
      },
      {
        "departure": "15:54",
        "arrival": "16:41"
      },
      {
        "departure": "17:23",
        "arrival": "18:17"
      }
    ],
    "fare": 14,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ec4899",
    "currentLocation": {
      "lat": 19.201,
      "lng": 72.8492
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2361,
        "lng": 72.831
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      }
    ]
  },
  {
    "id": "B155_16",
    "number": "155",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "Bandra Station",
      "stops": [
        "Andheri Station",
        "Airport Terminal 2",
        "Juhu Beach",
        "Vile Parle Station",
        "Santacruz Station",
        "Bandra Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:00",
        "arrival": "09:47"
      },
      {
        "departure": "10:00",
        "arrival": "10:54"
      },
      {
        "departure": "11:00",
        "arrival": "12:01"
      },
      {
        "departure": "12:00",
        "arrival": "13:08"
      },
      {
        "departure": "13:00",
        "arrival": "13:40"
      },
      {
        "departure": "14:00",
        "arrival": "14:47"
      },
      {
        "departure": "15:00",
        "arrival": "15:54"
      }
    ],
    "fare": 16,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#14b8a6",
    "currentLocation": {
      "lat": 19.096,
      "lng": 72.8434
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      },
      {
        "lat": 19.0987,
        "lng": 72.8263
      },
      {
        "lat": 19.0984,
        "lng": 72.8458
      },
      {
        "lat": 19.0819,
        "lng": 72.8441
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      }
    ]
  },
  {
    "id": "B455_17",
    "number": "455",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Kandivali Station",
      "to": "Versova",
      "stops": [
        "Kandivali Station",
        "Malad Station",
        "Versova"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:11",
        "arrival": "06:58"
      },
      {
        "departure": "07:22",
        "arrival": "08:16"
      },
      {
        "departure": "08:33",
        "arrival": "09:34"
      },
      {
        "departure": "09:44",
        "arrival": "10:52"
      },
      {
        "departure": "10:55",
        "arrival": "11:35"
      },
      {
        "departure": "12:06",
        "arrival": "12:53"
      },
      {
        "departure": "13:17",
        "arrival": "14:11"
      }
    ],
    "fare": 15,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#00c9ff",
    "currentLocation": {
      "lat": 19.1853,
      "lng": 72.8474
    },
    "routePath": [
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1225,
        "lng": 72.8111
      }
    ]
  },
  {
    "id": "B456_18",
    "number": "456",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Versova",
      "stops": [
        "Borivali Station",
        "Kandivali Station",
        "Mindspace Malad",
        "Versova"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:22",
        "arrival": "08:09"
      },
      {
        "departure": "08:44",
        "arrival": "09:38"
      },
      {
        "departure": "10:06",
        "arrival": "11:07"
      },
      {
        "departure": "11:28",
        "arrival": "12:36"
      },
      {
        "departure": "12:50",
        "arrival": "13:30"
      },
      {
        "departure": "14:12",
        "arrival": "14:59"
      },
      {
        "departure": "15:34",
        "arrival": "16:28"
      }
    ],
    "fare": 20,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#22d3a0",
    "currentLocation": {
      "lat": 19.2046,
      "lng": 72.8468
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.1783,
        "lng": 72.834
      },
      {
        "lat": 19.1225,
        "lng": 72.8111
      }
    ]
  },
  {
    "id": "B460_19",
    "number": "460",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Gorai Creek",
      "to": "Mira Road",
      "stops": [
        "Gorai Creek",
        "Borivali Station",
        "Dahisar",
        "Mira Road"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:33",
        "arrival": "09:20"
      },
      {
        "departure": "10:06",
        "arrival": "11:00"
      },
      {
        "departure": "11:39",
        "arrival": "12:40"
      },
      {
        "departure": "13:12",
        "arrival": "14:20"
      },
      {
        "departure": "14:45",
        "arrival": "15:25"
      },
      {
        "departure": "16:18",
        "arrival": "17:05"
      },
      {
        "departure": "17:51",
        "arrival": "18:45"
      }
    ],
    "fare": 15,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#4f8cff",
    "currentLocation": {
      "lat": 19.2582,
      "lng": 72.8602
    },
    "routePath": [
      {
        "lat": 19.2361,
        "lng": 72.831
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.257,
        "lng": 72.859
      },
      {
        "lat": 19.2812,
        "lng": 72.856
      }
    ]
  },
  {
    "id": "B461_20",
    "number": "461",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Ghatkopar Station",
      "stops": [
        "Borivali Station",
        "Malad Station",
        "SEEPZ Andheri",
        "Powai Lake",
        "Ghatkopar Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:04",
        "arrival": "09:51"
      },
      {
        "departure": "10:08",
        "arrival": "11:02"
      },
      {
        "departure": "11:12",
        "arrival": "12:13"
      },
      {
        "departure": "12:16",
        "arrival": "13:24"
      },
      {
        "departure": "13:20",
        "arrival": "14:00"
      },
      {
        "departure": "14:24",
        "arrival": "15:11"
      },
      {
        "departure": "15:28",
        "arrival": "16:22"
      }
    ],
    "fare": 28,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#00f5c4",
    "currentLocation": {
      "lat": 19.0856,
      "lng": 72.9097
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.119,
        "lng": 72.874
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      }
    ]
  },
  {
    "id": "B701_21",
    "number": "701",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Bandra Station",
      "to": "Dadar Station",
      "stops": [
        "Bandra Station",
        "Sion Station",
        "Matunga",
        "Dadar Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:15",
        "arrival": "07:02"
      },
      {
        "departure": "07:30",
        "arrival": "08:24"
      },
      {
        "departure": "08:45",
        "arrival": "09:46"
      },
      {
        "departure": "10:00",
        "arrival": "11:08"
      },
      {
        "departure": "11:15",
        "arrival": "11:55"
      },
      {
        "departure": "12:30",
        "arrival": "13:17"
      },
      {
        "departure": "13:45",
        "arrival": "14:39"
      }
    ],
    "fare": 15,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ffd166",
    "currentLocation": {
      "lat": 19.058,
      "lng": 72.8378
    },
    "routePath": [
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0316,
        "lng": 72.8596
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      }
    ]
  },
  {
    "id": "B305_22",
    "number": "305",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Worli Sea Face",
      "to": "Nariman Point",
      "stops": [
        "Worli Sea Face",
        "Marine Lines",
        "Churchgate",
        "Nariman Point"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:26",
        "arrival": "08:13"
      },
      {
        "departure": "08:52",
        "arrival": "09:46"
      },
      {
        "departure": "10:18",
        "arrival": "11:19"
      },
      {
        "departure": "11:44",
        "arrival": "12:52"
      },
      {
        "departure": "13:10",
        "arrival": "13:50"
      },
      {
        "departure": "14:36",
        "arrival": "15:23"
      },
      {
        "departure": "16:02",
        "arrival": "16:56"
      }
    ],
    "fare": 12,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#a855f7",
    "currentLocation": {
      "lat": 18.9397,
      "lng": 72.8224
    },
    "routePath": [
      {
        "lat": 19.0157,
        "lng": 72.8177
      },
      {
        "lat": 18.9433,
        "lng": 72.8236
      },
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9258,
        "lng": 72.8218
      }
    ]
  },
  {
    "id": "B1_23",
    "number": "1",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Colaba",
      "to": "CST / VT",
      "stops": [
        "Colaba",
        "Nariman Point",
        "Churchgate",
        "CST / VT"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "07:57",
        "arrival": "08:44"
      },
      {
        "departure": "08:54",
        "arrival": "09:48"
      },
      {
        "departure": "09:51",
        "arrival": "10:52"
      },
      {
        "departure": "10:48",
        "arrival": "11:56"
      },
      {
        "departure": "11:45",
        "arrival": "12:25"
      },
      {
        "departure": "12:42",
        "arrival": "13:29"
      },
      {
        "departure": "13:39",
        "arrival": "14:33"
      }
    ],
    "fare": 10,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ff9a3c",
    "currentLocation": {
      "lat": 18.9326,
      "lng": 72.8259
    },
    "routePath": [
      {
        "lat": 18.9067,
        "lng": 72.8147
      },
      {
        "lat": 18.9258,
        "lng": 72.8218
      },
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9399,
        "lng": 72.8355
      }
    ]
  },
  {
    "id": "B2_24",
    "number": "2",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Colaba",
      "to": "Mumbai Central",
      "stops": [
        "Colaba",
        "CST / VT",
        "Charni Road",
        "Grant Road",
        "Mumbai Central"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:08",
        "arrival": "09:55"
      },
      {
        "departure": "10:16",
        "arrival": "11:10"
      },
      {
        "departure": "11:24",
        "arrival": "12:25"
      },
      {
        "departure": "12:32",
        "arrival": "13:40"
      },
      {
        "departure": "13:40",
        "arrival": "14:20"
      },
      {
        "departure": "14:48",
        "arrival": "15:35"
      },
      {
        "departure": "15:56",
        "arrival": "16:50"
      }
    ],
    "fare": 14,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ff5571",
    "currentLocation": {
      "lat": 18.962,
      "lng": 72.8172
    },
    "routePath": [
      {
        "lat": 18.9067,
        "lng": 72.8147
      },
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9515,
        "lng": 72.8188
      },
      {
        "lat": 18.9632,
        "lng": 72.816
      },
      {
        "lat": 18.9696,
        "lng": 72.8194
      }
    ]
  },
  {
    "id": "B3_25",
    "number": "3",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Nariman Point",
      "to": "Mahalaxmi",
      "stops": [
        "Nariman Point",
        "Churchgate",
        "Marine Lines",
        "Mumbai Central",
        "Mahalaxmi"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:19",
        "arrival": "07:06"
      },
      {
        "departure": "07:38",
        "arrival": "08:32"
      },
      {
        "departure": "08:57",
        "arrival": "09:58"
      },
      {
        "departure": "10:16",
        "arrival": "11:24"
      },
      {
        "departure": "11:35",
        "arrival": "12:15"
      },
      {
        "departure": "12:54",
        "arrival": "13:41"
      },
      {
        "departure": "14:13",
        "arrival": "15:07"
      }
    ],
    "fare": 16,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#38bdf8",
    "currentLocation": {
      "lat": 18.9827,
      "lng": 72.8258
    },
    "routePath": [
      {
        "lat": 18.9258,
        "lng": 72.8218
      },
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9433,
        "lng": 72.8236
      },
      {
        "lat": 18.9696,
        "lng": 72.8194
      },
      {
        "lat": 18.9827,
        "lng": 72.8234
      }
    ]
  },
  {
    "id": "B4_26",
    "number": "4",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Colaba",
      "to": "Dadar Station",
      "stops": [
        "Colaba",
        "CST / VT",
        "Byculla",
        "Parel",
        "Dadar Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:30",
        "arrival": "08:17"
      },
      {
        "departure": "09:00",
        "arrival": "09:54"
      },
      {
        "departure": "10:30",
        "arrival": "11:31"
      },
      {
        "departure": "12:00",
        "arrival": "13:08"
      },
      {
        "departure": "13:30",
        "arrival": "14:10"
      },
      {
        "departure": "15:00",
        "arrival": "15:47"
      },
      {
        "departure": "16:30",
        "arrival": "17:24"
      }
    ],
    "fare": 20,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#34d399",
    "currentLocation": {
      "lat": 18.9079,
      "lng": 72.8123
    },
    "routePath": [
      {
        "lat": 18.9067,
        "lng": 72.8147
      },
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9763,
        "lng": 72.8335
      },
      {
        "lat": 18.9989,
        "lng": 72.8396
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      }
    ]
  },
  {
    "id": "B7_27",
    "number": "7",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "CST / VT",
      "to": "Sion Station",
      "stops": [
        "CST / VT",
        "Byculla",
        "Parel",
        "Dadar TT",
        "Sion Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:01",
        "arrival": "08:48"
      },
      {
        "departure": "09:02",
        "arrival": "09:56"
      },
      {
        "departure": "10:03",
        "arrival": "11:04"
      },
      {
        "departure": "11:04",
        "arrival": "12:12"
      },
      {
        "departure": "12:05",
        "arrival": "12:45"
      },
      {
        "departure": "13:06",
        "arrival": "13:53"
      },
      {
        "departure": "14:07",
        "arrival": "15:01"
      }
    ],
    "fare": 18,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#f43f5e",
    "currentLocation": {
      "lat": 18.9787,
      "lng": 72.8323
    },
    "routePath": [
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9763,
        "lng": 72.8335
      },
      {
        "lat": 18.9989,
        "lng": 72.8396
      },
      {
        "lat": 19.0195,
        "lng": 72.8491
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      }
    ]
  },
  {
    "id": "B11_28",
    "number": "11",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Colaba",
      "to": "Prabhadevi",
      "stops": [
        "Colaba",
        "Marine Lines",
        "Haji Ali",
        "Worli Sea Face",
        "Prabhadevi"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:12",
        "arrival": "09:59"
      },
      {
        "departure": "10:24",
        "arrival": "11:18"
      },
      {
        "departure": "11:36",
        "arrival": "12:37"
      },
      {
        "departure": "12:48",
        "arrival": "13:56"
      },
      {
        "departure": "14:00",
        "arrival": "14:40"
      },
      {
        "departure": "15:12",
        "arrival": "15:59"
      },
      {
        "departure": "16:24",
        "arrival": "17:18"
      }
    ],
    "fare": 22,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#818cf8",
    "currentLocation": {
      "lat": 18.981,
      "lng": 72.8115
    },
    "routePath": [
      {
        "lat": 18.9067,
        "lng": 72.8147
      },
      {
        "lat": 18.9433,
        "lng": 72.8236
      },
      {
        "lat": 18.9774,
        "lng": 72.8115
      },
      {
        "lat": 19.0157,
        "lng": 72.8177
      },
      {
        "lat": 19.0166,
        "lng": 72.8295
      }
    ]
  },
  {
    "id": "B22_29",
    "number": "22",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Mumbai Central",
      "to": "Bandra Station",
      "stops": [
        "Mumbai Central",
        "Mahalaxmi",
        "Lower Parel",
        "Dadar Station",
        "Mahim",
        "Bandra Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:23",
        "arrival": "07:10"
      },
      {
        "departure": "07:46",
        "arrival": "08:40"
      },
      {
        "departure": "09:09",
        "arrival": "10:10"
      },
      {
        "departure": "10:32",
        "arrival": "11:40"
      },
      {
        "departure": "11:55",
        "arrival": "12:35"
      },
      {
        "departure": "13:18",
        "arrival": "14:05"
      },
      {
        "departure": "14:41",
        "arrival": "15:35"
      }
    ],
    "fare": 20,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#10b981",
    "currentLocation": {
      "lat": 19.0374,
      "lng": 72.8439
    },
    "routePath": [
      {
        "lat": 18.9696,
        "lng": 72.8194
      },
      {
        "lat": 18.9827,
        "lng": 72.8234
      },
      {
        "lat": 18.9953,
        "lng": 72.8306
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.041,
        "lng": 72.8427
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      }
    ]
  },
  {
    "id": "B25_30",
    "number": "25",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "CST / VT",
      "to": "Kurla Station",
      "stops": [
        "CST / VT",
        "Byculla",
        "Wadala",
        "Sion Station",
        "Kurla Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:34",
        "arrival": "08:21"
      },
      {
        "departure": "09:08",
        "arrival": "10:02"
      },
      {
        "departure": "10:42",
        "arrival": "11:43"
      },
      {
        "departure": "12:16",
        "arrival": "13:24"
      },
      {
        "departure": "13:50",
        "arrival": "14:30"
      },
      {
        "departure": "15:24",
        "arrival": "16:11"
      },
      {
        "departure": "16:58",
        "arrival": "17:52"
      }
    ],
    "fare": 22,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#6366f1",
    "currentLocation": {
      "lat": 19.0612,
      "lng": 72.8821
    },
    "routePath": [
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9763,
        "lng": 72.8335
      },
      {
        "lat": 19.0215,
        "lng": 72.8601
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      }
    ]
  },
  {
    "id": "B28_31",
    "number": "28",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Churchgate",
      "to": "Dadar Station",
      "stops": [
        "Churchgate",
        "Charni Road",
        "Mumbai Central",
        "Lower Parel",
        "Prabhadevi",
        "Dadar Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:05",
        "arrival": "08:52"
      },
      {
        "departure": "09:10",
        "arrival": "10:04"
      },
      {
        "departure": "10:15",
        "arrival": "11:16"
      },
      {
        "departure": "11:20",
        "arrival": "12:28"
      },
      {
        "departure": "12:25",
        "arrival": "13:05"
      },
      {
        "departure": "13:30",
        "arrival": "14:17"
      },
      {
        "departure": "14:35",
        "arrival": "15:29"
      }
    ],
    "fare": 18,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ec4899",
    "currentLocation": {
      "lat": 18.9338,
      "lng": 72.8235
    },
    "routePath": [
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9515,
        "lng": 72.8188
      },
      {
        "lat": 18.9696,
        "lng": 72.8194
      },
      {
        "lat": 18.9953,
        "lng": 72.8306
      },
      {
        "lat": 19.0166,
        "lng": 72.8295
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      }
    ]
  },
  {
    "id": "B33_32",
    "number": "33",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Colaba",
      "to": "Sion Station",
      "stops": [
        "Colaba",
        "CST / VT",
        "Byculla",
        "Dadar TT",
        "Matunga",
        "Sion Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:16",
        "arrival": "10:03"
      },
      {
        "departure": "10:32",
        "arrival": "11:26"
      },
      {
        "departure": "11:48",
        "arrival": "12:49"
      },
      {
        "departure": "13:04",
        "arrival": "14:12"
      },
      {
        "departure": "14:20",
        "arrival": "15:00"
      },
      {
        "departure": "15:36",
        "arrival": "16:23"
      },
      {
        "departure": "16:52",
        "arrival": "17:46"
      }
    ],
    "fare": 24,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#14b8a6",
    "currentLocation": {
      "lat": 18.9399,
      "lng": 72.8343
    },
    "routePath": [
      {
        "lat": 18.9067,
        "lng": 72.8147
      },
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9763,
        "lng": 72.8335
      },
      {
        "lat": 19.0195,
        "lng": 72.8491
      },
      {
        "lat": 19.0316,
        "lng": 72.8596
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      }
    ]
  },
  {
    "id": "B40_33",
    "number": "40",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Nariman Point",
      "to": "Dadar Station",
      "stops": [
        "Nariman Point",
        "Churchgate",
        "Haji Ali",
        "Worli Sea Face",
        "Dadar Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:27",
        "arrival": "07:14"
      },
      {
        "departure": "07:54",
        "arrival": "08:48"
      },
      {
        "departure": "09:21",
        "arrival": "10:22"
      },
      {
        "departure": "10:48",
        "arrival": "11:56"
      },
      {
        "departure": "12:15",
        "arrival": "12:55"
      },
      {
        "departure": "13:42",
        "arrival": "14:29"
      },
      {
        "departure": "15:09",
        "arrival": "16:03"
      }
    ],
    "fare": 20,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#00c9ff",
    "currentLocation": {
      "lat": 18.9786,
      "lng": 72.8115
    },
    "routePath": [
      {
        "lat": 18.9258,
        "lng": 72.8218
      },
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9774,
        "lng": 72.8115
      },
      {
        "lat": 19.0157,
        "lng": 72.8177
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      }
    ]
  },
  {
    "id": "B56_34",
    "number": "56",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "CST / VT",
      "to": "Lower Parel",
      "stops": [
        "CST / VT",
        "Marine Lines",
        "Grant Road",
        "Mumbai Central",
        "Mahalaxmi",
        "Lower Parel"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "06:58",
        "arrival": "07:45"
      },
      {
        "departure": "07:56",
        "arrival": "08:50"
      },
      {
        "departure": "08:54",
        "arrival": "09:55"
      },
      {
        "departure": "09:52",
        "arrival": "11:00"
      },
      {
        "departure": "10:50",
        "arrival": "11:30"
      },
      {
        "departure": "11:48",
        "arrival": "12:35"
      },
      {
        "departure": "12:46",
        "arrival": "13:40"
      }
    ],
    "fare": 16,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#22d3a0",
    "currentLocation": {
      "lat": 18.972,
      "lng": 72.8206
    },
    "routePath": [
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9433,
        "lng": 72.8236
      },
      {
        "lat": 18.9632,
        "lng": 72.816
      },
      {
        "lat": 18.9696,
        "lng": 72.8194
      },
      {
        "lat": 18.9827,
        "lng": 72.8234
      },
      {
        "lat": 18.9953,
        "lng": 72.8306
      }
    ]
  },
  {
    "id": "B66_35",
    "number": "66",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Colaba",
      "to": "Kurla Station",
      "stops": [
        "Colaba",
        "CST / VT",
        "Wadala",
        "Chunabhatti",
        "Kurla Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:09",
        "arrival": "08:56"
      },
      {
        "departure": "09:18",
        "arrival": "10:12"
      },
      {
        "departure": "10:27",
        "arrival": "11:28"
      },
      {
        "departure": "11:36",
        "arrival": "12:44"
      },
      {
        "departure": "12:45",
        "arrival": "13:25"
      },
      {
        "departure": "13:54",
        "arrival": "14:41"
      },
      {
        "departure": "15:03",
        "arrival": "15:57"
      }
    ],
    "fare": 22,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#4f8cff",
    "currentLocation": {
      "lat": 19.0672,
      "lng": 72.8821
    },
    "routePath": [
      {
        "lat": 18.9067,
        "lng": 72.8147
      },
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 19.0215,
        "lng": 72.8601
      },
      {
        "lat": 19.052,
        "lng": 72.871
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      }
    ]
  },
  {
    "id": "B70_36",
    "number": "70",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Churchgate",
      "to": "BKC (Bandra Kurla Complex)",
      "stops": [
        "Churchgate",
        "Mumbai Central",
        "Dadar Station",
        "Bandra Station",
        "BKC (Bandra Kurla Complex)"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:20",
        "arrival": "10:07"
      },
      {
        "departure": "10:40",
        "arrival": "11:34"
      },
      {
        "departure": "12:00",
        "arrival": "13:01"
      },
      {
        "departure": "13:20",
        "arrival": "14:28"
      },
      {
        "departure": "14:40",
        "arrival": "15:20"
      },
      {
        "departure": "16:00",
        "arrival": "16:47"
      },
      {
        "departure": "17:20",
        "arrival": "18:14"
      }
    ],
    "fare": 28,
    "totalSeats": 46,
    "busType": "AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#00f5c4",
    "currentLocation": {
      "lat": 18.9314,
      "lng": 72.8235
    },
    "routePath": [
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9696,
        "lng": 72.8194
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      }
    ]
  },
  {
    "id": "B83_37",
    "number": "83",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Colaba",
      "to": "Santacruz Station",
      "stops": [
        "Colaba",
        "Nariman Point",
        "Worli Sea Face",
        "Bandra Station",
        "Santacruz Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:31",
        "arrival": "07:18"
      },
      {
        "departure": "08:02",
        "arrival": "08:56"
      },
      {
        "departure": "09:33",
        "arrival": "10:34"
      },
      {
        "departure": "11:04",
        "arrival": "12:12"
      },
      {
        "departure": "12:35",
        "arrival": "13:15"
      },
      {
        "departure": "14:06",
        "arrival": "14:53"
      },
      {
        "departure": "15:37",
        "arrival": "16:31"
      }
    ],
    "fare": 30,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ffd166",
    "currentLocation": {
      "lat": 18.9234,
      "lng": 72.8206
    },
    "routePath": [
      {
        "lat": 18.9067,
        "lng": 72.8147
      },
      {
        "lat": 18.9258,
        "lng": 72.8218
      },
      {
        "lat": 19.0157,
        "lng": 72.8177
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0819,
        "lng": 72.8441
      }
    ]
  },
  {
    "id": "B85_38",
    "number": "85",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "CST / VT",
      "to": "Vashi",
      "stops": [
        "CST / VT",
        "Byculla",
        "Dadar TT",
        "Sion Station",
        "Chembur",
        "Vashi"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:02",
        "arrival": "07:49"
      },
      {
        "departure": "08:04",
        "arrival": "08:58"
      },
      {
        "departure": "09:06",
        "arrival": "10:07"
      },
      {
        "departure": "10:08",
        "arrival": "11:16"
      },
      {
        "departure": "11:10",
        "arrival": "11:50"
      },
      {
        "departure": "12:12",
        "arrival": "12:59"
      },
      {
        "departure": "13:14",
        "arrival": "14:08"
      }
    ],
    "fare": 38,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#a855f7",
    "currentLocation": {
      "lat": 18.9751,
      "lng": 72.8335
    },
    "routePath": [
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9763,
        "lng": 72.8335
      },
      {
        "lat": 19.0195,
        "lng": 72.8491
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      }
    ]
  },
  {
    "id": "B90_39",
    "number": "90",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Churchgate",
      "to": "Thane Station",
      "stops": [
        "Churchgate",
        "CST / VT",
        "Dadar Station",
        "Sion Station",
        "Ghatkopar Station",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:13",
        "arrival": "09:00"
      },
      {
        "departure": "09:26",
        "arrival": "10:20"
      },
      {
        "departure": "10:39",
        "arrival": "11:40"
      },
      {
        "departure": "11:52",
        "arrival": "13:00"
      },
      {
        "departure": "13:05",
        "arrival": "13:45"
      },
      {
        "departure": "14:18",
        "arrival": "15:05"
      },
      {
        "departure": "15:31",
        "arrival": "16:25"
      }
    ],
    "fare": 42,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#ff9a3c",
    "currentLocation": {
      "lat": 19.0178,
      "lng": 72.8454
    },
    "routePath": [
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B333_40",
    "number": "333",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "Kurla Station",
      "stops": [
        "Andheri Station",
        "Ghatkopar Station",
        "Kurla Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:24",
        "arrival": "10:11"
      },
      {
        "departure": "10:48",
        "arrival": "11:42"
      },
      {
        "departure": "12:12",
        "arrival": "13:13"
      },
      {
        "departure": "13:36",
        "arrival": "14:44"
      },
      {
        "departure": "15:00",
        "arrival": "15:40"
      },
      {
        "departure": "16:24",
        "arrival": "17:11"
      },
      {
        "departure": "17:48",
        "arrival": "18:42"
      }
    ],
    "fare": 18,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#ff5571",
    "currentLocation": {
      "lat": 19.1209,
      "lng": 72.849
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      }
    ]
  },
  {
    "id": "B612_41",
    "number": "612",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Malad Station",
      "to": "Powai Lake",
      "stops": [
        "Malad Station",
        "Goregaon Station",
        "SEEPZ Andheri",
        "Powai Lake"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "05:55",
        "arrival": "06:42"
      },
      {
        "departure": "06:50",
        "arrival": "07:44"
      },
      {
        "departure": "07:45",
        "arrival": "08:46"
      },
      {
        "departure": "08:40",
        "arrival": "09:48"
      },
      {
        "departure": "09:35",
        "arrival": "10:15"
      },
      {
        "departure": "10:30",
        "arrival": "11:17"
      },
      {
        "departure": "11:25",
        "arrival": "12:19"
      }
    ],
    "fare": 18,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#38bdf8",
    "currentLocation": {
      "lat": 19.1889,
      "lng": 72.8462
    },
    "routePath": [
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.119,
        "lng": 72.874
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      }
    ]
  },
  {
    "id": "B308_42",
    "number": "308",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "Powai Lake",
      "stops": [
        "Andheri Station",
        "MIDC Andheri",
        "SEEPZ Andheri",
        "Chandivali",
        "Powai Lake"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:06",
        "arrival": "07:53"
      },
      {
        "departure": "08:12",
        "arrival": "09:06"
      },
      {
        "departure": "09:18",
        "arrival": "10:19"
      },
      {
        "departure": "10:24",
        "arrival": "11:32"
      },
      {
        "departure": "11:30",
        "arrival": "12:10"
      },
      {
        "departure": "12:36",
        "arrival": "13:23"
      },
      {
        "departure": "13:42",
        "arrival": "14:36"
      }
    ],
    "fare": 15,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#34d399",
    "currentLocation": {
      "lat": 19.1271,
      "lng": 72.8609
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.1235,
        "lng": 72.8621
      },
      {
        "lat": 19.119,
        "lng": 72.874
      },
      {
        "lat": 19.113,
        "lng": 72.894
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      }
    ]
  },
  {
    "id": "B311_43",
    "number": "311",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Bandra Station",
      "to": "Kurla Station",
      "stops": [
        "Bandra Station",
        "BKC (Bandra Kurla Complex)",
        "Kurla Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:17",
        "arrival": "09:04"
      },
      {
        "departure": "09:34",
        "arrival": "10:28"
      },
      {
        "departure": "10:51",
        "arrival": "11:52"
      },
      {
        "departure": "12:08",
        "arrival": "13:16"
      },
      {
        "departure": "13:25",
        "arrival": "14:05"
      },
      {
        "departure": "14:42",
        "arrival": "15:29"
      },
      {
        "departure": "15:59",
        "arrival": "16:53"
      }
    ],
    "fare": 10,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#f43f5e",
    "currentLocation": {
      "lat": 19.0508,
      "lng": 72.8402
    },
    "routePath": [
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      }
    ]
  },
  {
    "id": "B321_44",
    "number": "321",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Bandra Station",
      "to": "Chembur",
      "stops": [
        "Bandra Station",
        "BKC (Bandra Kurla Complex)",
        "Chunabhatti",
        "Chembur"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:28",
        "arrival": "10:15"
      },
      {
        "departure": "10:56",
        "arrival": "11:50"
      },
      {
        "departure": "12:24",
        "arrival": "13:25"
      },
      {
        "departure": "13:52",
        "arrival": "15:00"
      },
      {
        "departure": "15:20",
        "arrival": "16:00"
      },
      {
        "departure": "16:48",
        "arrival": "17:35"
      },
      {
        "departure": "18:16",
        "arrival": "19:10"
      }
    ],
    "fare": 16,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#818cf8",
    "currentLocation": {
      "lat": 19.0603,
      "lng": 72.9021
    },
    "routePath": [
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.052,
        "lng": 72.871
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      }
    ]
  },
  {
    "id": "B332_45",
    "number": "332",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "Kurla Station",
      "stops": [
        "Andheri Station",
        "Sakinaka",
        "Kurla Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "05:59",
        "arrival": "06:46"
      },
      {
        "departure": "06:58",
        "arrival": "07:52"
      },
      {
        "departure": "07:57",
        "arrival": "08:58"
      },
      {
        "departure": "08:56",
        "arrival": "10:04"
      },
      {
        "departure": "09:55",
        "arrival": "10:35"
      },
      {
        "departure": "10:54",
        "arrival": "11:41"
      },
      {
        "departure": "11:53",
        "arrival": "12:47"
      }
    ],
    "fare": 14,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#10b981",
    "currentLocation": {
      "lat": 19.0624,
      "lng": 72.8821
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.1025,
        "lng": 72.8875
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      }
    ]
  },
  {
    "id": "B340_46",
    "number": "340",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "Ghatkopar Station",
      "stops": [
        "Andheri Station",
        "Sakinaka",
        "Ghatkopar Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:10",
        "arrival": "07:57"
      },
      {
        "departure": "08:20",
        "arrival": "09:14"
      },
      {
        "departure": "09:30",
        "arrival": "10:31"
      },
      {
        "departure": "10:40",
        "arrival": "11:48"
      },
      {
        "departure": "11:50",
        "arrival": "12:30"
      },
      {
        "departure": "13:00",
        "arrival": "13:47"
      },
      {
        "departure": "14:10",
        "arrival": "15:04"
      }
    ],
    "fare": 16,
    "totalSeats": 46,
    "busType": "AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#6366f1",
    "currentLocation": {
      "lat": 19.1197,
      "lng": 72.8442
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.1025,
        "lng": 72.8875
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      }
    ]
  },
  {
    "id": "B348_47",
    "number": "348",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Dadar Station",
      "to": "Vashi",
      "stops": [
        "Dadar Station",
        "Sion Station",
        "Chembur",
        "Govandi",
        "Mankhurd",
        "Vashi"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:21",
        "arrival": "09:08"
      },
      {
        "departure": "09:42",
        "arrival": "10:36"
      },
      {
        "departure": "11:03",
        "arrival": "12:04"
      },
      {
        "departure": "12:24",
        "arrival": "13:32"
      },
      {
        "departure": "13:45",
        "arrival": "14:25"
      },
      {
        "departure": "15:06",
        "arrival": "15:53"
      },
      {
        "departure": "16:27",
        "arrival": "17:21"
      }
    ],
    "fare": 26,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ec4899",
    "currentLocation": {
      "lat": 19.0502,
      "lng": 72.9308
    },
    "routePath": [
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.055,
        "lng": 72.915
      },
      {
        "lat": 19.049,
        "lng": 72.932
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      }
    ]
  },
  {
    "id": "B351_48",
    "number": "351",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Bandra Station",
      "to": "Vashi",
      "stops": [
        "Bandra Station",
        "BKC (Bandra Kurla Complex)",
        "Kurla Station",
        "Chembur",
        "Vashi"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:32",
        "arrival": "10:19"
      },
      {
        "departure": "11:04",
        "arrival": "11:58"
      },
      {
        "departure": "12:36",
        "arrival": "13:37"
      },
      {
        "departure": "14:08",
        "arrival": "15:16"
      },
      {
        "departure": "15:40",
        "arrival": "16:20"
      },
      {
        "departure": "17:12",
        "arrival": "17:59"
      },
      {
        "departure": "18:44",
        "arrival": "19:38"
      }
    ],
    "fare": 30,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#14b8a6",
    "currentLocation": {
      "lat": 19.066,
      "lng": 72.8797
    },
    "routePath": [
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      }
    ]
  },
  {
    "id": "B355_49",
    "number": "355",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Santacruz Station",
      "to": "Chembur",
      "stops": [
        "Santacruz Station",
        "BKC (Bandra Kurla Complex)",
        "Kurla Station",
        "Chembur"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:03",
        "arrival": "06:50"
      },
      {
        "departure": "07:06",
        "arrival": "08:00"
      },
      {
        "departure": "08:09",
        "arrival": "09:10"
      },
      {
        "departure": "09:12",
        "arrival": "10:20"
      },
      {
        "departure": "10:15",
        "arrival": "10:55"
      },
      {
        "departure": "11:18",
        "arrival": "12:05"
      },
      {
        "departure": "12:21",
        "arrival": "13:15"
      }
    ],
    "fare": 18,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#00c9ff",
    "currentLocation": {
      "lat": 19.0855,
      "lng": 72.8453
    },
    "routePath": [
      {
        "lat": 19.0819,
        "lng": 72.8441
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      }
    ]
  },
  {
    "id": "B360_50",
    "number": "360",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Kurla Station",
      "to": "Mankhurd",
      "stops": [
        "Kurla Station",
        "Chunabhatti",
        "Chembur",
        "Govandi",
        "Mankhurd"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:14",
        "arrival": "08:01"
      },
      {
        "departure": "08:28",
        "arrival": "09:22"
      },
      {
        "departure": "09:42",
        "arrival": "10:43"
      },
      {
        "departure": "10:56",
        "arrival": "12:04"
      },
      {
        "departure": "12:10",
        "arrival": "12:50"
      },
      {
        "departure": "13:24",
        "arrival": "14:11"
      },
      {
        "departure": "14:38",
        "arrival": "15:32"
      }
    ],
    "fare": 14,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#22d3a0",
    "currentLocation": {
      "lat": 19.0454,
      "lng": 72.9344
    },
    "routePath": [
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.052,
        "lng": 72.871
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.055,
        "lng": 72.915
      },
      {
        "lat": 19.049,
        "lng": 72.932
      }
    ]
  },
  {
    "id": "B368_51",
    "number": "368",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Dadar Station",
      "to": "Ghatkopar Station",
      "stops": [
        "Dadar Station",
        "Wadala",
        "Chembur",
        "Ghatkopar Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:25",
        "arrival": "09:12"
      },
      {
        "departure": "09:50",
        "arrival": "10:44"
      },
      {
        "departure": "11:15",
        "arrival": "12:16"
      },
      {
        "departure": "12:40",
        "arrival": "13:48"
      },
      {
        "departure": "14:05",
        "arrival": "14:45"
      },
      {
        "departure": "15:30",
        "arrival": "16:17"
      },
      {
        "departure": "16:55",
        "arrival": "17:49"
      }
    ],
    "fare": 20,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#4f8cff",
    "currentLocation": {
      "lat": 19.0603,
      "lng": 72.8985
    },
    "routePath": [
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.0215,
        "lng": 72.8601
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      }
    ]
  },
  {
    "id": "B375_52",
    "number": "375",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Bandra Station",
      "to": "Nerul",
      "stops": [
        "Bandra Station",
        "BKC (Bandra Kurla Complex)",
        "Sion Station",
        "Chembur",
        "Vashi",
        "Nerul"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "08:56",
        "arrival": "09:43"
      },
      {
        "departure": "09:52",
        "arrival": "10:46"
      },
      {
        "departure": "10:48",
        "arrival": "11:49"
      },
      {
        "departure": "11:44",
        "arrival": "12:52"
      },
      {
        "departure": "12:40",
        "arrival": "13:20"
      },
      {
        "departure": "13:36",
        "arrival": "14:23"
      },
      {
        "departure": "14:32",
        "arrival": "15:26"
      }
    ],
    "fare": 36,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#00f5c4",
    "currentLocation": {
      "lat": 19.0615,
      "lng": 72.8997
    },
    "routePath": [
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.033,
        "lng": 73.0297
      }
    ]
  },
  {
    "id": "B385_53",
    "number": "385",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "Vikhroli",
      "stops": [
        "Andheri Station",
        "Airport Terminal 2",
        "Sakinaka",
        "Ghatkopar Station",
        "Vikhroli"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:07",
        "arrival": "06:54"
      },
      {
        "departure": "07:14",
        "arrival": "08:08"
      },
      {
        "departure": "08:21",
        "arrival": "09:22"
      },
      {
        "departure": "09:28",
        "arrival": "10:36"
      },
      {
        "departure": "10:35",
        "arrival": "11:15"
      },
      {
        "departure": "11:42",
        "arrival": "12:29"
      },
      {
        "departure": "12:49",
        "arrival": "13:43"
      }
    ],
    "fare": 22,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ffd166",
    "currentLocation": {
      "lat": 19.1025,
      "lng": 72.8875
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      },
      {
        "lat": 19.1025,
        "lng": 72.8875
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      }
    ]
  },
  {
    "id": "B399_54",
    "number": "399",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Goregaon Station",
      "to": "Bhandup",
      "stops": [
        "Goregaon Station",
        "Aarey Milk Colony",
        "Powai Lake",
        "Vikhroli",
        "Bhandup"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:18",
        "arrival": "08:05"
      },
      {
        "departure": "08:36",
        "arrival": "09:30"
      },
      {
        "departure": "09:54",
        "arrival": "10:55"
      },
      {
        "departure": "11:12",
        "arrival": "12:20"
      },
      {
        "departure": "12:30",
        "arrival": "13:10"
      },
      {
        "departure": "13:48",
        "arrival": "14:35"
      },
      {
        "departure": "15:06",
        "arrival": "16:00"
      }
    ],
    "fare": 22,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#a855f7",
    "currentLocation": {
      "lat": 19.1071,
      "lng": 72.9274
    },
    "routePath": [
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.1538,
        "lng": 72.8753
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.144,
        "lng": 72.9375
      }
    ]
  },
  {
    "id": "B403_55",
    "number": "403",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Ghatkopar Station",
      "stops": [
        "Borivali Station",
        "Kandivali Station",
        "Malad Station",
        "SEEPZ Andheri",
        "Sakinaka",
        "Ghatkopar Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:29",
        "arrival": "09:16"
      },
      {
        "departure": "09:58",
        "arrival": "10:52"
      },
      {
        "departure": "11:27",
        "arrival": "12:28"
      },
      {
        "departure": "12:56",
        "arrival": "14:04"
      },
      {
        "departure": "14:25",
        "arrival": "15:05"
      },
      {
        "departure": "15:54",
        "arrival": "16:41"
      },
      {
        "departure": "17:23",
        "arrival": "18:17"
      }
    ],
    "fare": 32,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#ff9a3c",
    "currentLocation": {
      "lat": 19.2331,
      "lng": 72.8591
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.119,
        "lng": 72.874
      },
      {
        "lat": 19.1025,
        "lng": 72.8875
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      }
    ]
  },
  {
    "id": "B411_56",
    "number": "411",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Jogeshwari",
      "to": "Kanjurmarg",
      "stops": [
        "Jogeshwari",
        "MIDC Andheri",
        "SEEPZ Andheri",
        "Powai Lake",
        "Kanjurmarg"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:00",
        "arrival": "09:47"
      },
      {
        "departure": "10:00",
        "arrival": "10:54"
      },
      {
        "departure": "11:00",
        "arrival": "12:01"
      },
      {
        "departure": "12:00",
        "arrival": "13:08"
      },
      {
        "departure": "13:00",
        "arrival": "13:40"
      },
      {
        "departure": "14:00",
        "arrival": "14:47"
      },
      {
        "departure": "15:00",
        "arrival": "15:54"
      }
    ],
    "fare": 18,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ff5571",
    "currentLocation": {
      "lat": 19.1386,
      "lng": 72.8466
    },
    "routePath": [
      {
        "lat": 19.135,
        "lng": 72.849
      },
      {
        "lat": 19.1235,
        "lng": 72.8621
      },
      {
        "lat": 19.119,
        "lng": 72.874
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.1305,
        "lng": 72.934
      }
    ]
  },
  {
    "id": "B415_57",
    "number": "415",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "SEEPZ Andheri",
      "stops": [
        "Andheri Station",
        "MIDC Andheri",
        "SEEPZ Andheri"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:11",
        "arrival": "06:58"
      },
      {
        "departure": "07:22",
        "arrival": "08:16"
      },
      {
        "departure": "08:33",
        "arrival": "09:34"
      },
      {
        "departure": "09:44",
        "arrival": "10:52"
      },
      {
        "departure": "10:55",
        "arrival": "11:35"
      },
      {
        "departure": "12:06",
        "arrival": "12:53"
      },
      {
        "departure": "13:17",
        "arrival": "14:11"
      }
    ],
    "fare": 10,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#38bdf8",
    "currentLocation": {
      "lat": 19.1154,
      "lng": 72.8728
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.1235,
        "lng": 72.8621
      },
      {
        "lat": 19.119,
        "lng": 72.874
      }
    ]
  },
  {
    "id": "B422_58",
    "number": "422",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Bandra Station",
      "to": "Powai Lake",
      "stops": [
        "Bandra Station",
        "Khar",
        "Santacruz Station",
        "Airport Terminal 1",
        "Airport Terminal 2",
        "Sakinaka",
        "Powai Lake"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:22",
        "arrival": "08:09"
      },
      {
        "departure": "08:44",
        "arrival": "09:38"
      },
      {
        "departure": "10:06",
        "arrival": "11:07"
      },
      {
        "departure": "11:28",
        "arrival": "12:36"
      },
      {
        "departure": "12:50",
        "arrival": "13:30"
      },
      {
        "departure": "14:12",
        "arrival": "14:59"
      },
      {
        "departure": "15:34",
        "arrival": "16:28"
      }
    ],
    "fare": 28,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#34d399",
    "currentLocation": {
      "lat": 19.0675,
      "lng": 72.8385
    },
    "routePath": [
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0699,
        "lng": 72.8385
      },
      {
        "lat": 19.0819,
        "lng": 72.8441
      },
      {
        "lat": 19.0886,
        "lng": 72.8535
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      },
      {
        "lat": 19.1025,
        "lng": 72.8875
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      }
    ]
  },
  {
    "id": "B440_59",
    "number": "440",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Hiranandani Powai",
      "stops": [
        "Borivali Station",
        "Malad Station",
        "Goregaon Station",
        "SEEPZ Andheri",
        "Powai Lake",
        "Hiranandani Powai"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:33",
        "arrival": "09:20"
      },
      {
        "departure": "10:06",
        "arrival": "11:00"
      },
      {
        "departure": "11:39",
        "arrival": "12:40"
      },
      {
        "departure": "13:12",
        "arrival": "14:20"
      },
      {
        "departure": "14:45",
        "arrival": "15:25"
      },
      {
        "departure": "16:18",
        "arrival": "17:05"
      },
      {
        "departure": "17:51",
        "arrival": "18:45"
      }
    ],
    "fare": 26,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#f43f5e",
    "currentLocation": {
      "lat": 19.1185,
      "lng": 72.9069
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.119,
        "lng": 72.874
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.118,
        "lng": 72.915
      }
    ]
  },
  {
    "id": "B448_60",
    "number": "448",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Kandivali Station",
      "to": "Bhandup",
      "stops": [
        "Kandivali Station",
        "Malad Station",
        "Goregaon Station",
        "Aarey Milk Colony",
        "Powai Lake",
        "Kanjurmarg",
        "Bhandup"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:04",
        "arrival": "09:51"
      },
      {
        "departure": "10:08",
        "arrival": "11:02"
      },
      {
        "departure": "11:12",
        "arrival": "12:13"
      },
      {
        "departure": "12:16",
        "arrival": "13:24"
      },
      {
        "departure": "13:20",
        "arrival": "14:00"
      },
      {
        "departure": "14:24",
        "arrival": "15:11"
      },
      {
        "departure": "15:28",
        "arrival": "16:22"
      }
    ],
    "fare": 24,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#818cf8",
    "currentLocation": {
      "lat": 19.1538,
      "lng": 72.8777
    },
    "routePath": [
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.1538,
        "lng": 72.8753
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.1305,
        "lng": 72.934
      },
      {
        "lat": 19.144,
        "lng": 72.9375
      }
    ]
  },
  {
    "id": "B453_61",
    "number": "453",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Lokhandwala",
      "to": "Ghatkopar Station",
      "stops": [
        "Lokhandwala",
        "Andheri Station",
        "Airport Terminal 2",
        "Sakinaka",
        "Ghatkopar Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:15",
        "arrival": "07:02"
      },
      {
        "departure": "07:30",
        "arrival": "08:24"
      },
      {
        "departure": "08:45",
        "arrival": "09:46"
      },
      {
        "departure": "10:00",
        "arrival": "11:08"
      },
      {
        "departure": "11:15",
        "arrival": "11:55"
      },
      {
        "departure": "12:30",
        "arrival": "13:17"
      },
      {
        "departure": "13:45",
        "arrival": "14:39"
      }
    ],
    "fare": 20,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#10b981",
    "currentLocation": {
      "lat": 19.1427,
      "lng": 72.8234
    },
    "routePath": [
      {
        "lat": 19.1415,
        "lng": 72.8258
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      },
      {
        "lat": 19.1025,
        "lng": 72.8875
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      }
    ]
  },
  {
    "id": "B470_62",
    "number": "470",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Thane Station",
      "stops": [
        "Borivali Station",
        "Goregaon Station",
        "Powai Lake",
        "Vikhroli",
        "Mulund Station",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:26",
        "arrival": "08:13"
      },
      {
        "departure": "08:52",
        "arrival": "09:46"
      },
      {
        "departure": "10:18",
        "arrival": "11:19"
      },
      {
        "departure": "11:44",
        "arrival": "12:52"
      },
      {
        "departure": "13:10",
        "arrival": "13:50"
      },
      {
        "departure": "14:36",
        "arrival": "15:23"
      },
      {
        "departure": "16:02",
        "arrival": "16:56"
      }
    ],
    "fare": 38,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#6366f1",
    "currentLocation": {
      "lat": 19.1687,
      "lng": 72.8481
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B478_63",
    "number": "478",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Versova",
      "to": "Vikhroli",
      "stops": [
        "Versova",
        "Andheri Station",
        "SEEPZ Andheri",
        "Hiranandani Powai",
        "Vikhroli"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "07:57",
        "arrival": "08:44"
      },
      {
        "departure": "08:54",
        "arrival": "09:48"
      },
      {
        "departure": "09:51",
        "arrival": "10:52"
      },
      {
        "departure": "10:48",
        "arrival": "11:56"
      },
      {
        "departure": "11:45",
        "arrival": "12:25"
      },
      {
        "departure": "12:42",
        "arrival": "13:29"
      },
      {
        "departure": "13:39",
        "arrival": "14:33"
      }
    ],
    "fare": 24,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ec4899",
    "currentLocation": {
      "lat": 19.1226,
      "lng": 72.874
    },
    "routePath": [
      {
        "lat": 19.1225,
        "lng": 72.8111
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.119,
        "lng": 72.874
      },
      {
        "lat": 19.118,
        "lng": 72.915
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      }
    ]
  },
  {
    "id": "B488_64",
    "number": "488",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Dahisar",
      "to": "Thane Station",
      "stops": [
        "Dahisar",
        "Borivali Station",
        "Malad Station",
        "Powai Lake",
        "Bhandup",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:08",
        "arrival": "09:55"
      },
      {
        "departure": "10:16",
        "arrival": "11:10"
      },
      {
        "departure": "11:24",
        "arrival": "12:25"
      },
      {
        "departure": "12:32",
        "arrival": "13:40"
      },
      {
        "departure": "13:40",
        "arrival": "14:20"
      },
      {
        "departure": "14:48",
        "arrival": "15:35"
      },
      {
        "departure": "15:56",
        "arrival": "16:50"
      }
    ],
    "fare": 40,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#14b8a6",
    "currentLocation": {
      "lat": 19.1161,
      "lng": 72.9069
    },
    "routePath": [
      {
        "lat": 19.257,
        "lng": 72.859
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.144,
        "lng": 72.9375
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B492_65",
    "number": "492",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "SEEPZ Andheri",
      "to": "Thane Station",
      "stops": [
        "SEEPZ Andheri",
        "Powai Lake",
        "Kanjurmarg",
        "Bhandup",
        "Mulund Station",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:19",
        "arrival": "07:06"
      },
      {
        "departure": "07:38",
        "arrival": "08:32"
      },
      {
        "departure": "08:57",
        "arrival": "09:58"
      },
      {
        "departure": "10:16",
        "arrival": "11:24"
      },
      {
        "departure": "11:35",
        "arrival": "12:15"
      },
      {
        "departure": "12:54",
        "arrival": "13:41"
      },
      {
        "departure": "14:13",
        "arrival": "15:07"
      }
    ],
    "fare": 24,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#00c9ff",
    "currentLocation": {
      "lat": 19.1708,
      "lng": 72.9566
    },
    "routePath": [
      {
        "lat": 19.119,
        "lng": 72.874
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.1305,
        "lng": 72.934
      },
      {
        "lat": 19.144,
        "lng": 72.9375
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B496_66",
    "number": "496",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "Thane Station",
      "stops": [
        "Andheri Station",
        "Airport Terminal 2",
        "Sakinaka",
        "Ghatkopar Station",
        "Vikhroli",
        "Mulund Station",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:30",
        "arrival": "08:17"
      },
      {
        "departure": "09:00",
        "arrival": "09:54"
      },
      {
        "departure": "10:30",
        "arrival": "11:31"
      },
      {
        "departure": "12:00",
        "arrival": "13:08"
      },
      {
        "departure": "13:30",
        "arrival": "14:10"
      },
      {
        "departure": "15:00",
        "arrival": "15:47"
      },
      {
        "departure": "16:30",
        "arrival": "17:24"
      }
    ],
    "fare": 32,
    "totalSeats": 46,
    "busType": "AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#22d3a0",
    "currentLocation": {
      "lat": 19.1013,
      "lng": 72.8851
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      },
      {
        "lat": 19.1025,
        "lng": 72.8875
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B506_67",
    "number": "506",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Thane Station",
      "to": "Ghatkopar Station",
      "stops": [
        "Thane Station",
        "Mulund Station",
        "Vikhroli",
        "Ghatkopar Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:01",
        "arrival": "08:48"
      },
      {
        "departure": "09:02",
        "arrival": "09:56"
      },
      {
        "departure": "10:03",
        "arrival": "11:04"
      },
      {
        "departure": "11:04",
        "arrival": "12:12"
      },
      {
        "departure": "12:05",
        "arrival": "12:45"
      },
      {
        "departure": "13:06",
        "arrival": "13:53"
      },
      {
        "departure": "14:07",
        "arrival": "15:01"
      }
    ],
    "fare": 22,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#4f8cff",
    "currentLocation": {
      "lat": 19.1059,
      "lng": 72.925
    },
    "routePath": [
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      }
    ]
  },
  {
    "id": "B801_68",
    "number": "801",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Colaba",
      "to": "Thane Station",
      "stops": [
        "Colaba",
        "CST / VT",
        "Sion Station",
        "Chembur",
        "Ghatkopar Station",
        "Vikhroli",
        "Mulund Station",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:12",
        "arrival": "09:59"
      },
      {
        "departure": "10:24",
        "arrival": "11:18"
      },
      {
        "departure": "11:36",
        "arrival": "12:37"
      },
      {
        "departure": "12:48",
        "arrival": "13:56"
      },
      {
        "departure": "14:00",
        "arrival": "14:40"
      },
      {
        "departure": "15:12",
        "arrival": "15:59"
      },
      {
        "departure": "16:24",
        "arrival": "17:18"
      }
    ],
    "fare": 40,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#00f5c4",
    "currentLocation": {
      "lat": 19.0639,
      "lng": 72.9009
    },
    "routePath": [
      {
        "lat": 18.9067,
        "lng": 72.8147
      },
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B501_69",
    "number": "501",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Kurla Station",
      "to": "Thane Station",
      "stops": [
        "Kurla Station",
        "Ghatkopar Station",
        "Vikhroli",
        "Bhandup",
        "Mulund Station",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:23",
        "arrival": "07:10"
      },
      {
        "departure": "07:46",
        "arrival": "08:40"
      },
      {
        "departure": "09:09",
        "arrival": "10:10"
      },
      {
        "departure": "10:32",
        "arrival": "11:40"
      },
      {
        "departure": "11:55",
        "arrival": "12:35"
      },
      {
        "departure": "13:18",
        "arrival": "14:05"
      },
      {
        "departure": "14:41",
        "arrival": "15:35"
      }
    ],
    "fare": 24,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ffd166",
    "currentLocation": {
      "lat": 19.1083,
      "lng": 72.9274
    },
    "routePath": [
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.144,
        "lng": 72.9375
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B517_70",
    "number": "517",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Santacruz Station",
      "to": "Thane Station",
      "stops": [
        "Santacruz Station",
        "BKC (Bandra Kurla Complex)",
        "Kurla Station",
        "Ghatkopar Station",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:34",
        "arrival": "08:21"
      },
      {
        "departure": "09:08",
        "arrival": "10:02"
      },
      {
        "departure": "10:42",
        "arrival": "11:43"
      },
      {
        "departure": "12:16",
        "arrival": "13:24"
      },
      {
        "departure": "13:50",
        "arrival": "14:30"
      },
      {
        "departure": "15:24",
        "arrival": "16:11"
      },
      {
        "departure": "16:58",
        "arrival": "17:52"
      }
    ],
    "fare": 34,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#a855f7",
    "currentLocation": {
      "lat": 19.1869,
      "lng": 72.9691
    },
    "routePath": [
      {
        "lat": 19.0819,
        "lng": 72.8441
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B521_71",
    "number": "521",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Dadar Station",
      "to": "Thane Station",
      "stops": [
        "Dadar Station",
        "Sion Station",
        "Kurla Station",
        "Ghatkopar Station",
        "Vikhroli",
        "Mulund Station",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:05",
        "arrival": "08:52"
      },
      {
        "departure": "09:10",
        "arrival": "10:04"
      },
      {
        "departure": "10:15",
        "arrival": "11:16"
      },
      {
        "departure": "11:20",
        "arrival": "12:28"
      },
      {
        "departure": "12:25",
        "arrival": "13:05"
      },
      {
        "departure": "13:30",
        "arrival": "14:17"
      },
      {
        "departure": "14:35",
        "arrival": "15:29"
      }
    ],
    "fare": 32,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ff9a3c",
    "currentLocation": {
      "lat": 19.0142,
      "lng": 72.8418
    },
    "routePath": [
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B524_72",
    "number": "524",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Dombivli",
      "stops": [
        "Borivali Station",
        "Goregaon Station",
        "Powai Lake",
        "Kanjurmarg",
        "Thane Station",
        "Kalwa",
        "Dombivli"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:16",
        "arrival": "10:03"
      },
      {
        "departure": "10:32",
        "arrival": "11:26"
      },
      {
        "departure": "11:48",
        "arrival": "12:49"
      },
      {
        "departure": "13:04",
        "arrival": "14:12"
      },
      {
        "departure": "14:20",
        "arrival": "15:00"
      },
      {
        "departure": "15:36",
        "arrival": "16:23"
      },
      {
        "departure": "16:52",
        "arrival": "17:46"
      }
    ],
    "fare": 45,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#ff5571",
    "currentLocation": {
      "lat": 19.1639,
      "lng": 72.8481
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.1305,
        "lng": 72.934
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.198,
        "lng": 72.998
      },
      {
        "lat": 19.2184,
        "lng": 73.0867
      }
    ]
  },
  {
    "id": "B525_73",
    "number": "525",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Goregaon Station",
      "to": "Kalwa",
      "stops": [
        "Goregaon Station",
        "Powai Lake",
        "Vikhroli",
        "Thane Station",
        "Kalwa"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:27",
        "arrival": "07:14"
      },
      {
        "departure": "07:54",
        "arrival": "08:48"
      },
      {
        "departure": "09:21",
        "arrival": "10:22"
      },
      {
        "departure": "10:48",
        "arrival": "11:56"
      },
      {
        "departure": "12:15",
        "arrival": "12:55"
      },
      {
        "departure": "13:42",
        "arrival": "14:29"
      },
      {
        "departure": "15:09",
        "arrival": "16:03"
      }
    ],
    "fare": 28,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#38bdf8",
    "currentLocation": {
      "lat": 19.1047,
      "lng": 72.9262
    },
    "routePath": [
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.198,
        "lng": 72.998
      }
    ]
  },
  {
    "id": "B533_74",
    "number": "533",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "Kalwa",
      "stops": [
        "Andheri Station",
        "SEEPZ Andheri",
        "Powai Lake",
        "Mulund Station",
        "Thane Station",
        "Kalwa"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "06:58",
        "arrival": "07:45"
      },
      {
        "departure": "07:56",
        "arrival": "08:50"
      },
      {
        "departure": "08:54",
        "arrival": "09:55"
      },
      {
        "departure": "09:52",
        "arrival": "11:00"
      },
      {
        "departure": "10:50",
        "arrival": "11:30"
      },
      {
        "departure": "11:48",
        "arrival": "12:35"
      },
      {
        "departure": "12:46",
        "arrival": "13:40"
      }
    ],
    "fare": 36,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#34d399",
    "currentLocation": {
      "lat": 19.119,
      "lng": 72.8752
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.119,
        "lng": 72.874
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.198,
        "lng": 72.998
      }
    ]
  },
  {
    "id": "B545_75",
    "number": "545",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Thane Station",
      "to": "Kalyan",
      "stops": [
        "Thane Station",
        "Kalwa",
        "Dombivli",
        "Kalyan"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:09",
        "arrival": "08:56"
      },
      {
        "departure": "09:18",
        "arrival": "10:12"
      },
      {
        "departure": "10:27",
        "arrival": "11:28"
      },
      {
        "departure": "11:36",
        "arrival": "12:44"
      },
      {
        "departure": "12:45",
        "arrival": "13:25"
      },
      {
        "departure": "13:54",
        "arrival": "14:41"
      },
      {
        "departure": "15:03",
        "arrival": "15:57"
      }
    ],
    "fare": 22,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#f43f5e",
    "currentLocation": {
      "lat": 19.2196,
      "lng": 73.0891
    },
    "routePath": [
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.198,
        "lng": 72.998
      },
      {
        "lat": 19.2184,
        "lng": 73.0867
      },
      {
        "lat": 19.2394,
        "lng": 73.1267
      }
    ]
  },
  {
    "id": "B601_76",
    "number": "601",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Thane Station",
      "to": "Bhandup",
      "stops": [
        "Thane Station",
        "Mulund Station",
        "Nahur",
        "Bhandup"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:20",
        "arrival": "10:07"
      },
      {
        "departure": "10:40",
        "arrival": "11:34"
      },
      {
        "departure": "12:00",
        "arrival": "13:01"
      },
      {
        "departure": "13:20",
        "arrival": "14:28"
      },
      {
        "departure": "14:40",
        "arrival": "15:20"
      },
      {
        "departure": "16:00",
        "arrival": "16:47"
      },
      {
        "departure": "17:20",
        "arrival": "18:14"
      }
    ],
    "fare": 12,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#818cf8",
    "currentLocation": {
      "lat": 19.1464,
      "lng": 72.9351
    },
    "routePath": [
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.158,
        "lng": 72.946
      },
      {
        "lat": 19.144,
        "lng": 72.9375
      }
    ]
  },
  {
    "id": "B603_77",
    "number": "603",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Thane Station",
      "to": "Vashi",
      "stops": [
        "Thane Station",
        "Mulund Station",
        "Vikhroli",
        "Chembur",
        "Vashi"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:31",
        "arrival": "07:18"
      },
      {
        "departure": "08:02",
        "arrival": "08:56"
      },
      {
        "departure": "09:33",
        "arrival": "10:34"
      },
      {
        "departure": "11:04",
        "arrival": "12:12"
      },
      {
        "departure": "12:35",
        "arrival": "13:15"
      },
      {
        "departure": "14:06",
        "arrival": "14:53"
      },
      {
        "departure": "15:37",
        "arrival": "16:31"
      }
    ],
    "fare": 28,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#10b981",
    "currentLocation": {
      "lat": 19.1768,
      "lng": 72.953
    },
    "routePath": [
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      }
    ]
  },
  {
    "id": "B622_78",
    "number": "622",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Ghatkopar Station",
      "to": "Thane Station",
      "stops": [
        "Ghatkopar Station",
        "Vikhroli",
        "Kanjurmarg",
        "Bhandup",
        "Mulund Station",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:02",
        "arrival": "07:49"
      },
      {
        "departure": "08:04",
        "arrival": "08:58"
      },
      {
        "departure": "09:06",
        "arrival": "10:07"
      },
      {
        "departure": "10:08",
        "arrival": "11:16"
      },
      {
        "departure": "11:10",
        "arrival": "11:50"
      },
      {
        "departure": "12:12",
        "arrival": "12:59"
      },
      {
        "departure": "13:14",
        "arrival": "14:08"
      }
    ],
    "fare": 20,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#6366f1",
    "currentLocation": {
      "lat": 19.1797,
      "lng": 72.9667
    },
    "routePath": [
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.1305,
        "lng": 72.934
      },
      {
        "lat": 19.144,
        "lng": 72.9375
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B629_79",
    "number": "629",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Kurla Station",
      "to": "Belapur",
      "stops": [
        "Kurla Station",
        "Chembur",
        "Govandi",
        "Mankhurd",
        "Vashi",
        "Sanpada",
        "Nerul",
        "Belapur"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:13",
        "arrival": "09:00"
      },
      {
        "departure": "09:26",
        "arrival": "10:20"
      },
      {
        "departure": "10:39",
        "arrival": "11:40"
      },
      {
        "departure": "11:52",
        "arrival": "13:00"
      },
      {
        "departure": "13:05",
        "arrival": "13:45"
      },
      {
        "departure": "14:18",
        "arrival": "15:05"
      },
      {
        "departure": "15:31",
        "arrival": "16:25"
      }
    ],
    "fare": 34,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#ec4899",
    "currentLocation": {
      "lat": 19.0306,
      "lng": 73.0309
    },
    "routePath": [
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.055,
        "lng": 72.915
      },
      {
        "lat": 19.049,
        "lng": 72.932
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.065,
        "lng": 73.01
      },
      {
        "lat": 19.033,
        "lng": 73.0297
      },
      {
        "lat": 19.019,
        "lng": 73.039
      }
    ]
  },
  {
    "id": "B646_80",
    "number": "646",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Dadar Station",
      "to": "Panvel",
      "stops": [
        "Dadar Station",
        "Sion Station",
        "Chembur",
        "Vashi",
        "Nerul",
        "Belapur",
        "Kharghar",
        "Panvel"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:24",
        "arrival": "10:11"
      },
      {
        "departure": "10:48",
        "arrival": "11:42"
      },
      {
        "departure": "12:12",
        "arrival": "13:13"
      },
      {
        "departure": "13:36",
        "arrival": "14:44"
      },
      {
        "departure": "15:00",
        "arrival": "15:40"
      },
      {
        "departure": "16:24",
        "arrival": "17:11"
      },
      {
        "departure": "17:48",
        "arrival": "18:42"
      }
    ],
    "fare": 45,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#14b8a6",
    "currentLocation": {
      "lat": 18.9882,
      "lng": 73.1199
    },
    "routePath": [
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.033,
        "lng": 73.0297
      },
      {
        "lat": 19.019,
        "lng": 73.039
      },
      {
        "lat": 19.047,
        "lng": 73.069
      },
      {
        "lat": 18.9894,
        "lng": 73.1175
      }
    ]
  },
  {
    "id": "B700_81",
    "number": "700",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Thane Station",
      "stops": [
        "Borivali Station",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "05:55",
        "arrival": "06:42"
      },
      {
        "departure": "06:50",
        "arrival": "07:44"
      },
      {
        "departure": "07:45",
        "arrival": "08:46"
      },
      {
        "departure": "08:40",
        "arrival": "09:48"
      },
      {
        "departure": "09:35",
        "arrival": "10:15"
      },
      {
        "departure": "10:30",
        "arrival": "11:17"
      },
      {
        "departure": "11:25",
        "arrival": "12:19"
      }
    ],
    "fare": 35,
    "totalSeats": 46,
    "busType": "AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#00c9ff",
    "currentLocation": {
      "lat": 19.2307,
      "lng": 72.8543
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B705_82",
    "number": "705",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Bandra Station",
      "to": "Nerul",
      "stops": [
        "Bandra Station",
        "Sion Station",
        "Chembur",
        "Vashi",
        "Sanpada",
        "Nerul"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:06",
        "arrival": "07:53"
      },
      {
        "departure": "08:12",
        "arrival": "09:06"
      },
      {
        "departure": "09:18",
        "arrival": "10:19"
      },
      {
        "departure": "10:24",
        "arrival": "11:32"
      },
      {
        "departure": "11:30",
        "arrival": "12:10"
      },
      {
        "departure": "12:36",
        "arrival": "13:23"
      },
      {
        "departure": "13:42",
        "arrival": "14:36"
      }
    ],
    "fare": 32,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#22d3a0",
    "currentLocation": {
      "lat": 19.0783,
      "lng": 72.9974
    },
    "routePath": [
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.065,
        "lng": 73.01
      },
      {
        "lat": 19.033,
        "lng": 73.0297
      }
    ]
  },
  {
    "id": "B706_83",
    "number": "706",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "Belapur",
      "stops": [
        "Andheri Station",
        "Kurla Station",
        "Chembur",
        "Vashi",
        "Nerul",
        "Belapur"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:17",
        "arrival": "09:04"
      },
      {
        "departure": "09:34",
        "arrival": "10:28"
      },
      {
        "departure": "10:51",
        "arrival": "11:52"
      },
      {
        "departure": "12:08",
        "arrival": "13:16"
      },
      {
        "departure": "13:25",
        "arrival": "14:05"
      },
      {
        "departure": "14:42",
        "arrival": "15:29"
      },
      {
        "departure": "15:59",
        "arrival": "16:53"
      }
    ],
    "fare": 36,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#4f8cff",
    "currentLocation": {
      "lat": 19.0354,
      "lng": 73.0297
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.033,
        "lng": 73.0297
      },
      {
        "lat": 19.019,
        "lng": 73.039
      }
    ]
  },
  {
    "id": "B707_84",
    "number": "707",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "CST / VT",
      "to": "Panvel",
      "stops": [
        "CST / VT",
        "Dadar Station",
        "Chembur",
        "Vashi",
        "Kharghar",
        "Panvel"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:28",
        "arrival": "10:15"
      },
      {
        "departure": "10:56",
        "arrival": "11:50"
      },
      {
        "departure": "12:24",
        "arrival": "13:25"
      },
      {
        "departure": "13:52",
        "arrival": "15:00"
      },
      {
        "departure": "15:20",
        "arrival": "16:00"
      },
      {
        "departure": "16:48",
        "arrival": "17:35"
      },
      {
        "departure": "18:16",
        "arrival": "19:10"
      }
    ],
    "fare": 45,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#00f5c4",
    "currentLocation": {
      "lat": 18.993,
      "lng": 73.1187
    },
    "routePath": [
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.047,
        "lng": 73.069
      },
      {
        "lat": 18.9894,
        "lng": 73.1175
      }
    ]
  },
  {
    "id": "B709_85",
    "number": "709",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Thane Station",
      "to": "Belapur",
      "stops": [
        "Thane Station",
        "Vashi",
        "Sanpada",
        "Nerul",
        "Belapur"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "05:59",
        "arrival": "06:46"
      },
      {
        "departure": "06:58",
        "arrival": "07:52"
      },
      {
        "departure": "07:57",
        "arrival": "08:58"
      },
      {
        "departure": "08:56",
        "arrival": "10:04"
      },
      {
        "departure": "09:55",
        "arrival": "10:35"
      },
      {
        "departure": "10:54",
        "arrival": "11:41"
      },
      {
        "departure": "11:53",
        "arrival": "12:47"
      }
    ],
    "fare": 30,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ffd166",
    "currentLocation": {
      "lat": 19.0154,
      "lng": 73.0414
    },
    "routePath": [
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.065,
        "lng": 73.01
      },
      {
        "lat": 19.033,
        "lng": 73.0297
      },
      {
        "lat": 19.019,
        "lng": 73.039
      }
    ]
  },
  {
    "id": "B718_86",
    "number": "718",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Ghatkopar Station",
      "to": "Panvel",
      "stops": [
        "Ghatkopar Station",
        "Chembur",
        "Mankhurd",
        "Vashi",
        "Nerul",
        "Belapur",
        "Panvel"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:10",
        "arrival": "07:57"
      },
      {
        "departure": "08:20",
        "arrival": "09:14"
      },
      {
        "departure": "09:30",
        "arrival": "10:31"
      },
      {
        "departure": "10:40",
        "arrival": "11:48"
      },
      {
        "departure": "11:50",
        "arrival": "12:30"
      },
      {
        "departure": "13:00",
        "arrival": "13:47"
      },
      {
        "departure": "14:10",
        "arrival": "15:04"
      }
    ],
    "fare": 36,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#a855f7",
    "currentLocation": {
      "lat": 19.0603,
      "lng": 72.8985
    },
    "routePath": [
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.049,
        "lng": 72.932
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.033,
        "lng": 73.0297
      },
      {
        "lat": 19.019,
        "lng": 73.039
      },
      {
        "lat": 18.9894,
        "lng": 73.1175
      }
    ]
  },
  {
    "id": "B720_87",
    "number": "720",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Vashi",
      "stops": [
        "Borivali Station",
        "Kandivali Station",
        "Powai Lake",
        "Ghatkopar Station",
        "Vashi"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:21",
        "arrival": "09:08"
      },
      {
        "departure": "09:42",
        "arrival": "10:36"
      },
      {
        "departure": "11:03",
        "arrival": "12:04"
      },
      {
        "departure": "12:24",
        "arrival": "13:32"
      },
      {
        "departure": "13:45",
        "arrival": "14:25"
      },
      {
        "departure": "15:06",
        "arrival": "15:53"
      },
      {
        "departure": "16:27",
        "arrival": "17:21"
      }
    ],
    "fare": 40,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#ff9a3c",
    "currentLocation": {
      "lat": 19.2034,
      "lng": 72.8456
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      }
    ]
  },
  {
    "id": "BA115_88",
    "number": "A-115",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "CST / VT",
      "to": "Nariman Point",
      "stops": [
        "CST / VT",
        "Marine Lines",
        "Churchgate",
        "Nariman Point"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:32",
        "arrival": "10:19"
      },
      {
        "departure": "11:04",
        "arrival": "11:58"
      },
      {
        "departure": "12:36",
        "arrival": "13:37"
      },
      {
        "departure": "14:08",
        "arrival": "15:16"
      },
      {
        "departure": "15:40",
        "arrival": "16:20"
      },
      {
        "departure": "17:12",
        "arrival": "17:59"
      },
      {
        "departure": "18:44",
        "arrival": "19:38"
      }
    ],
    "fare": 15,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ff5571",
    "currentLocation": {
      "lat": 18.9258,
      "lng": 72.8218
    },
    "routePath": [
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9433,
        "lng": 72.8236
      },
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9258,
        "lng": 72.8218
      }
    ]
  },
  {
    "id": "BA121_89",
    "number": "A-121",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Colaba",
      "to": "Bandra Station",
      "stops": [
        "Colaba",
        "CST / VT",
        "Worli Sea Face",
        "Bandra Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:03",
        "arrival": "06:50"
      },
      {
        "departure": "07:06",
        "arrival": "08:00"
      },
      {
        "departure": "08:09",
        "arrival": "09:10"
      },
      {
        "departure": "09:12",
        "arrival": "10:20"
      },
      {
        "departure": "10:15",
        "arrival": "10:55"
      },
      {
        "departure": "11:18",
        "arrival": "12:05"
      },
      {
        "departure": "12:21",
        "arrival": "13:15"
      }
    ],
    "fare": 28,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#38bdf8",
    "currentLocation": {
      "lat": 18.9079,
      "lng": 72.8159
    },
    "routePath": [
      {
        "lat": 18.9067,
        "lng": 72.8147
      },
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 19.0157,
        "lng": 72.8177
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      }
    ]
  },
  {
    "id": "BA132_90",
    "number": "A-132",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Churchgate",
      "to": "Andheri Station",
      "stops": [
        "Churchgate",
        "Mumbai Central",
        "Dadar Station",
        "Bandra Station",
        "Andheri Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:14",
        "arrival": "08:01"
      },
      {
        "departure": "08:28",
        "arrival": "09:22"
      },
      {
        "departure": "09:42",
        "arrival": "10:43"
      },
      {
        "departure": "10:56",
        "arrival": "12:04"
      },
      {
        "departure": "12:10",
        "arrival": "12:50"
      },
      {
        "departure": "13:24",
        "arrival": "14:11"
      },
      {
        "departure": "14:38",
        "arrival": "15:32"
      }
    ],
    "fare": 38,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#34d399",
    "currentLocation": {
      "lat": 19.1221,
      "lng": 72.849
    },
    "routePath": [
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9696,
        "lng": 72.8194
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      }
    ]
  },
  {
    "id": "BA180_91",
    "number": "A-180",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "CST / VT",
      "to": "Ghatkopar Station",
      "stops": [
        "CST / VT",
        "Byculla",
        "Dadar Station",
        "Sion Station",
        "Kurla Station",
        "Ghatkopar Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:25",
        "arrival": "09:12"
      },
      {
        "departure": "09:50",
        "arrival": "10:44"
      },
      {
        "departure": "11:15",
        "arrival": "12:16"
      },
      {
        "departure": "12:40",
        "arrival": "13:48"
      },
      {
        "departure": "14:05",
        "arrival": "14:45"
      },
      {
        "departure": "15:30",
        "arrival": "16:17"
      },
      {
        "departure": "16:55",
        "arrival": "17:49"
      }
    ],
    "fare": 32,
    "totalSeats": 46,
    "busType": "AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#f43f5e",
    "currentLocation": {
      "lat": 18.9435,
      "lng": 72.8331
    },
    "routePath": [
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9763,
        "lng": 72.8335
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      }
    ]
  },
  {
    "id": "BA271_92",
    "number": "A-271",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Versova",
      "to": "BKC (Bandra Kurla Complex)",
      "stops": [
        "Versova",
        "Andheri Station",
        "Airport Terminal 2",
        "BKC (Bandra Kurla Complex)"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "08:56",
        "arrival": "09:43"
      },
      {
        "departure": "09:52",
        "arrival": "10:46"
      },
      {
        "departure": "10:48",
        "arrival": "11:49"
      },
      {
        "departure": "11:44",
        "arrival": "12:52"
      },
      {
        "departure": "12:40",
        "arrival": "13:20"
      },
      {
        "departure": "13:36",
        "arrival": "14:23"
      },
      {
        "departure": "14:32",
        "arrival": "15:26"
      }
    ],
    "fare": 26,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#818cf8",
    "currentLocation": {
      "lat": 19.0626,
      "lng": 72.8675
    },
    "routePath": [
      {
        "lat": 19.1225,
        "lng": 72.8111
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      }
    ]
  },
  {
    "id": "BA332_93",
    "number": "A-332",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "BKC (Bandra Kurla Complex)",
      "stops": [
        "Andheri Station",
        "Airport Terminal 2",
        "Sakinaka",
        "Kurla Station",
        "BKC (Bandra Kurla Complex)"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:07",
        "arrival": "06:54"
      },
      {
        "departure": "07:14",
        "arrival": "08:08"
      },
      {
        "departure": "08:21",
        "arrival": "09:22"
      },
      {
        "departure": "09:28",
        "arrival": "10:36"
      },
      {
        "departure": "10:35",
        "arrival": "11:15"
      },
      {
        "departure": "11:42",
        "arrival": "12:29"
      },
      {
        "departure": "12:49",
        "arrival": "13:43"
      }
    ],
    "fare": 22,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#10b981",
    "currentLocation": {
      "lat": 19.1001,
      "lng": 72.8875
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      },
      {
        "lat": 19.1025,
        "lng": 72.8875
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      }
    ]
  },
  {
    "id": "BA340_94",
    "number": "A-340",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "Chembur",
      "stops": [
        "Andheri Station",
        "SEEPZ Andheri",
        "Powai Lake",
        "Ghatkopar Station",
        "Chembur"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:18",
        "arrival": "08:05"
      },
      {
        "departure": "08:36",
        "arrival": "09:30"
      },
      {
        "departure": "09:54",
        "arrival": "10:55"
      },
      {
        "departure": "11:12",
        "arrival": "12:20"
      },
      {
        "departure": "12:30",
        "arrival": "13:10"
      },
      {
        "departure": "13:48",
        "arrival": "14:35"
      },
      {
        "departure": "15:06",
        "arrival": "16:00"
      }
    ],
    "fare": 28,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#6366f1",
    "currentLocation": {
      "lat": 19.082,
      "lng": 72.9085
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.119,
        "lng": 72.874
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      }
    ]
  },
  {
    "id": "BA422_95",
    "number": "A-422",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Bandra Station",
      "to": "Hiranandani Powai",
      "stops": [
        "Bandra Station",
        "BKC (Bandra Kurla Complex)",
        "Airport Terminal 2",
        "Powai Lake",
        "Hiranandani Powai"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:29",
        "arrival": "09:16"
      },
      {
        "departure": "09:58",
        "arrival": "10:52"
      },
      {
        "departure": "11:27",
        "arrival": "12:28"
      },
      {
        "departure": "12:56",
        "arrival": "14:04"
      },
      {
        "departure": "14:25",
        "arrival": "15:05"
      },
      {
        "departure": "15:54",
        "arrival": "16:41"
      },
      {
        "departure": "17:23",
        "arrival": "18:17"
      }
    ],
    "fare": 30,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ec4899",
    "currentLocation": {
      "lat": 19.118,
      "lng": 72.9174
    },
    "routePath": [
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.118,
        "lng": 72.915
      }
    ]
  },
  {
    "id": "BA488_96",
    "number": "A-488",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Thane Station",
      "stops": [
        "Borivali Station",
        "Goregaon Station",
        "Powai Lake",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:00",
        "arrival": "09:47"
      },
      {
        "departure": "10:00",
        "arrival": "10:54"
      },
      {
        "departure": "11:00",
        "arrival": "12:01"
      },
      {
        "departure": "12:00",
        "arrival": "13:08"
      },
      {
        "departure": "13:00",
        "arrival": "13:40"
      },
      {
        "departure": "14:00",
        "arrival": "14:47"
      },
      {
        "departure": "15:00",
        "arrival": "15:54"
      }
    ],
    "fare": 38,
    "totalSeats": 46,
    "busType": "AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#14b8a6",
    "currentLocation": {
      "lat": 19.1845,
      "lng": 72.9643
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "BA505_97",
    "number": "A-505",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Bandra Station",
      "to": "Belapur",
      "stops": [
        "Bandra Station",
        "BKC (Bandra Kurla Complex)",
        "Chembur",
        "Vashi",
        "Nerul",
        "Belapur"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:11",
        "arrival": "06:58"
      },
      {
        "departure": "07:22",
        "arrival": "08:16"
      },
      {
        "departure": "08:33",
        "arrival": "09:34"
      },
      {
        "departure": "09:44",
        "arrival": "10:52"
      },
      {
        "departure": "10:55",
        "arrival": "11:35"
      },
      {
        "departure": "12:06",
        "arrival": "12:53"
      },
      {
        "departure": "13:17",
        "arrival": "14:11"
      }
    ],
    "fare": 38,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#00c9ff",
    "currentLocation": {
      "lat": 19.0568,
      "lng": 72.839
    },
    "routePath": [
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.033,
        "lng": 73.0297
      },
      {
        "lat": 19.019,
        "lng": 73.039
      }
    ]
  },
  {
    "id": "BA701_98",
    "number": "A-701",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "BKC (Bandra Kurla Complex)",
      "stops": [
        "Borivali Station",
        "Kandivali Station",
        "Malad Station",
        "Andheri Station",
        "BKC (Bandra Kurla Complex)"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:22",
        "arrival": "08:09"
      },
      {
        "departure": "08:44",
        "arrival": "09:38"
      },
      {
        "departure": "10:06",
        "arrival": "11:07"
      },
      {
        "departure": "11:28",
        "arrival": "12:36"
      },
      {
        "departure": "12:50",
        "arrival": "13:30"
      },
      {
        "departure": "14:12",
        "arrival": "14:59"
      },
      {
        "departure": "15:34",
        "arrival": "16:28"
      }
    ],
    "fare": 35,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#22d3a0",
    "currentLocation": {
      "lat": 19.1901,
      "lng": 72.8486
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      }
    ]
  },
  {
    "id": "BA702_99",
    "number": "A-702",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Thane Station",
      "to": "BKC (Bandra Kurla Complex)",
      "stops": [
        "Thane Station",
        "Mulund Station",
        "Bhandup",
        "Ghatkopar Station",
        "BKC (Bandra Kurla Complex)"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:33",
        "arrival": "09:20"
      },
      {
        "departure": "10:06",
        "arrival": "11:00"
      },
      {
        "departure": "11:39",
        "arrival": "12:40"
      },
      {
        "departure": "13:12",
        "arrival": "14:20"
      },
      {
        "departure": "14:45",
        "arrival": "15:25"
      },
      {
        "departure": "16:18",
        "arrival": "17:05"
      },
      {
        "departure": "17:51",
        "arrival": "18:45"
      }
    ],
    "fare": 32,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#4f8cff",
    "currentLocation": {
      "lat": 19.0796,
      "lng": 72.9085
    },
    "routePath": [
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.144,
        "lng": 72.9375
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      }
    ]
  },
  {
    "id": "BC10_100",
    "number": "C-10",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "CST / VT",
      "to": "Ghatkopar Station",
      "stops": [
        "CST / VT",
        "Byculla",
        "Dadar TT",
        "Sion Station",
        "Ghatkopar Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:04",
        "arrival": "09:51"
      },
      {
        "departure": "10:08",
        "arrival": "11:02"
      },
      {
        "departure": "11:12",
        "arrival": "12:13"
      },
      {
        "departure": "12:16",
        "arrival": "13:24"
      },
      {
        "departure": "13:20",
        "arrival": "14:00"
      },
      {
        "departure": "14:24",
        "arrival": "15:11"
      },
      {
        "departure": "15:28",
        "arrival": "16:22"
      }
    ],
    "fare": 26,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#00f5c4",
    "currentLocation": {
      "lat": 19.0808,
      "lng": 72.9097
    },
    "routePath": [
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9763,
        "lng": 72.8335
      },
      {
        "lat": 19.0195,
        "lng": 72.8491
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      }
    ]
  },
  {
    "id": "BC42_101",
    "number": "C-42",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Dadar Station",
      "to": "Borivali Station",
      "stops": [
        "Dadar Station",
        "Bandra Station",
        "Andheri Station",
        "Borivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:15",
        "arrival": "07:02"
      },
      {
        "departure": "07:30",
        "arrival": "08:24"
      },
      {
        "departure": "08:45",
        "arrival": "09:46"
      },
      {
        "departure": "10:00",
        "arrival": "11:08"
      },
      {
        "departure": "11:15",
        "arrival": "11:55"
      },
      {
        "departure": "12:30",
        "arrival": "13:17"
      },
      {
        "departure": "13:45",
        "arrival": "14:39"
      }
    ],
    "fare": 35,
    "totalSeats": 46,
    "busType": "AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#ffd166",
    "currentLocation": {
      "lat": 19.0166,
      "lng": 72.8418
    },
    "routePath": [
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      }
    ]
  },
  {
    "id": "BC51_102",
    "number": "C-51",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Colaba",
      "to": "Thane Station",
      "stops": [
        "Colaba",
        "CST / VT",
        "Dadar Station",
        "Sion Station",
        "Chembur",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:26",
        "arrival": "08:13"
      },
      {
        "departure": "08:52",
        "arrival": "09:46"
      },
      {
        "departure": "10:18",
        "arrival": "11:19"
      },
      {
        "departure": "11:44",
        "arrival": "12:52"
      },
      {
        "departure": "13:10",
        "arrival": "13:50"
      },
      {
        "departure": "14:36",
        "arrival": "15:23"
      },
      {
        "departure": "16:02",
        "arrival": "16:56"
      }
    ],
    "fare": 42,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#a855f7",
    "currentLocation": {
      "lat": 19.1833,
      "lng": 72.9655
    },
    "routePath": [
      {
        "lat": 18.9067,
        "lng": 72.8147
      },
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "BC71_103",
    "number": "C-71",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Bandra Station",
      "to": "Vashi",
      "stops": [
        "Bandra Station",
        "BKC (Bandra Kurla Complex)",
        "Chembur",
        "Vashi"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "07:57",
        "arrival": "08:44"
      },
      {
        "departure": "08:54",
        "arrival": "09:48"
      },
      {
        "departure": "09:51",
        "arrival": "10:52"
      },
      {
        "departure": "10:48",
        "arrival": "11:56"
      },
      {
        "departure": "11:45",
        "arrival": "12:25"
      },
      {
        "departure": "12:42",
        "arrival": "13:29"
      },
      {
        "departure": "13:39",
        "arrival": "14:33"
      }
    ],
    "fare": 32,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#ff9a3c",
    "currentLocation": {
      "lat": 19.0639,
      "lng": 72.9009
    },
    "routePath": [
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      }
    ]
  },
  {
    "id": "BC72_104",
    "number": "C-72",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Nariman Point",
      "to": "Airport Terminal 2",
      "stops": [
        "Nariman Point",
        "Worli Sea Face",
        "Bandra Station",
        "BKC (Bandra Kurla Complex)",
        "Airport Terminal 2"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:08",
        "arrival": "09:55"
      },
      {
        "departure": "10:16",
        "arrival": "11:10"
      },
      {
        "departure": "11:24",
        "arrival": "12:25"
      },
      {
        "departure": "12:32",
        "arrival": "13:40"
      },
      {
        "departure": "13:40",
        "arrival": "14:20"
      },
      {
        "departure": "14:48",
        "arrival": "15:35"
      },
      {
        "departure": "15:56",
        "arrival": "16:50"
      }
    ],
    "fare": 36,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#ff5571",
    "currentLocation": {
      "lat": 19.0686,
      "lng": 72.8699
    },
    "routePath": [
      {
        "lat": 18.9258,
        "lng": 72.8218
      },
      {
        "lat": 19.0157,
        "lng": 72.8177
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      }
    ]
  },
  {
    "id": "BC86_105",
    "number": "C-86",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Colaba",
      "to": "Dadar Station",
      "stops": [
        "Colaba",
        "Churchgate",
        "Mumbai Central",
        "Lower Parel",
        "Dadar Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:19",
        "arrival": "07:06"
      },
      {
        "departure": "07:38",
        "arrival": "08:32"
      },
      {
        "departure": "08:57",
        "arrival": "09:58"
      },
      {
        "departure": "10:16",
        "arrival": "11:24"
      },
      {
        "departure": "11:35",
        "arrival": "12:15"
      },
      {
        "departure": "12:54",
        "arrival": "13:41"
      },
      {
        "departure": "14:13",
        "arrival": "15:07"
      }
    ],
    "fare": 24,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#38bdf8",
    "currentLocation": {
      "lat": 19.0214,
      "lng": 72.8466
    },
    "routePath": [
      {
        "lat": 18.9067,
        "lng": 72.8147
      },
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9696,
        "lng": 72.8194
      },
      {
        "lat": 18.9953,
        "lng": 72.8306
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      }
    ]
  },
  {
    "id": "B101_106",
    "number": "101",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Colaba",
      "to": "Nariman Point",
      "stops": [
        "Colaba",
        "Churchgate",
        "Nariman Point"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:30",
        "arrival": "08:17"
      },
      {
        "departure": "09:00",
        "arrival": "09:54"
      },
      {
        "departure": "10:30",
        "arrival": "11:31"
      },
      {
        "departure": "12:00",
        "arrival": "13:08"
      },
      {
        "departure": "13:30",
        "arrival": "14:10"
      },
      {
        "departure": "15:00",
        "arrival": "15:47"
      },
      {
        "departure": "16:30",
        "arrival": "17:24"
      }
    ],
    "fare": 6,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#34d399",
    "currentLocation": {
      "lat": 18.9031,
      "lng": 72.8123
    },
    "routePath": [
      {
        "lat": 18.9067,
        "lng": 72.8147
      },
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9258,
        "lng": 72.8218
      }
    ]
  },
  {
    "id": "B102_107",
    "number": "102",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "CST / VT",
      "to": "Churchgate",
      "stops": [
        "CST / VT",
        "Marine Lines",
        "Churchgate"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:01",
        "arrival": "08:48"
      },
      {
        "departure": "09:02",
        "arrival": "09:56"
      },
      {
        "departure": "10:03",
        "arrival": "11:04"
      },
      {
        "departure": "11:04",
        "arrival": "12:12"
      },
      {
        "departure": "12:05",
        "arrival": "12:45"
      },
      {
        "departure": "13:06",
        "arrival": "13:53"
      },
      {
        "departure": "14:07",
        "arrival": "15:01"
      }
    ],
    "fare": 6,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#f43f5e",
    "currentLocation": {
      "lat": 18.9409,
      "lng": 72.8224
    },
    "routePath": [
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9433,
        "lng": 72.8236
      },
      {
        "lat": 18.935,
        "lng": 72.8259
      }
    ]
  },
  {
    "id": "B104_108",
    "number": "104",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Mumbai Central",
      "to": "Lower Parel",
      "stops": [
        "Mumbai Central",
        "Mahalaxmi",
        "Lower Parel"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:12",
        "arrival": "09:59"
      },
      {
        "departure": "10:24",
        "arrival": "11:18"
      },
      {
        "departure": "11:36",
        "arrival": "12:37"
      },
      {
        "departure": "12:48",
        "arrival": "13:56"
      },
      {
        "departure": "14:00",
        "arrival": "14:40"
      },
      {
        "departure": "15:12",
        "arrival": "15:59"
      },
      {
        "departure": "16:24",
        "arrival": "17:18"
      }
    ],
    "fare": 8,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#818cf8",
    "currentLocation": {
      "lat": 18.9941,
      "lng": 72.8306
    },
    "routePath": [
      {
        "lat": 18.9696,
        "lng": 72.8194
      },
      {
        "lat": 18.9827,
        "lng": 72.8234
      },
      {
        "lat": 18.9953,
        "lng": 72.8306
      }
    ]
  },
  {
    "id": "B108_109",
    "number": "108",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "CST / VT",
      "to": "Mumbai Central",
      "stops": [
        "CST / VT",
        "Marine Lines",
        "Grant Road",
        "Mumbai Central"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:23",
        "arrival": "07:10"
      },
      {
        "departure": "07:46",
        "arrival": "08:40"
      },
      {
        "departure": "09:09",
        "arrival": "10:10"
      },
      {
        "departure": "10:32",
        "arrival": "11:40"
      },
      {
        "departure": "11:55",
        "arrival": "12:35"
      },
      {
        "departure": "13:18",
        "arrival": "14:05"
      },
      {
        "departure": "14:41",
        "arrival": "15:35"
      }
    ],
    "fare": 12,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#10b981",
    "currentLocation": {
      "lat": 18.9399,
      "lng": 72.8367
    },
    "routePath": [
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9433,
        "lng": 72.8236
      },
      {
        "lat": 18.9632,
        "lng": 72.816
      },
      {
        "lat": 18.9696,
        "lng": 72.8194
      }
    ]
  },
  {
    "id": "B121_110",
    "number": "121",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Churchgate",
      "to": "Haji Ali",
      "stops": [
        "Churchgate",
        "Charni Road",
        "Grant Road",
        "Haji Ali"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:34",
        "arrival": "08:21"
      },
      {
        "departure": "09:08",
        "arrival": "10:02"
      },
      {
        "departure": "10:42",
        "arrival": "11:43"
      },
      {
        "departure": "12:16",
        "arrival": "13:24"
      },
      {
        "departure": "13:50",
        "arrival": "14:30"
      },
      {
        "departure": "15:24",
        "arrival": "16:11"
      },
      {
        "departure": "16:58",
        "arrival": "17:52"
      }
    ],
    "fare": 14,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#6366f1",
    "currentLocation": {
      "lat": 18.9527,
      "lng": 72.8212
    },
    "routePath": [
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9515,
        "lng": 72.8188
      },
      {
        "lat": 18.9632,
        "lng": 72.816
      },
      {
        "lat": 18.9774,
        "lng": 72.8115
      }
    ]
  },
  {
    "id": "B123_111",
    "number": "123",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Colaba",
      "to": "Charni Road",
      "stops": [
        "Colaba",
        "Nariman Point",
        "Marine Lines",
        "Charni Road"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:05",
        "arrival": "08:52"
      },
      {
        "departure": "09:10",
        "arrival": "10:04"
      },
      {
        "departure": "10:15",
        "arrival": "11:16"
      },
      {
        "departure": "11:20",
        "arrival": "12:28"
      },
      {
        "departure": "12:25",
        "arrival": "13:05"
      },
      {
        "departure": "13:30",
        "arrival": "14:17"
      },
      {
        "departure": "14:35",
        "arrival": "15:29"
      }
    ],
    "fare": 10,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ec4899",
    "currentLocation": {
      "lat": 18.9457,
      "lng": 72.8212
    },
    "routePath": [
      {
        "lat": 18.9067,
        "lng": 72.8147
      },
      {
        "lat": 18.9258,
        "lng": 72.8218
      },
      {
        "lat": 18.9433,
        "lng": 72.8236
      },
      {
        "lat": 18.9515,
        "lng": 72.8188
      }
    ]
  },
  {
    "id": "B125_112",
    "number": "125",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "CST / VT",
      "to": "Lower Parel",
      "stops": [
        "CST / VT",
        "Byculla",
        "Parel",
        "Lower Parel"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:16",
        "arrival": "10:03"
      },
      {
        "departure": "10:32",
        "arrival": "11:26"
      },
      {
        "departure": "11:48",
        "arrival": "12:49"
      },
      {
        "departure": "13:04",
        "arrival": "14:12"
      },
      {
        "departure": "14:20",
        "arrival": "15:00"
      },
      {
        "departure": "15:36",
        "arrival": "16:23"
      },
      {
        "departure": "16:52",
        "arrival": "17:46"
      }
    ],
    "fare": 12,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#14b8a6",
    "currentLocation": {
      "lat": 18.9989,
      "lng": 72.8294
    },
    "routePath": [
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9763,
        "lng": 72.8335
      },
      {
        "lat": 18.9989,
        "lng": 72.8396
      },
      {
        "lat": 18.9953,
        "lng": 72.8306
      }
    ]
  },
  {
    "id": "B134_113",
    "number": "134",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Mumbai Central",
      "to": "Prabhadevi",
      "stops": [
        "Mumbai Central",
        "Haji Ali",
        "Worli Sea Face",
        "Prabhadevi"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:27",
        "arrival": "07:14"
      },
      {
        "departure": "07:54",
        "arrival": "08:48"
      },
      {
        "departure": "09:21",
        "arrival": "10:22"
      },
      {
        "departure": "10:48",
        "arrival": "11:56"
      },
      {
        "departure": "12:15",
        "arrival": "12:55"
      },
      {
        "departure": "13:42",
        "arrival": "14:29"
      },
      {
        "departure": "15:09",
        "arrival": "16:03"
      }
    ],
    "fare": 16,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#00c9ff",
    "currentLocation": {
      "lat": 18.966,
      "lng": 72.8194
    },
    "routePath": [
      {
        "lat": 18.9696,
        "lng": 72.8194
      },
      {
        "lat": 18.9774,
        "lng": 72.8115
      },
      {
        "lat": 19.0157,
        "lng": 72.8177
      },
      {
        "lat": 19.0166,
        "lng": 72.8295
      }
    ]
  },
  {
    "id": "B166_114",
    "number": "166",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Byculla",
      "to": "Wadala",
      "stops": [
        "Byculla",
        "Parel",
        "Dadar TT",
        "Wadala"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "06:58",
        "arrival": "07:45"
      },
      {
        "departure": "07:56",
        "arrival": "08:50"
      },
      {
        "departure": "08:54",
        "arrival": "09:55"
      },
      {
        "departure": "09:52",
        "arrival": "11:00"
      },
      {
        "departure": "10:50",
        "arrival": "11:30"
      },
      {
        "departure": "11:48",
        "arrival": "12:35"
      },
      {
        "departure": "12:46",
        "arrival": "13:40"
      }
    ],
    "fare": 12,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#22d3a0",
    "currentLocation": {
      "lat": 18.9965,
      "lng": 72.8408
    },
    "routePath": [
      {
        "lat": 18.9763,
        "lng": 72.8335
      },
      {
        "lat": 18.9989,
        "lng": 72.8396
      },
      {
        "lat": 19.0195,
        "lng": 72.8491
      },
      {
        "lat": 19.0215,
        "lng": 72.8601
      }
    ]
  },
  {
    "id": "B172_115",
    "number": "172",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Mumbai Central",
      "to": "Dadar Station",
      "stops": [
        "Mumbai Central",
        "Lower Parel",
        "Prabhadevi",
        "Dadar Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:09",
        "arrival": "08:56"
      },
      {
        "departure": "09:18",
        "arrival": "10:12"
      },
      {
        "departure": "10:27",
        "arrival": "11:28"
      },
      {
        "departure": "11:36",
        "arrival": "12:44"
      },
      {
        "departure": "12:45",
        "arrival": "13:25"
      },
      {
        "departure": "13:54",
        "arrival": "14:41"
      },
      {
        "departure": "15:03",
        "arrival": "15:57"
      }
    ],
    "fare": 14,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#4f8cff",
    "currentLocation": {
      "lat": 19.0154,
      "lng": 72.8319
    },
    "routePath": [
      {
        "lat": 18.9696,
        "lng": 72.8194
      },
      {
        "lat": 18.9953,
        "lng": 72.8306
      },
      {
        "lat": 19.0166,
        "lng": 72.8295
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      }
    ]
  },
  {
    "id": "B201_116",
    "number": "201",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Bandra Station",
      "to": "Juhu Beach",
      "stops": [
        "Bandra Station",
        "Khar",
        "Santacruz Station",
        "Juhu Beach"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:20",
        "arrival": "10:07"
      },
      {
        "departure": "10:40",
        "arrival": "11:34"
      },
      {
        "departure": "12:00",
        "arrival": "13:01"
      },
      {
        "departure": "13:20",
        "arrival": "14:28"
      },
      {
        "departure": "14:40",
        "arrival": "15:20"
      },
      {
        "departure": "16:00",
        "arrival": "16:47"
      },
      {
        "departure": "17:20",
        "arrival": "18:14"
      }
    ],
    "fare": 14,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#00f5c4",
    "currentLocation": {
      "lat": 19.0987,
      "lng": 72.8239
    },
    "routePath": [
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0699,
        "lng": 72.8385
      },
      {
        "lat": 19.0819,
        "lng": 72.8441
      },
      {
        "lat": 19.0987,
        "lng": 72.8263
      }
    ]
  },
  {
    "id": "B220_117",
    "number": "220",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "Lokhandwala",
      "stops": [
        "Andheri Station",
        "Versova",
        "Lokhandwala"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:31",
        "arrival": "07:18"
      },
      {
        "departure": "08:02",
        "arrival": "08:56"
      },
      {
        "departure": "09:33",
        "arrival": "10:34"
      },
      {
        "departure": "11:04",
        "arrival": "12:12"
      },
      {
        "departure": "12:35",
        "arrival": "13:15"
      },
      {
        "departure": "14:06",
        "arrival": "14:53"
      },
      {
        "departure": "15:37",
        "arrival": "16:31"
      }
    ],
    "fare": 10,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#ffd166",
    "currentLocation": {
      "lat": 19.1427,
      "lng": 72.8246
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.1225,
        "lng": 72.8111
      },
      {
        "lat": 19.1415,
        "lng": 72.8258
      }
    ]
  },
  {
    "id": "B244_118",
    "number": "244",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Goregaon Station",
      "to": "Powai Lake",
      "stops": [
        "Goregaon Station",
        "Aarey Milk Colony",
        "Powai Lake"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:02",
        "arrival": "07:49"
      },
      {
        "departure": "08:04",
        "arrival": "08:58"
      },
      {
        "departure": "09:06",
        "arrival": "10:07"
      },
      {
        "departure": "10:08",
        "arrival": "11:16"
      },
      {
        "departure": "11:10",
        "arrival": "11:50"
      },
      {
        "departure": "12:12",
        "arrival": "12:59"
      },
      {
        "departure": "13:14",
        "arrival": "14:08"
      }
    ],
    "fare": 16,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#a855f7",
    "currentLocation": {
      "lat": 19.1687,
      "lng": 72.8493
    },
    "routePath": [
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.1538,
        "lng": 72.8753
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      }
    ]
  },
  {
    "id": "B266_119",
    "number": "266",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Malad Station",
      "to": "Kandivali Station",
      "stops": [
        "Malad Station",
        "Mindspace Malad",
        "Kandivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:13",
        "arrival": "09:00"
      },
      {
        "departure": "09:26",
        "arrival": "10:20"
      },
      {
        "departure": "10:39",
        "arrival": "11:40"
      },
      {
        "departure": "11:52",
        "arrival": "13:00"
      },
      {
        "departure": "13:05",
        "arrival": "13:45"
      },
      {
        "departure": "14:18",
        "arrival": "15:05"
      },
      {
        "departure": "15:31",
        "arrival": "16:25"
      }
    ],
    "fare": 10,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#ff9a3c",
    "currentLocation": {
      "lat": 19.1819,
      "lng": 72.8352
    },
    "routePath": [
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1783,
        "lng": 72.834
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      }
    ]
  },
  {
    "id": "B284_120",
    "number": "284",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Gorai Creek",
      "stops": [
        "Borivali Station",
        "Gorai Creek"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:24",
        "arrival": "10:11"
      },
      {
        "departure": "10:48",
        "arrival": "11:42"
      },
      {
        "departure": "12:12",
        "arrival": "13:13"
      },
      {
        "departure": "13:36",
        "arrival": "14:44"
      },
      {
        "departure": "15:00",
        "arrival": "15:40"
      },
      {
        "departure": "16:24",
        "arrival": "17:11"
      },
      {
        "departure": "17:48",
        "arrival": "18:42"
      }
    ],
    "fare": 8,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#ff5571",
    "currentLocation": {
      "lat": 19.2325,
      "lng": 72.8334
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2361,
        "lng": 72.831
      }
    ]
  },
  {
    "id": "B298_121",
    "number": "298",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Mira Road",
      "stops": [
        "Borivali Station",
        "Dahisar",
        "Mira Road"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "05:55",
        "arrival": "06:42"
      },
      {
        "departure": "06:50",
        "arrival": "07:44"
      },
      {
        "departure": "07:45",
        "arrival": "08:46"
      },
      {
        "departure": "08:40",
        "arrival": "09:48"
      },
      {
        "departure": "09:35",
        "arrival": "10:15"
      },
      {
        "departure": "10:30",
        "arrival": "11:17"
      },
      {
        "departure": "11:25",
        "arrival": "12:19"
      }
    ],
    "fare": 12,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#38bdf8",
    "currentLocation": {
      "lat": 19.2283,
      "lng": 72.8543
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.257,
        "lng": 72.859
      },
      {
        "lat": 19.2812,
        "lng": 72.856
      }
    ]
  },
  {
    "id": "B313_122",
    "number": "313",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Santacruz Station",
      "to": "Kurla Station",
      "stops": [
        "Santacruz Station",
        "Airport Terminal 1",
        "Kurla Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:06",
        "arrival": "07:53"
      },
      {
        "departure": "08:12",
        "arrival": "09:06"
      },
      {
        "departure": "09:18",
        "arrival": "10:19"
      },
      {
        "departure": "10:24",
        "arrival": "11:32"
      },
      {
        "departure": "11:30",
        "arrival": "12:10"
      },
      {
        "departure": "12:36",
        "arrival": "13:23"
      },
      {
        "departure": "13:42",
        "arrival": "14:36"
      }
    ],
    "fare": 16,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#34d399",
    "currentLocation": {
      "lat": 19.0874,
      "lng": 72.8523
    },
    "routePath": [
      {
        "lat": 19.0819,
        "lng": 72.8441
      },
      {
        "lat": 19.0886,
        "lng": 72.8535
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      }
    ]
  },
  {
    "id": "B325_123",
    "number": "325",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Kurla Station",
      "to": "Ghatkopar Station",
      "stops": [
        "Kurla Station",
        "Vidyavihar",
        "Ghatkopar Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:17",
        "arrival": "09:04"
      },
      {
        "departure": "09:34",
        "arrival": "10:28"
      },
      {
        "departure": "10:51",
        "arrival": "11:52"
      },
      {
        "departure": "12:08",
        "arrival": "13:16"
      },
      {
        "departure": "13:25",
        "arrival": "14:05"
      },
      {
        "departure": "14:42",
        "arrival": "15:29"
      },
      {
        "departure": "15:59",
        "arrival": "16:53"
      }
    ],
    "fare": 10,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#f43f5e",
    "currentLocation": {
      "lat": 19.0832,
      "lng": 72.9073
    },
    "routePath": [
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.08,
        "lng": 72.8965
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      }
    ]
  },
  {
    "id": "B335_124",
    "number": "335",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "Sakinaka",
      "stops": [
        "Andheri Station",
        "MIDC Andheri",
        "Sakinaka"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:28",
        "arrival": "10:15"
      },
      {
        "departure": "10:56",
        "arrival": "11:50"
      },
      {
        "departure": "12:24",
        "arrival": "13:25"
      },
      {
        "departure": "13:52",
        "arrival": "15:00"
      },
      {
        "departure": "15:20",
        "arrival": "16:00"
      },
      {
        "departure": "16:48",
        "arrival": "17:35"
      },
      {
        "departure": "18:16",
        "arrival": "19:10"
      }
    ],
    "fare": 8,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#818cf8",
    "currentLocation": {
      "lat": 19.1209,
      "lng": 72.8478
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.1235,
        "lng": 72.8621
      },
      {
        "lat": 19.1025,
        "lng": 72.8875
      }
    ]
  },
  {
    "id": "B356_125",
    "number": "356",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Ghatkopar Station",
      "to": "Kanjurmarg",
      "stops": [
        "Ghatkopar Station",
        "Vikhroli",
        "Kanjurmarg"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "05:59",
        "arrival": "06:46"
      },
      {
        "departure": "06:58",
        "arrival": "07:52"
      },
      {
        "departure": "07:57",
        "arrival": "08:58"
      },
      {
        "departure": "08:56",
        "arrival": "10:04"
      },
      {
        "departure": "09:55",
        "arrival": "10:35"
      },
      {
        "departure": "10:54",
        "arrival": "11:41"
      },
      {
        "departure": "11:53",
        "arrival": "12:47"
      }
    ],
    "fare": 12,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#10b981",
    "currentLocation": {
      "lat": 19.1083,
      "lng": 72.9286
    },
    "routePath": [
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.1305,
        "lng": 72.934
      }
    ]
  },
  {
    "id": "B388_126",
    "number": "388",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Ghatkopar Station",
      "to": "Kanjurmarg",
      "stops": [
        "Ghatkopar Station",
        "Powai Lake",
        "Hiranandani Powai",
        "Kanjurmarg"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:10",
        "arrival": "07:57"
      },
      {
        "departure": "08:20",
        "arrival": "09:14"
      },
      {
        "departure": "09:30",
        "arrival": "10:31"
      },
      {
        "departure": "10:40",
        "arrival": "11:48"
      },
      {
        "departure": "11:50",
        "arrival": "12:30"
      },
      {
        "departure": "13:00",
        "arrival": "13:47"
      },
      {
        "departure": "14:10",
        "arrival": "15:04"
      }
    ],
    "fare": 16,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#6366f1",
    "currentLocation": {
      "lat": 19.1233,
      "lng": 72.9033
    },
    "routePath": [
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.118,
        "lng": 72.915
      },
      {
        "lat": 19.1305,
        "lng": 72.934
      }
    ]
  },
  {
    "id": "B408_127",
    "number": "408",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "Powai Lake",
      "stops": [
        "Andheri Station",
        "Airport Terminal 2",
        "Chandivali",
        "Powai Lake"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:21",
        "arrival": "09:08"
      },
      {
        "departure": "09:42",
        "arrival": "10:36"
      },
      {
        "departure": "11:03",
        "arrival": "12:04"
      },
      {
        "departure": "12:24",
        "arrival": "13:32"
      },
      {
        "departure": "13:45",
        "arrival": "14:25"
      },
      {
        "departure": "15:06",
        "arrival": "15:53"
      },
      {
        "departure": "16:27",
        "arrival": "17:21"
      }
    ],
    "fare": 18,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ec4899",
    "currentLocation": {
      "lat": 19.1094,
      "lng": 72.8928
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      },
      {
        "lat": 19.113,
        "lng": 72.894
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      }
    ]
  },
  {
    "id": "B425_128",
    "number": "425",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Bandra Station",
      "to": "Powai Lake",
      "stops": [
        "Bandra Station",
        "BKC (Bandra Kurla Complex)",
        "Sakinaka",
        "Powai Lake"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:32",
        "arrival": "10:19"
      },
      {
        "departure": "11:04",
        "arrival": "11:58"
      },
      {
        "departure": "12:36",
        "arrival": "13:37"
      },
      {
        "departure": "14:08",
        "arrival": "15:16"
      },
      {
        "departure": "15:40",
        "arrival": "16:20"
      },
      {
        "departure": "17:12",
        "arrival": "17:59"
      },
      {
        "departure": "18:44",
        "arrival": "19:38"
      }
    ],
    "fare": 26,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#14b8a6",
    "currentLocation": {
      "lat": 19.1173,
      "lng": 72.9057
    },
    "routePath": [
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.1025,
        "lng": 72.8875
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      }
    ]
  },
  {
    "id": "B434_129",
    "number": "434",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Goregaon Station",
      "to": "Mindspace Malad",
      "stops": [
        "Goregaon Station",
        "Malad Station",
        "Mindspace Malad"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:03",
        "arrival": "06:50"
      },
      {
        "departure": "07:06",
        "arrival": "08:00"
      },
      {
        "departure": "08:09",
        "arrival": "09:10"
      },
      {
        "departure": "09:12",
        "arrival": "10:20"
      },
      {
        "departure": "10:15",
        "arrival": "10:55"
      },
      {
        "departure": "11:18",
        "arrival": "12:05"
      },
      {
        "departure": "12:21",
        "arrival": "13:15"
      }
    ],
    "fare": 8,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#00c9ff",
    "currentLocation": {
      "lat": 19.1771,
      "lng": 72.8352
    },
    "routePath": [
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1783,
        "lng": 72.834
      }
    ]
  },
  {
    "id": "B464_130",
    "number": "464",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "SEEPZ Andheri",
      "stops": [
        "Borivali Station",
        "Kandivali Station",
        "Malad Station",
        "SEEPZ Andheri"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:14",
        "arrival": "08:01"
      },
      {
        "departure": "08:28",
        "arrival": "09:22"
      },
      {
        "departure": "09:42",
        "arrival": "10:43"
      },
      {
        "departure": "10:56",
        "arrival": "12:04"
      },
      {
        "departure": "12:10",
        "arrival": "12:50"
      },
      {
        "departure": "13:24",
        "arrival": "14:11"
      },
      {
        "departure": "14:38",
        "arrival": "15:32"
      }
    ],
    "fare": 22,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#22d3a0",
    "currentLocation": {
      "lat": 19.2046,
      "lng": 72.8492
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.119,
        "lng": 72.874
      }
    ]
  },
  {
    "id": "B512_131",
    "number": "512",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Thane Station",
      "to": "Vikhroli",
      "stops": [
        "Thane Station",
        "Mulund Station",
        "Nahur",
        "Bhandup",
        "Kanjurmarg",
        "Vikhroli"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:25",
        "arrival": "09:12"
      },
      {
        "departure": "09:50",
        "arrival": "10:44"
      },
      {
        "departure": "11:15",
        "arrival": "12:16"
      },
      {
        "departure": "12:40",
        "arrival": "13:48"
      },
      {
        "departure": "14:05",
        "arrival": "14:45"
      },
      {
        "departure": "15:30",
        "arrival": "16:17"
      },
      {
        "departure": "16:55",
        "arrival": "17:49"
      }
    ],
    "fare": 20,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#4f8cff",
    "currentLocation": {
      "lat": 19.1317,
      "lng": 72.9316
    },
    "routePath": [
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.158,
        "lng": 72.946
      },
      {
        "lat": 19.144,
        "lng": 72.9375
      },
      {
        "lat": 19.1305,
        "lng": 72.934
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      }
    ]
  },
  {
    "id": "B523_132",
    "number": "523",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Thane Station",
      "to": "Nerul",
      "stops": [
        "Thane Station",
        "Vashi",
        "Nerul"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "08:56",
        "arrival": "09:43"
      },
      {
        "departure": "09:52",
        "arrival": "10:46"
      },
      {
        "departure": "10:48",
        "arrival": "11:49"
      },
      {
        "departure": "11:44",
        "arrival": "12:52"
      },
      {
        "departure": "12:40",
        "arrival": "13:20"
      },
      {
        "departure": "13:36",
        "arrival": "14:23"
      },
      {
        "departure": "14:32",
        "arrival": "15:26"
      }
    ],
    "fare": 28,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#00f5c4",
    "currentLocation": {
      "lat": 19.0354,
      "lng": 73.0285
    },
    "routePath": [
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.033,
        "lng": 73.0297
      }
    ]
  },
  {
    "id": "B531_133",
    "number": "531",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Dombivli",
      "to": "Thane Station",
      "stops": [
        "Dombivli",
        "Kalwa",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:07",
        "arrival": "06:54"
      },
      {
        "departure": "07:14",
        "arrival": "08:08"
      },
      {
        "departure": "08:21",
        "arrival": "09:22"
      },
      {
        "departure": "09:28",
        "arrival": "10:36"
      },
      {
        "departure": "10:35",
        "arrival": "11:15"
      },
      {
        "departure": "11:42",
        "arrival": "12:29"
      },
      {
        "departure": "12:49",
        "arrival": "13:43"
      }
    ],
    "fare": 18,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ffd166",
    "currentLocation": {
      "lat": 19.222,
      "lng": 73.0867
    },
    "routePath": [
      {
        "lat": 19.2184,
        "lng": 73.0867
      },
      {
        "lat": 19.198,
        "lng": 72.998
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B540_134",
    "number": "540",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Kalyan",
      "to": "Thane Station",
      "stops": [
        "Kalyan",
        "Dombivli",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:18",
        "arrival": "08:05"
      },
      {
        "departure": "08:36",
        "arrival": "09:30"
      },
      {
        "departure": "09:54",
        "arrival": "10:55"
      },
      {
        "departure": "11:12",
        "arrival": "12:20"
      },
      {
        "departure": "12:30",
        "arrival": "13:10"
      },
      {
        "departure": "13:48",
        "arrival": "14:35"
      },
      {
        "departure": "15:06",
        "arrival": "16:00"
      }
    ],
    "fare": 30,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#a855f7",
    "currentLocation": {
      "lat": 19.2148,
      "lng": 73.0879
    },
    "routePath": [
      {
        "lat": 19.2394,
        "lng": 73.1267
      },
      {
        "lat": 19.2184,
        "lng": 73.0867
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B421D_135",
    "number": "421-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "Borivali Station",
      "stops": [
        "Andheri Station",
        "Goregaon Station",
        "Malad Station",
        "Kandivali Station",
        "Borivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:29",
        "arrival": "09:16"
      },
      {
        "departure": "09:58",
        "arrival": "10:52"
      },
      {
        "departure": "11:27",
        "arrival": "12:28"
      },
      {
        "departure": "12:56",
        "arrival": "14:04"
      },
      {
        "departure": "14:25",
        "arrival": "15:05"
      },
      {
        "departure": "15:54",
        "arrival": "16:41"
      },
      {
        "departure": "17:23",
        "arrival": "18:17"
      }
    ],
    "fare": 20,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ff9a3c",
    "currentLocation": {
      "lat": 19.2283,
      "lng": 72.8591
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      }
    ]
  },
  {
    "id": "B202D_136",
    "number": "202-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Goregaon Station",
      "to": "Gorai Creek",
      "stops": [
        "Goregaon Station",
        "Malad Station",
        "Kandivali Station",
        "Borivali Station",
        "Gorai Creek"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:00",
        "arrival": "09:47"
      },
      {
        "departure": "10:00",
        "arrival": "10:54"
      },
      {
        "departure": "11:00",
        "arrival": "12:01"
      },
      {
        "departure": "12:00",
        "arrival": "13:08"
      },
      {
        "departure": "13:00",
        "arrival": "13:40"
      },
      {
        "departure": "14:00",
        "arrival": "14:47"
      },
      {
        "departure": "15:00",
        "arrival": "15:54"
      }
    ],
    "fare": 18,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ff5571",
    "currentLocation": {
      "lat": 19.1651,
      "lng": 72.8469
    },
    "routePath": [
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2361,
        "lng": 72.831
      }
    ]
  },
  {
    "id": "B204D_137",
    "number": "204-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Kandivali Station",
      "to": "Mira Road",
      "stops": [
        "Kandivali Station",
        "Borivali Station",
        "Dahisar",
        "Mira Road"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:11",
        "arrival": "06:58"
      },
      {
        "departure": "07:22",
        "arrival": "08:16"
      },
      {
        "departure": "08:33",
        "arrival": "09:34"
      },
      {
        "departure": "09:44",
        "arrival": "10:52"
      },
      {
        "departure": "10:55",
        "arrival": "11:35"
      },
      {
        "departure": "12:06",
        "arrival": "12:53"
      },
      {
        "departure": "13:17",
        "arrival": "14:11"
      }
    ],
    "fare": 15,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#38bdf8",
    "currentLocation": {
      "lat": 19.2046,
      "lng": 72.8456
    },
    "routePath": [
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.257,
        "lng": 72.859
      },
      {
        "lat": 19.2812,
        "lng": 72.856
      }
    ]
  },
  {
    "id": "B207D_138",
    "number": "207-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Versova",
      "to": "Borivali Station",
      "stops": [
        "Versova",
        "Malad Station",
        "Kandivali Station",
        "Borivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:22",
        "arrival": "08:09"
      },
      {
        "departure": "08:44",
        "arrival": "09:38"
      },
      {
        "departure": "10:06",
        "arrival": "11:07"
      },
      {
        "departure": "11:28",
        "arrival": "12:36"
      },
      {
        "departure": "12:50",
        "arrival": "13:30"
      },
      {
        "departure": "14:12",
        "arrival": "14:59"
      },
      {
        "departure": "15:34",
        "arrival": "16:28"
      }
    ],
    "fare": 22,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#34d399",
    "currentLocation": {
      "lat": 19.1877,
      "lng": 72.8486
    },
    "routePath": [
      {
        "lat": 19.1225,
        "lng": 72.8111
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      }
    ]
  },
  {
    "id": "B224D_139",
    "number": "224-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Bandra Station",
      "to": "Borivali Station",
      "stops": [
        "Bandra Station",
        "Vile Parle Station",
        "Andheri Station",
        "Malad Station",
        "Borivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:33",
        "arrival": "09:20"
      },
      {
        "departure": "10:06",
        "arrival": "11:00"
      },
      {
        "departure": "11:39",
        "arrival": "12:40"
      },
      {
        "departure": "13:12",
        "arrival": "14:20"
      },
      {
        "departure": "14:45",
        "arrival": "15:25"
      },
      {
        "departure": "16:18",
        "arrival": "17:05"
      },
      {
        "departure": "17:51",
        "arrival": "18:45"
      }
    ],
    "fare": 30,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#f43f5e",
    "currentLocation": {
      "lat": 19.1889,
      "lng": 72.8498
    },
    "routePath": [
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0984,
        "lng": 72.8458
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      }
    ]
  },
  {
    "id": "B241D_140",
    "number": "241-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Powai Lake",
      "to": "Malad Station",
      "stops": [
        "Powai Lake",
        "Aarey Milk Colony",
        "Goregaon Station",
        "Malad Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:04",
        "arrival": "09:51"
      },
      {
        "departure": "10:08",
        "arrival": "11:02"
      },
      {
        "departure": "11:12",
        "arrival": "12:13"
      },
      {
        "departure": "12:16",
        "arrival": "13:24"
      },
      {
        "departure": "13:20",
        "arrival": "14:00"
      },
      {
        "departure": "14:24",
        "arrival": "15:11"
      },
      {
        "departure": "15:28",
        "arrival": "16:22"
      }
    ],
    "fare": 16,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#818cf8",
    "currentLocation": {
      "lat": 19.1901,
      "lng": 72.851
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.1538,
        "lng": 72.8753
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      }
    ]
  },
  {
    "id": "B271D_141",
    "number": "271-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Santacruz Station",
      "to": "Versova",
      "stops": [
        "Santacruz Station",
        "Airport Terminal 1",
        "Vile Parle Station",
        "Andheri Station",
        "Versova"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:15",
        "arrival": "07:02"
      },
      {
        "departure": "07:30",
        "arrival": "08:24"
      },
      {
        "departure": "08:45",
        "arrival": "09:46"
      },
      {
        "departure": "10:00",
        "arrival": "11:08"
      },
      {
        "departure": "11:15",
        "arrival": "11:55"
      },
      {
        "departure": "12:30",
        "arrival": "13:17"
      },
      {
        "departure": "13:45",
        "arrival": "14:39"
      }
    ],
    "fare": 22,
    "totalSeats": 46,
    "busType": "AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#10b981",
    "currentLocation": {
      "lat": 19.0783,
      "lng": 72.8417
    },
    "routePath": [
      {
        "lat": 19.0819,
        "lng": 72.8441
      },
      {
        "lat": 19.0886,
        "lng": 72.8535
      },
      {
        "lat": 19.0984,
        "lng": 72.8458
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.1225,
        "lng": 72.8111
      }
    ]
  },
  {
    "id": "B290D_142",
    "number": "290-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Malad Station",
      "to": "Borivali Station",
      "stops": [
        "Malad Station",
        "Kandivali Station",
        "Gorai Creek",
        "Borivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:26",
        "arrival": "08:13"
      },
      {
        "departure": "08:52",
        "arrival": "09:46"
      },
      {
        "departure": "10:18",
        "arrival": "11:19"
      },
      {
        "departure": "11:44",
        "arrival": "12:52"
      },
      {
        "departure": "13:10",
        "arrival": "13:50"
      },
      {
        "departure": "14:36",
        "arrival": "15:23"
      },
      {
        "departure": "16:02",
        "arrival": "16:56"
      }
    ],
    "fare": 14,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#6366f1",
    "currentLocation": {
      "lat": 19.2022,
      "lng": 72.8456
    },
    "routePath": [
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.2361,
        "lng": 72.831
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      }
    ]
  },
  {
    "id": "B455D_143",
    "number": "455-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Versova",
      "to": "Kandivali Station",
      "stops": [
        "Versova",
        "Malad Station",
        "Kandivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "07:57",
        "arrival": "08:44"
      },
      {
        "departure": "08:54",
        "arrival": "09:48"
      },
      {
        "departure": "09:51",
        "arrival": "10:52"
      },
      {
        "departure": "10:48",
        "arrival": "11:56"
      },
      {
        "departure": "11:45",
        "arrival": "12:25"
      },
      {
        "departure": "12:42",
        "arrival": "13:29"
      },
      {
        "departure": "13:39",
        "arrival": "14:33"
      }
    ],
    "fare": 15,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ec4899",
    "currentLocation": {
      "lat": 19.1853,
      "lng": 72.8486
    },
    "routePath": [
      {
        "lat": 19.1225,
        "lng": 72.8111
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      }
    ]
  },
  {
    "id": "B460D_144",
    "number": "460-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Mira Road",
      "to": "Gorai Creek",
      "stops": [
        "Mira Road",
        "Dahisar",
        "Borivali Station",
        "Gorai Creek"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:08",
        "arrival": "09:55"
      },
      {
        "departure": "10:16",
        "arrival": "11:10"
      },
      {
        "departure": "11:24",
        "arrival": "12:25"
      },
      {
        "departure": "12:32",
        "arrival": "13:40"
      },
      {
        "departure": "13:40",
        "arrival": "14:20"
      },
      {
        "departure": "14:48",
        "arrival": "15:35"
      },
      {
        "departure": "15:56",
        "arrival": "16:50"
      }
    ],
    "fare": 15,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#14b8a6",
    "currentLocation": {
      "lat": 19.2361,
      "lng": 72.8322
    },
    "routePath": [
      {
        "lat": 19.2812,
        "lng": 72.856
      },
      {
        "lat": 19.257,
        "lng": 72.859
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2361,
        "lng": 72.831
      }
    ]
  },
  {
    "id": "B701D_145",
    "number": "701-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Dadar Station",
      "to": "Bandra Station",
      "stops": [
        "Dadar Station",
        "Matunga",
        "Sion Station",
        "Bandra Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:19",
        "arrival": "07:06"
      },
      {
        "departure": "07:38",
        "arrival": "08:32"
      },
      {
        "departure": "08:57",
        "arrival": "09:58"
      },
      {
        "departure": "10:16",
        "arrival": "11:24"
      },
      {
        "departure": "11:35",
        "arrival": "12:15"
      },
      {
        "departure": "12:54",
        "arrival": "13:41"
      },
      {
        "departure": "14:13",
        "arrival": "15:07"
      }
    ],
    "fare": 15,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#00c9ff",
    "currentLocation": {
      "lat": 19.019,
      "lng": 72.8466
    },
    "routePath": [
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.0316,
        "lng": 72.8596
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      }
    ]
  },
  {
    "id": "B1D_146",
    "number": "1-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "CST / VT",
      "to": "Colaba",
      "stops": [
        "CST / VT",
        "Churchgate",
        "Nariman Point",
        "Colaba"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:30",
        "arrival": "08:17"
      },
      {
        "departure": "09:00",
        "arrival": "09:54"
      },
      {
        "departure": "10:30",
        "arrival": "11:31"
      },
      {
        "departure": "12:00",
        "arrival": "13:08"
      },
      {
        "departure": "13:30",
        "arrival": "14:10"
      },
      {
        "departure": "15:00",
        "arrival": "15:47"
      },
      {
        "departure": "16:30",
        "arrival": "17:24"
      }
    ],
    "fare": 10,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#22d3a0",
    "currentLocation": {
      "lat": 18.9374,
      "lng": 72.8235
    },
    "routePath": [
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9258,
        "lng": 72.8218
      },
      {
        "lat": 18.9067,
        "lng": 72.8147
      }
    ]
  },
  {
    "id": "B3D_147",
    "number": "3-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Mahalaxmi",
      "to": "Nariman Point",
      "stops": [
        "Mahalaxmi",
        "Mumbai Central",
        "Marine Lines",
        "Churchgate",
        "Nariman Point"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:01",
        "arrival": "08:48"
      },
      {
        "departure": "09:02",
        "arrival": "09:56"
      },
      {
        "departure": "10:03",
        "arrival": "11:04"
      },
      {
        "departure": "11:04",
        "arrival": "12:12"
      },
      {
        "departure": "12:05",
        "arrival": "12:45"
      },
      {
        "departure": "13:06",
        "arrival": "13:53"
      },
      {
        "departure": "14:07",
        "arrival": "15:01"
      }
    ],
    "fare": 16,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#4f8cff",
    "currentLocation": {
      "lat": 18.9732,
      "lng": 72.8182
    },
    "routePath": [
      {
        "lat": 18.9827,
        "lng": 72.8234
      },
      {
        "lat": 18.9696,
        "lng": 72.8194
      },
      {
        "lat": 18.9433,
        "lng": 72.8236
      },
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9258,
        "lng": 72.8218
      }
    ]
  },
  {
    "id": "B7D_148",
    "number": "7-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Sion Station",
      "to": "CST / VT",
      "stops": [
        "Sion Station",
        "Dadar TT",
        "Parel",
        "Byculla",
        "CST / VT"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:12",
        "arrival": "09:59"
      },
      {
        "departure": "10:24",
        "arrival": "11:18"
      },
      {
        "departure": "11:36",
        "arrival": "12:37"
      },
      {
        "departure": "12:48",
        "arrival": "13:56"
      },
      {
        "departure": "14:00",
        "arrival": "14:40"
      },
      {
        "departure": "15:12",
        "arrival": "15:59"
      },
      {
        "departure": "16:24",
        "arrival": "17:18"
      }
    ],
    "fare": 18,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#00f5c4",
    "currentLocation": {
      "lat": 18.9953,
      "lng": 72.8396
    },
    "routePath": [
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0195,
        "lng": 72.8491
      },
      {
        "lat": 18.9989,
        "lng": 72.8396
      },
      {
        "lat": 18.9763,
        "lng": 72.8335
      },
      {
        "lat": 18.9399,
        "lng": 72.8355
      }
    ]
  },
  {
    "id": "B22D_149",
    "number": "22-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Bandra Station",
      "to": "Mumbai Central",
      "stops": [
        "Bandra Station",
        "Mahim",
        "Dadar Station",
        "Lower Parel",
        "Mahalaxmi",
        "Mumbai Central"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:23",
        "arrival": "07:10"
      },
      {
        "departure": "07:46",
        "arrival": "08:40"
      },
      {
        "departure": "09:09",
        "arrival": "10:10"
      },
      {
        "departure": "10:32",
        "arrival": "11:40"
      },
      {
        "departure": "11:55",
        "arrival": "12:35"
      },
      {
        "departure": "13:18",
        "arrival": "14:05"
      },
      {
        "departure": "14:41",
        "arrival": "15:35"
      }
    ],
    "fare": 20,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ffd166",
    "currentLocation": {
      "lat": 18.9803,
      "lng": 72.8246
    },
    "routePath": [
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.041,
        "lng": 72.8427
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 18.9953,
        "lng": 72.8306
      },
      {
        "lat": 18.9827,
        "lng": 72.8234
      },
      {
        "lat": 18.9696,
        "lng": 72.8194
      }
    ]
  },
  {
    "id": "B28D_150",
    "number": "28-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Dadar Station",
      "to": "Churchgate",
      "stops": [
        "Dadar Station",
        "Prabhadevi",
        "Lower Parel",
        "Mumbai Central",
        "Charni Road",
        "Churchgate"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:34",
        "arrival": "08:21"
      },
      {
        "departure": "09:08",
        "arrival": "10:02"
      },
      {
        "departure": "10:42",
        "arrival": "11:43"
      },
      {
        "departure": "12:16",
        "arrival": "13:24"
      },
      {
        "departure": "13:50",
        "arrival": "14:30"
      },
      {
        "departure": "15:24",
        "arrival": "16:11"
      },
      {
        "departure": "16:58",
        "arrival": "17:52"
      }
    ],
    "fare": 18,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#a855f7",
    "currentLocation": {
      "lat": 18.9338,
      "lng": 72.8283
    },
    "routePath": [
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.0166,
        "lng": 72.8295
      },
      {
        "lat": 18.9953,
        "lng": 72.8306
      },
      {
        "lat": 18.9696,
        "lng": 72.8194
      },
      {
        "lat": 18.9515,
        "lng": 72.8188
      },
      {
        "lat": 18.935,
        "lng": 72.8259
      }
    ]
  },
  {
    "id": "B40D_151",
    "number": "40-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Dadar Station",
      "to": "Nariman Point",
      "stops": [
        "Dadar Station",
        "Worli Sea Face",
        "Haji Ali",
        "Churchgate",
        "Nariman Point"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:05",
        "arrival": "08:52"
      },
      {
        "departure": "09:10",
        "arrival": "10:04"
      },
      {
        "departure": "10:15",
        "arrival": "11:16"
      },
      {
        "departure": "11:20",
        "arrival": "12:28"
      },
      {
        "departure": "12:25",
        "arrival": "13:05"
      },
      {
        "departure": "13:30",
        "arrival": "14:17"
      },
      {
        "departure": "14:35",
        "arrival": "15:29"
      }
    ],
    "fare": 20,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ff9a3c",
    "currentLocation": {
      "lat": 19.0178,
      "lng": 72.8418
    },
    "routePath": [
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.0157,
        "lng": 72.8177
      },
      {
        "lat": 18.9774,
        "lng": 72.8115
      },
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9258,
        "lng": 72.8218
      }
    ]
  },
  {
    "id": "B66D_152",
    "number": "66-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Kurla Station",
      "to": "Colaba",
      "stops": [
        "Kurla Station",
        "Chunabhatti",
        "Wadala",
        "CST / VT",
        "Colaba"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:16",
        "arrival": "10:03"
      },
      {
        "departure": "10:32",
        "arrival": "11:26"
      },
      {
        "departure": "11:48",
        "arrival": "12:49"
      },
      {
        "departure": "13:04",
        "arrival": "14:12"
      },
      {
        "departure": "14:20",
        "arrival": "15:00"
      },
      {
        "departure": "15:36",
        "arrival": "16:23"
      },
      {
        "departure": "16:52",
        "arrival": "17:46"
      }
    ],
    "fare": 22,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ff5571",
    "currentLocation": {
      "lat": 19.0532,
      "lng": 72.8698
    },
    "routePath": [
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.052,
        "lng": 72.871
      },
      {
        "lat": 19.0215,
        "lng": 72.8601
      },
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9067,
        "lng": 72.8147
      }
    ]
  },
  {
    "id": "B83D_153",
    "number": "83-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Santacruz Station",
      "to": "Colaba",
      "stops": [
        "Santacruz Station",
        "Bandra Station",
        "Worli Sea Face",
        "Nariman Point",
        "Colaba"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:27",
        "arrival": "07:14"
      },
      {
        "departure": "07:54",
        "arrival": "08:48"
      },
      {
        "departure": "09:21",
        "arrival": "10:22"
      },
      {
        "departure": "10:48",
        "arrival": "11:56"
      },
      {
        "departure": "12:15",
        "arrival": "12:55"
      },
      {
        "departure": "13:42",
        "arrival": "14:29"
      },
      {
        "departure": "15:09",
        "arrival": "16:03"
      }
    ],
    "fare": 30,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#38bdf8",
    "currentLocation": {
      "lat": 19.0181,
      "lng": 72.8177
    },
    "routePath": [
      {
        "lat": 19.0819,
        "lng": 72.8441
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0157,
        "lng": 72.8177
      },
      {
        "lat": 18.9258,
        "lng": 72.8218
      },
      {
        "lat": 18.9067,
        "lng": 72.8147
      }
    ]
  },
  {
    "id": "B90D_154",
    "number": "90-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Thane Station",
      "to": "Churchgate",
      "stops": [
        "Thane Station",
        "Ghatkopar Station",
        "Sion Station",
        "Dadar Station",
        "CST / VT",
        "Churchgate"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "06:58",
        "arrival": "07:45"
      },
      {
        "departure": "07:56",
        "arrival": "08:50"
      },
      {
        "departure": "08:54",
        "arrival": "09:55"
      },
      {
        "departure": "09:52",
        "arrival": "11:00"
      },
      {
        "departure": "10:50",
        "arrival": "11:30"
      },
      {
        "departure": "11:48",
        "arrival": "12:35"
      },
      {
        "departure": "12:46",
        "arrival": "13:40"
      }
    ],
    "fare": 42,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#34d399",
    "currentLocation": {
      "lat": 19.0214,
      "lng": 72.8454
    },
    "routePath": [
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.935,
        "lng": 72.8259
      }
    ]
  },
  {
    "id": "B612D_155",
    "number": "612-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Powai Lake",
      "to": "Malad Station",
      "stops": [
        "Powai Lake",
        "SEEPZ Andheri",
        "Goregaon Station",
        "Malad Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:09",
        "arrival": "08:56"
      },
      {
        "departure": "09:18",
        "arrival": "10:12"
      },
      {
        "departure": "10:27",
        "arrival": "11:28"
      },
      {
        "departure": "11:36",
        "arrival": "12:44"
      },
      {
        "departure": "12:45",
        "arrival": "13:25"
      },
      {
        "departure": "13:54",
        "arrival": "14:41"
      },
      {
        "departure": "15:03",
        "arrival": "15:57"
      }
    ],
    "fare": 18,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#f43f5e",
    "currentLocation": {
      "lat": 19.1627,
      "lng": 72.8517
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.119,
        "lng": 72.874
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      }
    ]
  },
  {
    "id": "B311D_156",
    "number": "311-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Kurla Station",
      "to": "Bandra Station",
      "stops": [
        "Kurla Station",
        "BKC (Bandra Kurla Complex)",
        "Bandra Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:20",
        "arrival": "10:07"
      },
      {
        "departure": "10:40",
        "arrival": "11:34"
      },
      {
        "departure": "12:00",
        "arrival": "13:01"
      },
      {
        "departure": "13:20",
        "arrival": "14:28"
      },
      {
        "departure": "14:40",
        "arrival": "15:20"
      },
      {
        "departure": "16:00",
        "arrival": "16:47"
      },
      {
        "departure": "17:20",
        "arrival": "18:14"
      }
    ],
    "fare": 10,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#818cf8",
    "currentLocation": {
      "lat": 19.052,
      "lng": 72.8378
    },
    "routePath": [
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      }
    ]
  },
  {
    "id": "B332D_157",
    "number": "332-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Kurla Station",
      "to": "Andheri Station",
      "stops": [
        "Kurla Station",
        "Sakinaka",
        "Andheri Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:31",
        "arrival": "07:18"
      },
      {
        "departure": "08:02",
        "arrival": "08:56"
      },
      {
        "departure": "09:33",
        "arrival": "10:34"
      },
      {
        "departure": "11:04",
        "arrival": "12:12"
      },
      {
        "departure": "12:35",
        "arrival": "13:15"
      },
      {
        "departure": "14:06",
        "arrival": "14:53"
      },
      {
        "departure": "15:37",
        "arrival": "16:31"
      }
    ],
    "fare": 14,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#10b981",
    "currentLocation": {
      "lat": 19.0624,
      "lng": 72.8785
    },
    "routePath": [
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.1025,
        "lng": 72.8875
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      }
    ]
  },
  {
    "id": "B348D_158",
    "number": "348-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Vashi",
      "to": "Dadar Station",
      "stops": [
        "Vashi",
        "Mankhurd",
        "Govandi",
        "Chembur",
        "Sion Station",
        "Dadar Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:02",
        "arrival": "07:49"
      },
      {
        "departure": "08:04",
        "arrival": "08:58"
      },
      {
        "departure": "09:06",
        "arrival": "10:07"
      },
      {
        "departure": "10:08",
        "arrival": "11:16"
      },
      {
        "departure": "11:10",
        "arrival": "11:50"
      },
      {
        "departure": "12:12",
        "arrival": "12:59"
      },
      {
        "departure": "13:14",
        "arrival": "14:08"
      }
    ],
    "fare": 26,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#6366f1",
    "currentLocation": {
      "lat": 19.049,
      "lng": 72.932
    },
    "routePath": [
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.049,
        "lng": 72.932
      },
      {
        "lat": 19.055,
        "lng": 72.915
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      }
    ]
  },
  {
    "id": "B355D_159",
    "number": "355-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Chembur",
      "to": "Santacruz Station",
      "stops": [
        "Chembur",
        "Kurla Station",
        "BKC (Bandra Kurla Complex)",
        "Santacruz Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:13",
        "arrival": "09:00"
      },
      {
        "departure": "09:26",
        "arrival": "10:20"
      },
      {
        "departure": "10:39",
        "arrival": "11:40"
      },
      {
        "departure": "11:52",
        "arrival": "13:00"
      },
      {
        "departure": "13:05",
        "arrival": "13:45"
      },
      {
        "departure": "14:18",
        "arrival": "15:05"
      },
      {
        "departure": "15:31",
        "arrival": "16:25"
      }
    ],
    "fare": 18,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ec4899",
    "currentLocation": {
      "lat": 19.0674,
      "lng": 72.8699
    },
    "routePath": [
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.0819,
        "lng": 72.8441
      }
    ]
  },
  {
    "id": "B368D_160",
    "number": "368-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Ghatkopar Station",
      "to": "Dadar Station",
      "stops": [
        "Ghatkopar Station",
        "Chembur",
        "Wadala",
        "Dadar Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:24",
        "arrival": "10:11"
      },
      {
        "departure": "10:48",
        "arrival": "11:42"
      },
      {
        "departure": "12:12",
        "arrival": "13:13"
      },
      {
        "departure": "13:36",
        "arrival": "14:44"
      },
      {
        "departure": "15:00",
        "arrival": "15:40"
      },
      {
        "departure": "16:24",
        "arrival": "17:11"
      },
      {
        "departure": "17:48",
        "arrival": "18:42"
      }
    ],
    "fare": 20,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#14b8a6",
    "currentLocation": {
      "lat": 19.0202,
      "lng": 72.8466
    },
    "routePath": [
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0215,
        "lng": 72.8601
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      }
    ]
  },
  {
    "id": "B385D_161",
    "number": "385-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Vikhroli",
      "to": "Andheri Station",
      "stops": [
        "Vikhroli",
        "Ghatkopar Station",
        "Sakinaka",
        "Airport Terminal 2",
        "Andheri Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "05:55",
        "arrival": "06:42"
      },
      {
        "departure": "06:50",
        "arrival": "07:44"
      },
      {
        "departure": "07:45",
        "arrival": "08:46"
      },
      {
        "departure": "08:40",
        "arrival": "09:48"
      },
      {
        "departure": "09:35",
        "arrival": "10:15"
      },
      {
        "departure": "10:30",
        "arrival": "11:17"
      },
      {
        "departure": "11:25",
        "arrival": "12:19"
      }
    ],
    "fare": 22,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#00c9ff",
    "currentLocation": {
      "lat": 19.1095,
      "lng": 72.9238
    },
    "routePath": [
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.1025,
        "lng": 72.8875
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      }
    ]
  },
  {
    "id": "B403D_162",
    "number": "403-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Ghatkopar Station",
      "to": "Borivali Station",
      "stops": [
        "Ghatkopar Station",
        "Sakinaka",
        "SEEPZ Andheri",
        "Malad Station",
        "Kandivali Station",
        "Borivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:06",
        "arrival": "07:53"
      },
      {
        "departure": "08:12",
        "arrival": "09:06"
      },
      {
        "departure": "09:18",
        "arrival": "10:19"
      },
      {
        "departure": "10:24",
        "arrival": "11:32"
      },
      {
        "departure": "11:30",
        "arrival": "12:10"
      },
      {
        "departure": "12:36",
        "arrival": "13:23"
      },
      {
        "departure": "13:42",
        "arrival": "14:36"
      }
    ],
    "fare": 32,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#22d3a0",
    "currentLocation": {
      "lat": 19.2271,
      "lng": 72.8555
    },
    "routePath": [
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.1025,
        "lng": 72.8875
      },
      {
        "lat": 19.119,
        "lng": 72.874
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      }
    ]
  },
  {
    "id": "B415D_163",
    "number": "415-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "SEEPZ Andheri",
      "to": "Andheri Station",
      "stops": [
        "SEEPZ Andheri",
        "MIDC Andheri",
        "Andheri Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:17",
        "arrival": "09:04"
      },
      {
        "departure": "09:34",
        "arrival": "10:28"
      },
      {
        "departure": "10:51",
        "arrival": "11:52"
      },
      {
        "departure": "12:08",
        "arrival": "13:16"
      },
      {
        "departure": "13:25",
        "arrival": "14:05"
      },
      {
        "departure": "14:42",
        "arrival": "15:29"
      },
      {
        "departure": "15:59",
        "arrival": "16:53"
      }
    ],
    "fare": 10,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#4f8cff",
    "currentLocation": {
      "lat": 19.1166,
      "lng": 72.874
    },
    "routePath": [
      {
        "lat": 19.119,
        "lng": 72.874
      },
      {
        "lat": 19.1235,
        "lng": 72.8621
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      }
    ]
  },
  {
    "id": "B440D_164",
    "number": "440-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Hiranandani Powai",
      "to": "Borivali Station",
      "stops": [
        "Hiranandani Powai",
        "Powai Lake",
        "SEEPZ Andheri",
        "Goregaon Station",
        "Malad Station",
        "Borivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:28",
        "arrival": "10:15"
      },
      {
        "departure": "10:56",
        "arrival": "11:50"
      },
      {
        "departure": "12:24",
        "arrival": "13:25"
      },
      {
        "departure": "13:52",
        "arrival": "15:00"
      },
      {
        "departure": "15:20",
        "arrival": "16:00"
      },
      {
        "departure": "16:48",
        "arrival": "17:35"
      },
      {
        "departure": "18:16",
        "arrival": "19:10"
      }
    ],
    "fare": 26,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#00f5c4",
    "currentLocation": {
      "lat": 19.1185,
      "lng": 72.9069
    },
    "routePath": [
      {
        "lat": 19.118,
        "lng": 72.915
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.119,
        "lng": 72.874
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      }
    ]
  },
  {
    "id": "B453D_165",
    "number": "453-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Ghatkopar Station",
      "to": "Lokhandwala",
      "stops": [
        "Ghatkopar Station",
        "Sakinaka",
        "Airport Terminal 2",
        "Andheri Station",
        "Lokhandwala"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "05:59",
        "arrival": "06:46"
      },
      {
        "departure": "06:58",
        "arrival": "07:52"
      },
      {
        "departure": "07:57",
        "arrival": "08:58"
      },
      {
        "departure": "08:56",
        "arrival": "10:04"
      },
      {
        "departure": "09:55",
        "arrival": "10:35"
      },
      {
        "departure": "10:54",
        "arrival": "11:41"
      },
      {
        "departure": "11:53",
        "arrival": "12:47"
      }
    ],
    "fare": 20,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ffd166",
    "currentLocation": {
      "lat": 19.1415,
      "lng": 72.8282
    },
    "routePath": [
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.1025,
        "lng": 72.8875
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.1415,
        "lng": 72.8258
      }
    ]
  },
  {
    "id": "B478D_166",
    "number": "478-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Vikhroli",
      "to": "Versova",
      "stops": [
        "Vikhroli",
        "Hiranandani Powai",
        "SEEPZ Andheri",
        "Andheri Station",
        "Versova"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:10",
        "arrival": "07:57"
      },
      {
        "departure": "08:20",
        "arrival": "09:14"
      },
      {
        "departure": "09:30",
        "arrival": "10:31"
      },
      {
        "departure": "10:40",
        "arrival": "11:48"
      },
      {
        "departure": "11:50",
        "arrival": "12:30"
      },
      {
        "departure": "13:00",
        "arrival": "13:47"
      },
      {
        "departure": "14:10",
        "arrival": "15:04"
      }
    ],
    "fare": 24,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#a855f7",
    "currentLocation": {
      "lat": 19.1071,
      "lng": 72.9238
    },
    "routePath": [
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.118,
        "lng": 72.915
      },
      {
        "lat": 19.119,
        "lng": 72.874
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.1225,
        "lng": 72.8111
      }
    ]
  },
  {
    "id": "B492D_167",
    "number": "492-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Thane Station",
      "to": "SEEPZ Andheri",
      "stops": [
        "Thane Station",
        "Mulund Station",
        "Bhandup",
        "Kanjurmarg",
        "Powai Lake",
        "SEEPZ Andheri"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:21",
        "arrival": "09:08"
      },
      {
        "departure": "09:42",
        "arrival": "10:36"
      },
      {
        "departure": "11:03",
        "arrival": "12:04"
      },
      {
        "departure": "12:24",
        "arrival": "13:32"
      },
      {
        "departure": "13:45",
        "arrival": "14:25"
      },
      {
        "departure": "15:06",
        "arrival": "15:53"
      },
      {
        "departure": "16:27",
        "arrival": "17:21"
      }
    ],
    "fare": 24,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ff9a3c",
    "currentLocation": {
      "lat": 19.1221,
      "lng": 72.9045
    },
    "routePath": [
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.144,
        "lng": 72.9375
      },
      {
        "lat": 19.1305,
        "lng": 72.934
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.119,
        "lng": 72.874
      }
    ]
  },
  {
    "id": "B506D_168",
    "number": "506-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Ghatkopar Station",
      "to": "Thane Station",
      "stops": [
        "Ghatkopar Station",
        "Vikhroli",
        "Mulund Station",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:32",
        "arrival": "10:19"
      },
      {
        "departure": "11:04",
        "arrival": "11:58"
      },
      {
        "departure": "12:36",
        "arrival": "13:37"
      },
      {
        "departure": "14:08",
        "arrival": "15:16"
      },
      {
        "departure": "15:40",
        "arrival": "16:20"
      },
      {
        "departure": "17:12",
        "arrival": "17:59"
      },
      {
        "departure": "18:44",
        "arrival": "19:38"
      }
    ],
    "fare": 22,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ff5571",
    "currentLocation": {
      "lat": 19.1869,
      "lng": 72.9667
    },
    "routePath": [
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B501D_169",
    "number": "501-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Thane Station",
      "to": "Kurla Station",
      "stops": [
        "Thane Station",
        "Mulund Station",
        "Bhandup",
        "Vikhroli",
        "Ghatkopar Station",
        "Kurla Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:03",
        "arrival": "06:50"
      },
      {
        "departure": "07:06",
        "arrival": "08:00"
      },
      {
        "departure": "08:09",
        "arrival": "09:10"
      },
      {
        "departure": "09:12",
        "arrival": "10:20"
      },
      {
        "departure": "10:15",
        "arrival": "10:55"
      },
      {
        "departure": "11:18",
        "arrival": "12:05"
      },
      {
        "departure": "12:21",
        "arrival": "13:15"
      }
    ],
    "fare": 24,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#38bdf8",
    "currentLocation": {
      "lat": 19.1797,
      "lng": 72.9679
    },
    "routePath": [
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.144,
        "lng": 72.9375
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      }
    ]
  },
  {
    "id": "B521D_170",
    "number": "521-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Thane Station",
      "to": "Dadar Station",
      "stops": [
        "Thane Station",
        "Mulund Station",
        "Vikhroli",
        "Ghatkopar Station",
        "Kurla Station",
        "Sion Station",
        "Dadar Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:14",
        "arrival": "08:01"
      },
      {
        "departure": "08:28",
        "arrival": "09:22"
      },
      {
        "departure": "09:42",
        "arrival": "10:43"
      },
      {
        "departure": "10:56",
        "arrival": "12:04"
      },
      {
        "departure": "12:10",
        "arrival": "12:50"
      },
      {
        "departure": "13:24",
        "arrival": "14:11"
      },
      {
        "departure": "14:38",
        "arrival": "15:32"
      }
    ],
    "fare": 32,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#34d399",
    "currentLocation": {
      "lat": 19.1708,
      "lng": 72.9566
    },
    "routePath": [
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      }
    ]
  },
  {
    "id": "B525D_171",
    "number": "525-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Kalwa",
      "to": "Goregaon Station",
      "stops": [
        "Kalwa",
        "Thane Station",
        "Vikhroli",
        "Powai Lake",
        "Goregaon Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:25",
        "arrival": "09:12"
      },
      {
        "departure": "09:50",
        "arrival": "10:44"
      },
      {
        "departure": "11:15",
        "arrival": "12:16"
      },
      {
        "departure": "12:40",
        "arrival": "13:48"
      },
      {
        "departure": "14:05",
        "arrival": "14:45"
      },
      {
        "departure": "15:30",
        "arrival": "16:17"
      },
      {
        "departure": "16:55",
        "arrival": "17:49"
      }
    ],
    "fare": 28,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#f43f5e",
    "currentLocation": {
      "lat": 19.1968,
      "lng": 72.9956
    },
    "routePath": [
      {
        "lat": 19.198,
        "lng": 72.998
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      }
    ]
  },
  {
    "id": "B545D_172",
    "number": "545-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Kalyan",
      "to": "Thane Station",
      "stops": [
        "Kalyan",
        "Dombivli",
        "Kalwa",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "08:56",
        "arrival": "09:43"
      },
      {
        "departure": "09:52",
        "arrival": "10:46"
      },
      {
        "departure": "10:48",
        "arrival": "11:49"
      },
      {
        "departure": "11:44",
        "arrival": "12:52"
      },
      {
        "departure": "12:40",
        "arrival": "13:20"
      },
      {
        "departure": "13:36",
        "arrival": "14:23"
      },
      {
        "departure": "14:32",
        "arrival": "15:26"
      }
    ],
    "fare": 22,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#818cf8",
    "currentLocation": {
      "lat": 19.1833,
      "lng": 72.9655
    },
    "routePath": [
      {
        "lat": 19.2394,
        "lng": 73.1267
      },
      {
        "lat": 19.2184,
        "lng": 73.0867
      },
      {
        "lat": 19.198,
        "lng": 72.998
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B603D_173",
    "number": "603-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Vashi",
      "to": "Thane Station",
      "stops": [
        "Vashi",
        "Chembur",
        "Vikhroli",
        "Mulund Station",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:07",
        "arrival": "06:54"
      },
      {
        "departure": "07:14",
        "arrival": "08:08"
      },
      {
        "departure": "08:21",
        "arrival": "09:22"
      },
      {
        "departure": "09:28",
        "arrival": "10:36"
      },
      {
        "departure": "10:35",
        "arrival": "11:15"
      },
      {
        "departure": "11:42",
        "arrival": "12:29"
      },
      {
        "departure": "12:49",
        "arrival": "13:43"
      }
    ],
    "fare": 28,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#10b981",
    "currentLocation": {
      "lat": 19.1071,
      "lng": 72.9262
    },
    "routePath": [
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B629D_174",
    "number": "629-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Belapur",
      "to": "Kurla Station",
      "stops": [
        "Belapur",
        "Nerul",
        "Sanpada",
        "Vashi",
        "Mankhurd",
        "Govandi",
        "Chembur",
        "Kurla Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:18",
        "arrival": "08:05"
      },
      {
        "departure": "08:36",
        "arrival": "09:30"
      },
      {
        "departure": "09:54",
        "arrival": "10:55"
      },
      {
        "departure": "11:12",
        "arrival": "12:20"
      },
      {
        "departure": "12:30",
        "arrival": "13:10"
      },
      {
        "departure": "13:48",
        "arrival": "14:35"
      },
      {
        "departure": "15:06",
        "arrival": "16:00"
      }
    ],
    "fare": 34,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#6366f1",
    "currentLocation": {
      "lat": 19.0574,
      "lng": 72.9162
    },
    "routePath": [
      {
        "lat": 19.019,
        "lng": 73.039
      },
      {
        "lat": 19.033,
        "lng": 73.0297
      },
      {
        "lat": 19.065,
        "lng": 73.01
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.049,
        "lng": 72.932
      },
      {
        "lat": 19.055,
        "lng": 72.915
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      }
    ]
  },
  {
    "id": "B706D_175",
    "number": "706-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Belapur",
      "to": "Andheri Station",
      "stops": [
        "Belapur",
        "Nerul",
        "Vashi",
        "Chembur",
        "Kurla Station",
        "Andheri Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:29",
        "arrival": "09:16"
      },
      {
        "departure": "09:58",
        "arrival": "10:52"
      },
      {
        "departure": "11:27",
        "arrival": "12:28"
      },
      {
        "departure": "12:56",
        "arrival": "14:04"
      },
      {
        "departure": "14:25",
        "arrival": "15:05"
      },
      {
        "departure": "15:54",
        "arrival": "16:41"
      },
      {
        "departure": "17:23",
        "arrival": "18:17"
      }
    ],
    "fare": 36,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#ec4899",
    "currentLocation": {
      "lat": 19.0226,
      "lng": 73.0414
    },
    "routePath": [
      {
        "lat": 19.019,
        "lng": 73.039
      },
      {
        "lat": 19.033,
        "lng": 73.0297
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      }
    ]
  },
  {
    "id": "B709D_176",
    "number": "709-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Belapur",
      "to": "Thane Station",
      "stops": [
        "Belapur",
        "Nerul",
        "Sanpada",
        "Vashi",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:00",
        "arrival": "09:47"
      },
      {
        "departure": "10:00",
        "arrival": "10:54"
      },
      {
        "departure": "11:00",
        "arrival": "12:01"
      },
      {
        "departure": "12:00",
        "arrival": "13:08"
      },
      {
        "departure": "13:00",
        "arrival": "13:40"
      },
      {
        "departure": "14:00",
        "arrival": "14:47"
      },
      {
        "departure": "15:00",
        "arrival": "15:54"
      }
    ],
    "fare": 30,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#14b8a6",
    "currentLocation": {
      "lat": 19.0154,
      "lng": 73.0366
    },
    "routePath": [
      {
        "lat": 19.019,
        "lng": 73.039
      },
      {
        "lat": 19.033,
        "lng": 73.0297
      },
      {
        "lat": 19.065,
        "lng": 73.01
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B720D_177",
    "number": "720-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Vashi",
      "to": "Borivali Station",
      "stops": [
        "Vashi",
        "Ghatkopar Station",
        "Powai Lake",
        "Kandivali Station",
        "Borivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:11",
        "arrival": "06:58"
      },
      {
        "departure": "07:22",
        "arrival": "08:16"
      },
      {
        "departure": "08:33",
        "arrival": "09:34"
      },
      {
        "departure": "09:44",
        "arrival": "10:52"
      },
      {
        "departure": "10:55",
        "arrival": "11:35"
      },
      {
        "departure": "12:06",
        "arrival": "12:53"
      },
      {
        "departure": "13:17",
        "arrival": "14:11"
      }
    ],
    "fare": 40,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#00c9ff",
    "currentLocation": {
      "lat": 19.0808,
      "lng": 72.9061
    },
    "routePath": [
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      }
    ]
  },
  {
    "id": "BA121D_178",
    "number": "A-121-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Bandra Station",
      "to": "Colaba",
      "stops": [
        "Bandra Station",
        "Worli Sea Face",
        "CST / VT",
        "Colaba"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:22",
        "arrival": "08:09"
      },
      {
        "departure": "08:44",
        "arrival": "09:38"
      },
      {
        "departure": "10:06",
        "arrival": "11:07"
      },
      {
        "departure": "11:28",
        "arrival": "12:36"
      },
      {
        "departure": "12:50",
        "arrival": "13:30"
      },
      {
        "departure": "14:12",
        "arrival": "14:59"
      },
      {
        "departure": "15:34",
        "arrival": "16:28"
      }
    ],
    "fare": 28,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#22d3a0",
    "currentLocation": {
      "lat": 19.0145,
      "lng": 72.8177
    },
    "routePath": [
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0157,
        "lng": 72.8177
      },
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9067,
        "lng": 72.8147
      }
    ]
  },
  {
    "id": "BA180D_179",
    "number": "A-180-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Ghatkopar Station",
      "to": "CST / VT",
      "stops": [
        "Ghatkopar Station",
        "Kurla Station",
        "Sion Station",
        "Dadar Station",
        "Byculla",
        "CST / VT"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:33",
        "arrival": "09:20"
      },
      {
        "departure": "10:06",
        "arrival": "11:00"
      },
      {
        "departure": "11:39",
        "arrival": "12:40"
      },
      {
        "departure": "13:12",
        "arrival": "14:20"
      },
      {
        "departure": "14:45",
        "arrival": "15:25"
      },
      {
        "departure": "16:18",
        "arrival": "17:05"
      },
      {
        "departure": "17:51",
        "arrival": "18:45"
      }
    ],
    "fare": 32,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#4f8cff",
    "currentLocation": {
      "lat": 18.9763,
      "lng": 72.8347
    },
    "routePath": [
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.0392,
        "lng": 72.8598
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 18.9763,
        "lng": 72.8335
      },
      {
        "lat": 18.9399,
        "lng": 72.8355
      }
    ]
  },
  {
    "id": "BA332D_180",
    "number": "A-332-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "BKC (Bandra Kurla Complex)",
      "to": "Andheri Station",
      "stops": [
        "BKC (Bandra Kurla Complex)",
        "Kurla Station",
        "Sakinaka",
        "Airport Terminal 2",
        "Andheri Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:04",
        "arrival": "09:51"
      },
      {
        "departure": "10:08",
        "arrival": "11:02"
      },
      {
        "departure": "11:12",
        "arrival": "12:13"
      },
      {
        "departure": "12:16",
        "arrival": "13:24"
      },
      {
        "departure": "13:20",
        "arrival": "14:00"
      },
      {
        "departure": "14:24",
        "arrival": "15:11"
      },
      {
        "departure": "15:28",
        "arrival": "16:22"
      }
    ],
    "fare": 22,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#00f5c4",
    "currentLocation": {
      "lat": 19.1209,
      "lng": 72.849
    },
    "routePath": [
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.1025,
        "lng": 72.8875
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      }
    ]
  },
  {
    "id": "BA422D_181",
    "number": "A-422-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Hiranandani Powai",
      "to": "Bandra Station",
      "stops": [
        "Hiranandani Powai",
        "Powai Lake",
        "Airport Terminal 2",
        "BKC (Bandra Kurla Complex)",
        "Bandra Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:15",
        "arrival": "07:02"
      },
      {
        "departure": "07:30",
        "arrival": "08:24"
      },
      {
        "departure": "08:45",
        "arrival": "09:46"
      },
      {
        "departure": "10:00",
        "arrival": "11:08"
      },
      {
        "departure": "11:15",
        "arrival": "11:55"
      },
      {
        "departure": "12:30",
        "arrival": "13:17"
      },
      {
        "departure": "13:45",
        "arrival": "14:39"
      }
    ],
    "fare": 30,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ffd166",
    "currentLocation": {
      "lat": 19.1204,
      "lng": 72.9126
    },
    "routePath": [
      {
        "lat": 19.118,
        "lng": 72.915
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      }
    ]
  },
  {
    "id": "BA505D_182",
    "number": "A-505-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Belapur",
      "to": "Bandra Station",
      "stops": [
        "Belapur",
        "Nerul",
        "Vashi",
        "Chembur",
        "BKC (Bandra Kurla Complex)",
        "Bandra Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:26",
        "arrival": "08:13"
      },
      {
        "departure": "08:52",
        "arrival": "09:46"
      },
      {
        "departure": "10:18",
        "arrival": "11:19"
      },
      {
        "departure": "11:44",
        "arrival": "12:52"
      },
      {
        "departure": "13:10",
        "arrival": "13:50"
      },
      {
        "departure": "14:36",
        "arrival": "15:23"
      },
      {
        "departure": "16:02",
        "arrival": "16:56"
      }
    ],
    "fare": 38,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#a855f7",
    "currentLocation": {
      "lat": 19.0366,
      "lng": 73.0285
    },
    "routePath": [
      {
        "lat": 19.019,
        "lng": 73.039
      },
      {
        "lat": 19.033,
        "lng": 73.0297
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      }
    ]
  },
  {
    "id": "BA702D_183",
    "number": "A-702-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "BKC (Bandra Kurla Complex)",
      "to": "Thane Station",
      "stops": [
        "BKC (Bandra Kurla Complex)",
        "Ghatkopar Station",
        "Bhandup",
        "Mulund Station",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "07:57",
        "arrival": "08:44"
      },
      {
        "departure": "08:54",
        "arrival": "09:48"
      },
      {
        "departure": "09:51",
        "arrival": "10:52"
      },
      {
        "departure": "10:48",
        "arrival": "11:56"
      },
      {
        "departure": "11:45",
        "arrival": "12:25"
      },
      {
        "departure": "12:42",
        "arrival": "13:29"
      },
      {
        "departure": "13:39",
        "arrival": "14:33"
      }
    ],
    "fare": 32,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ff9a3c",
    "currentLocation": {
      "lat": 19.1404,
      "lng": 72.9375
    },
    "routePath": [
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.144,
        "lng": 72.9375
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "BC42D_184",
    "number": "C-42-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Dadar Station",
      "stops": [
        "Borivali Station",
        "Andheri Station",
        "Bandra Station",
        "Dadar Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:08",
        "arrival": "09:55"
      },
      {
        "departure": "10:16",
        "arrival": "11:10"
      },
      {
        "departure": "11:24",
        "arrival": "12:25"
      },
      {
        "departure": "12:32",
        "arrival": "13:40"
      },
      {
        "departure": "13:40",
        "arrival": "14:20"
      },
      {
        "departure": "14:48",
        "arrival": "15:35"
      },
      {
        "departure": "15:56",
        "arrival": "16:50"
      }
    ],
    "fare": 35,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#ff5571",
    "currentLocation": {
      "lat": 19.0154,
      "lng": 72.8454
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      }
    ]
  },
  {
    "id": "BC71D_185",
    "number": "C-71-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Vashi",
      "to": "Bandra Station",
      "stops": [
        "Vashi",
        "Chembur",
        "BKC (Bandra Kurla Complex)",
        "Bandra Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:19",
        "arrival": "07:06"
      },
      {
        "departure": "07:38",
        "arrival": "08:32"
      },
      {
        "departure": "08:57",
        "arrival": "09:58"
      },
      {
        "departure": "10:16",
        "arrival": "11:24"
      },
      {
        "departure": "11:35",
        "arrival": "12:15"
      },
      {
        "departure": "12:54",
        "arrival": "13:41"
      },
      {
        "departure": "14:13",
        "arrival": "15:07"
      }
    ],
    "fare": 32,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#38bdf8",
    "currentLocation": {
      "lat": 19.0759,
      "lng": 73.001
    },
    "routePath": [
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      }
    ]
  },
  {
    "id": "BC86D_186",
    "number": "C-86-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Dadar Station",
      "to": "Colaba",
      "stops": [
        "Dadar Station",
        "Lower Parel",
        "Mumbai Central",
        "Churchgate",
        "Colaba"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:30",
        "arrival": "08:17"
      },
      {
        "departure": "09:00",
        "arrival": "09:54"
      },
      {
        "departure": "10:30",
        "arrival": "11:31"
      },
      {
        "departure": "12:00",
        "arrival": "13:08"
      },
      {
        "departure": "13:30",
        "arrival": "14:10"
      },
      {
        "departure": "15:00",
        "arrival": "15:47"
      },
      {
        "departure": "16:30",
        "arrival": "17:24"
      }
    ],
    "fare": 24,
    "totalSeats": 46,
    "busType": "AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#34d399",
    "currentLocation": {
      "lat": 19.0178,
      "lng": 72.8418
    },
    "routePath": [
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 18.9953,
        "lng": 72.8306
      },
      {
        "lat": 18.9696,
        "lng": 72.8194
      },
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9067,
        "lng": 72.8147
      }
    ]
  },
  {
    "id": "B102D_187",
    "number": "102-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Churchgate",
      "to": "CST / VT",
      "stops": [
        "Churchgate",
        "Marine Lines",
        "CST / VT"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:01",
        "arrival": "08:48"
      },
      {
        "departure": "09:02",
        "arrival": "09:56"
      },
      {
        "departure": "10:03",
        "arrival": "11:04"
      },
      {
        "departure": "11:04",
        "arrival": "12:12"
      },
      {
        "departure": "12:05",
        "arrival": "12:45"
      },
      {
        "departure": "13:06",
        "arrival": "13:53"
      },
      {
        "departure": "14:07",
        "arrival": "15:01"
      }
    ],
    "fare": 6,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#f43f5e",
    "currentLocation": {
      "lat": 18.9362,
      "lng": 72.8247
    },
    "routePath": [
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9433,
        "lng": 72.8236
      },
      {
        "lat": 18.9399,
        "lng": 72.8355
      }
    ]
  },
  {
    "id": "B108D_188",
    "number": "108-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Mumbai Central",
      "to": "CST / VT",
      "stops": [
        "Mumbai Central",
        "Grant Road",
        "Marine Lines",
        "CST / VT"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:12",
        "arrival": "09:59"
      },
      {
        "departure": "10:24",
        "arrival": "11:18"
      },
      {
        "departure": "11:36",
        "arrival": "12:37"
      },
      {
        "departure": "12:48",
        "arrival": "13:56"
      },
      {
        "departure": "14:00",
        "arrival": "14:40"
      },
      {
        "departure": "15:12",
        "arrival": "15:59"
      },
      {
        "departure": "16:24",
        "arrival": "17:18"
      }
    ],
    "fare": 12,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#818cf8",
    "currentLocation": {
      "lat": 18.9423,
      "lng": 72.8355
    },
    "routePath": [
      {
        "lat": 18.9696,
        "lng": 72.8194
      },
      {
        "lat": 18.9632,
        "lng": 72.816
      },
      {
        "lat": 18.9433,
        "lng": 72.8236
      },
      {
        "lat": 18.9399,
        "lng": 72.8355
      }
    ]
  },
  {
    "id": "B123D_189",
    "number": "123-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Charni Road",
      "to": "Colaba",
      "stops": [
        "Charni Road",
        "Marine Lines",
        "Nariman Point",
        "Colaba"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:23",
        "arrival": "07:10"
      },
      {
        "departure": "07:46",
        "arrival": "08:40"
      },
      {
        "departure": "09:09",
        "arrival": "10:10"
      },
      {
        "departure": "10:32",
        "arrival": "11:40"
      },
      {
        "departure": "11:55",
        "arrival": "12:35"
      },
      {
        "departure": "13:18",
        "arrival": "14:05"
      },
      {
        "departure": "14:41",
        "arrival": "15:35"
      }
    ],
    "fare": 10,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#10b981",
    "currentLocation": {
      "lat": 18.9551,
      "lng": 72.82
    },
    "routePath": [
      {
        "lat": 18.9515,
        "lng": 72.8188
      },
      {
        "lat": 18.9433,
        "lng": 72.8236
      },
      {
        "lat": 18.9258,
        "lng": 72.8218
      },
      {
        "lat": 18.9067,
        "lng": 72.8147
      }
    ]
  },
  {
    "id": "B134D_190",
    "number": "134-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Prabhadevi",
      "to": "Mumbai Central",
      "stops": [
        "Prabhadevi",
        "Worli Sea Face",
        "Haji Ali",
        "Mumbai Central"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:34",
        "arrival": "08:21"
      },
      {
        "departure": "09:08",
        "arrival": "10:02"
      },
      {
        "departure": "10:42",
        "arrival": "11:43"
      },
      {
        "departure": "12:16",
        "arrival": "13:24"
      },
      {
        "departure": "13:50",
        "arrival": "14:30"
      },
      {
        "departure": "15:24",
        "arrival": "16:11"
      },
      {
        "departure": "16:58",
        "arrival": "17:52"
      }
    ],
    "fare": 16,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#6366f1",
    "currentLocation": {
      "lat": 19.0121,
      "lng": 72.8201
    },
    "routePath": [
      {
        "lat": 19.0166,
        "lng": 72.8295
      },
      {
        "lat": 19.0157,
        "lng": 72.8177
      },
      {
        "lat": 18.9774,
        "lng": 72.8115
      },
      {
        "lat": 18.9696,
        "lng": 72.8194
      }
    ]
  },
  {
    "id": "B172D_191",
    "number": "172-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Dadar Station",
      "to": "Mumbai Central",
      "stops": [
        "Dadar Station",
        "Prabhadevi",
        "Lower Parel",
        "Mumbai Central"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:05",
        "arrival": "08:52"
      },
      {
        "departure": "09:10",
        "arrival": "10:04"
      },
      {
        "departure": "10:15",
        "arrival": "11:16"
      },
      {
        "departure": "11:20",
        "arrival": "12:28"
      },
      {
        "departure": "12:25",
        "arrival": "13:05"
      },
      {
        "departure": "13:30",
        "arrival": "14:17"
      },
      {
        "departure": "14:35",
        "arrival": "15:29"
      }
    ],
    "fare": 14,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ec4899",
    "currentLocation": {
      "lat": 18.9929,
      "lng": 72.8282
    },
    "routePath": [
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.0166,
        "lng": 72.8295
      },
      {
        "lat": 18.9953,
        "lng": 72.8306
      },
      {
        "lat": 18.9696,
        "lng": 72.8194
      }
    ]
  },
  {
    "id": "B220D_192",
    "number": "220-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Lokhandwala",
      "to": "Andheri Station",
      "stops": [
        "Lokhandwala",
        "Versova",
        "Andheri Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:16",
        "arrival": "10:03"
      },
      {
        "departure": "10:32",
        "arrival": "11:26"
      },
      {
        "departure": "11:48",
        "arrival": "12:49"
      },
      {
        "departure": "13:04",
        "arrival": "14:12"
      },
      {
        "departure": "14:20",
        "arrival": "15:00"
      },
      {
        "departure": "15:36",
        "arrival": "16:23"
      },
      {
        "departure": "16:52",
        "arrival": "17:46"
      }
    ],
    "fare": 10,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#14b8a6",
    "currentLocation": {
      "lat": 19.1185,
      "lng": 72.8454
    },
    "routePath": [
      {
        "lat": 19.1415,
        "lng": 72.8258
      },
      {
        "lat": 19.1225,
        "lng": 72.8111
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      }
    ]
  },
  {
    "id": "B266D_193",
    "number": "266-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Kandivali Station",
      "to": "Malad Station",
      "stops": [
        "Kandivali Station",
        "Mindspace Malad",
        "Malad Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:27",
        "arrival": "07:14"
      },
      {
        "departure": "07:54",
        "arrival": "08:48"
      },
      {
        "departure": "09:21",
        "arrival": "10:22"
      },
      {
        "departure": "10:48",
        "arrival": "11:56"
      },
      {
        "departure": "12:15",
        "arrival": "12:55"
      },
      {
        "departure": "13:42",
        "arrival": "14:29"
      },
      {
        "departure": "15:09",
        "arrival": "16:03"
      }
    ],
    "fare": 10,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#00c9ff",
    "currentLocation": {
      "lat": 19.2046,
      "lng": 72.8468
    },
    "routePath": [
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.1783,
        "lng": 72.834
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      }
    ]
  },
  {
    "id": "B298D_194",
    "number": "298-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Mira Road",
      "to": "Borivali Station",
      "stops": [
        "Mira Road",
        "Dahisar",
        "Borivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "06:58",
        "arrival": "07:45"
      },
      {
        "departure": "07:56",
        "arrival": "08:50"
      },
      {
        "departure": "08:54",
        "arrival": "09:55"
      },
      {
        "departure": "09:52",
        "arrival": "11:00"
      },
      {
        "departure": "10:50",
        "arrival": "11:30"
      },
      {
        "departure": "11:48",
        "arrival": "12:35"
      },
      {
        "departure": "12:46",
        "arrival": "13:40"
      }
    ],
    "fare": 12,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#22d3a0",
    "currentLocation": {
      "lat": 19.2582,
      "lng": 72.8602
    },
    "routePath": [
      {
        "lat": 19.2812,
        "lng": 72.856
      },
      {
        "lat": 19.257,
        "lng": 72.859
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      }
    ]
  },
  {
    "id": "B325D_195",
    "number": "325-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Ghatkopar Station",
      "to": "Kurla Station",
      "stops": [
        "Ghatkopar Station",
        "Vidyavihar",
        "Kurla Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:09",
        "arrival": "08:56"
      },
      {
        "departure": "09:18",
        "arrival": "10:12"
      },
      {
        "departure": "10:27",
        "arrival": "11:28"
      },
      {
        "departure": "11:36",
        "arrival": "12:44"
      },
      {
        "departure": "12:45",
        "arrival": "13:25"
      },
      {
        "departure": "13:54",
        "arrival": "14:41"
      },
      {
        "departure": "15:03",
        "arrival": "15:57"
      }
    ],
    "fare": 10,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#4f8cff",
    "currentLocation": {
      "lat": 19.066,
      "lng": 72.8821
    },
    "routePath": [
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.08,
        "lng": 72.8965
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      }
    ]
  },
  {
    "id": "B356D_196",
    "number": "356-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Kanjurmarg",
      "to": "Ghatkopar Station",
      "stops": [
        "Kanjurmarg",
        "Vikhroli",
        "Ghatkopar Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:20",
        "arrival": "10:07"
      },
      {
        "departure": "10:40",
        "arrival": "11:34"
      },
      {
        "departure": "12:00",
        "arrival": "13:01"
      },
      {
        "departure": "13:20",
        "arrival": "14:28"
      },
      {
        "departure": "14:40",
        "arrival": "15:20"
      },
      {
        "departure": "16:00",
        "arrival": "16:47"
      },
      {
        "departure": "17:20",
        "arrival": "18:14"
      }
    ],
    "fare": 12,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#00f5c4",
    "currentLocation": {
      "lat": 19.1341,
      "lng": 72.9316
    },
    "routePath": [
      {
        "lat": 19.1305,
        "lng": 72.934
      },
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      }
    ]
  },
  {
    "id": "B408D_197",
    "number": "408-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Powai Lake",
      "to": "Andheri Station",
      "stops": [
        "Powai Lake",
        "Chandivali",
        "Airport Terminal 2",
        "Andheri Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:31",
        "arrival": "07:18"
      },
      {
        "departure": "08:02",
        "arrival": "08:56"
      },
      {
        "departure": "09:33",
        "arrival": "10:34"
      },
      {
        "departure": "11:04",
        "arrival": "12:12"
      },
      {
        "departure": "12:35",
        "arrival": "13:15"
      },
      {
        "departure": "14:06",
        "arrival": "14:53"
      },
      {
        "departure": "15:37",
        "arrival": "16:31"
      }
    ],
    "fare": 18,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ffd166",
    "currentLocation": {
      "lat": 19.1161,
      "lng": 72.9045
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.9057
      },
      {
        "lat": 19.113,
        "lng": 72.894
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      }
    ]
  },
  {
    "id": "B434D_198",
    "number": "434-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Mindspace Malad",
      "to": "Goregaon Station",
      "stops": [
        "Mindspace Malad",
        "Malad Station",
        "Goregaon Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:02",
        "arrival": "07:49"
      },
      {
        "departure": "08:04",
        "arrival": "08:58"
      },
      {
        "departure": "09:06",
        "arrival": "10:07"
      },
      {
        "departure": "10:08",
        "arrival": "11:16"
      },
      {
        "departure": "11:10",
        "arrival": "11:50"
      },
      {
        "departure": "12:12",
        "arrival": "12:59"
      },
      {
        "departure": "13:14",
        "arrival": "14:08"
      }
    ],
    "fare": 8,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#a855f7",
    "currentLocation": {
      "lat": 19.1639,
      "lng": 72.8493
    },
    "routePath": [
      {
        "lat": 19.1783,
        "lng": 72.834
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      }
    ]
  },
  {
    "id": "B512D_199",
    "number": "512-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Vikhroli",
      "to": "Thane Station",
      "stops": [
        "Vikhroli",
        "Kanjurmarg",
        "Bhandup",
        "Nahur",
        "Mulund Station",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:13",
        "arrival": "09:00"
      },
      {
        "departure": "09:26",
        "arrival": "10:20"
      },
      {
        "departure": "10:39",
        "arrival": "11:40"
      },
      {
        "departure": "11:52",
        "arrival": "13:00"
      },
      {
        "departure": "13:05",
        "arrival": "13:45"
      },
      {
        "departure": "14:18",
        "arrival": "15:05"
      },
      {
        "departure": "15:31",
        "arrival": "16:25"
      }
    ],
    "fare": 20,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ff9a3c",
    "currentLocation": {
      "lat": 19.1047,
      "lng": 72.9274
    },
    "routePath": [
      {
        "lat": 19.1059,
        "lng": 72.9262
      },
      {
        "lat": 19.1305,
        "lng": 72.934
      },
      {
        "lat": 19.144,
        "lng": 72.9375
      },
      {
        "lat": 19.158,
        "lng": 72.946
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B531D_200",
    "number": "531-D",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Thane Station",
      "to": "Dombivli",
      "stops": [
        "Thane Station",
        "Kalwa",
        "Dombivli"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:24",
        "arrival": "10:11"
      },
      {
        "departure": "10:48",
        "arrival": "11:42"
      },
      {
        "departure": "12:12",
        "arrival": "13:13"
      },
      {
        "departure": "13:36",
        "arrival": "14:44"
      },
      {
        "departure": "15:00",
        "arrival": "15:40"
      },
      {
        "departure": "16:24",
        "arrival": "17:11"
      },
      {
        "departure": "17:48",
        "arrival": "18:42"
      }
    ],
    "fare": 18,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ff5571",
    "currentLocation": {
      "lat": 19.198,
      "lng": 73.0004
    },
    "routePath": [
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.198,
        "lng": 72.998
      },
      {
        "lat": 19.2184,
        "lng": 73.0867
      }
    ]
  },
  {
    "id": "BMF1_201",
    "number": "MF-1",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Andheri Station",
      "to": "Versova",
      "stops": [
        "Andheri Station",
        "Versova"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "05:55",
        "arrival": "06:42"
      },
      {
        "departure": "06:50",
        "arrival": "07:44"
      },
      {
        "departure": "07:45",
        "arrival": "08:46"
      },
      {
        "departure": "08:40",
        "arrival": "09:48"
      },
      {
        "departure": "09:35",
        "arrival": "10:15"
      },
      {
        "departure": "10:30",
        "arrival": "11:17"
      },
      {
        "departure": "11:25",
        "arrival": "12:19"
      }
    ],
    "fare": 10,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#38bdf8",
    "currentLocation": {
      "lat": 19.1209,
      "lng": 72.8442
    },
    "routePath": [
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.1225,
        "lng": 72.8111
      }
    ]
  },
  {
    "id": "BMF2_202",
    "number": "MF-2",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Lokhandwala",
      "to": "Andheri Station",
      "stops": [
        "Lokhandwala",
        "Andheri Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:06",
        "arrival": "07:53"
      },
      {
        "departure": "08:12",
        "arrival": "09:06"
      },
      {
        "departure": "09:18",
        "arrival": "10:19"
      },
      {
        "departure": "10:24",
        "arrival": "11:32"
      },
      {
        "departure": "11:30",
        "arrival": "12:10"
      },
      {
        "departure": "12:36",
        "arrival": "13:23"
      },
      {
        "departure": "13:42",
        "arrival": "14:36"
      }
    ],
    "fare": 10,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#34d399",
    "currentLocation": {
      "lat": 19.1221,
      "lng": 72.8454
    },
    "routePath": [
      {
        "lat": 19.1415,
        "lng": 72.8258
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      }
    ]
  },
  {
    "id": "BMF3_203",
    "number": "MF-3",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Ghatkopar Station",
      "to": "Airport Terminal 2",
      "stops": [
        "Ghatkopar Station",
        "Sakinaka",
        "Airport Terminal 2"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:17",
        "arrival": "09:04"
      },
      {
        "departure": "09:34",
        "arrival": "10:28"
      },
      {
        "departure": "10:51",
        "arrival": "11:52"
      },
      {
        "departure": "12:08",
        "arrival": "13:16"
      },
      {
        "departure": "13:25",
        "arrival": "14:05"
      },
      {
        "departure": "14:42",
        "arrival": "15:29"
      },
      {
        "departure": "15:59",
        "arrival": "16:53"
      }
    ],
    "fare": 15,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#f43f5e",
    "currentLocation": {
      "lat": 19.1061,
      "lng": 72.8875
    },
    "routePath": [
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.1025,
        "lng": 72.8875
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      }
    ]
  },
  {
    "id": "BMF4_204",
    "number": "MF-4",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Airport Terminal 1",
      "to": "BKC (Bandra Kurla Complex)",
      "stops": [
        "Airport Terminal 1",
        "Santacruz Station",
        "BKC (Bandra Kurla Complex)"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:28",
        "arrival": "10:15"
      },
      {
        "departure": "10:56",
        "arrival": "11:50"
      },
      {
        "departure": "12:24",
        "arrival": "13:25"
      },
      {
        "departure": "13:52",
        "arrival": "15:00"
      },
      {
        "departure": "15:20",
        "arrival": "16:00"
      },
      {
        "departure": "16:48",
        "arrival": "17:35"
      },
      {
        "departure": "18:16",
        "arrival": "19:10"
      }
    ],
    "fare": 15,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#818cf8",
    "currentLocation": {
      "lat": 19.0626,
      "lng": 72.8699
    },
    "routePath": [
      {
        "lat": 19.0886,
        "lng": 72.8535
      },
      {
        "lat": 19.0819,
        "lng": 72.8441
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      }
    ]
  },
  {
    "id": "BMF5_205",
    "number": "MF-5",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Mindspace Malad",
      "stops": [
        "Borivali Station",
        "Kandivali Station",
        "Mindspace Malad"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "05:59",
        "arrival": "06:46"
      },
      {
        "departure": "06:58",
        "arrival": "07:52"
      },
      {
        "departure": "07:57",
        "arrival": "08:58"
      },
      {
        "departure": "08:56",
        "arrival": "10:04"
      },
      {
        "departure": "09:55",
        "arrival": "10:35"
      },
      {
        "departure": "10:54",
        "arrival": "11:41"
      },
      {
        "departure": "11:53",
        "arrival": "12:47"
      }
    ],
    "fare": 10,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#10b981",
    "currentLocation": {
      "lat": 19.2283,
      "lng": 72.8591
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.1783,
        "lng": 72.834
      }
    ]
  },
  {
    "id": "BMF6_206",
    "number": "MF-6",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Thane Station",
      "to": "Nahur",
      "stops": [
        "Thane Station",
        "Mulund Station",
        "Nahur"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:10",
        "arrival": "07:57"
      },
      {
        "departure": "08:20",
        "arrival": "09:14"
      },
      {
        "departure": "09:30",
        "arrival": "10:31"
      },
      {
        "departure": "10:40",
        "arrival": "11:48"
      },
      {
        "departure": "11:50",
        "arrival": "12:30"
      },
      {
        "departure": "13:00",
        "arrival": "13:47"
      },
      {
        "departure": "14:10",
        "arrival": "15:04"
      }
    ],
    "fare": 10,
    "totalSeats": 32,
    "busType": "Minibus",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Compact Transit",
      "Fast Boarding"
    ],
    "color": "#6366f1",
    "currentLocation": {
      "lat": 19.172,
      "lng": 72.9518
    },
    "routePath": [
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.1732,
        "lng": 72.9542
      },
      {
        "lat": 19.158,
        "lng": 72.946
      }
    ]
  },
  {
    "id": "BAS1_207",
    "number": "AS-1",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Colaba",
      "to": "Airport Terminal 2",
      "stops": [
        "Colaba",
        "CST / VT",
        "Bandra Station",
        "Airport Terminal 2"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:21",
        "arrival": "09:08"
      },
      {
        "departure": "09:42",
        "arrival": "10:36"
      },
      {
        "departure": "11:03",
        "arrival": "12:04"
      },
      {
        "departure": "12:24",
        "arrival": "13:32"
      },
      {
        "departure": "13:45",
        "arrival": "14:25"
      },
      {
        "departure": "15:06",
        "arrival": "15:53"
      },
      {
        "departure": "16:27",
        "arrival": "17:21"
      }
    ],
    "fare": 50,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#ec4899",
    "currentLocation": {
      "lat": 19.0544,
      "lng": 72.839
    },
    "routePath": [
      {
        "lat": 18.9067,
        "lng": 72.8147
      },
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      }
    ]
  },
  {
    "id": "BAS2_208",
    "number": "AS-2",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Airport Terminal 2",
      "stops": [
        "Borivali Station",
        "Andheri Station",
        "Airport Terminal 1",
        "Airport Terminal 2"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:32",
        "arrival": "10:19"
      },
      {
        "departure": "11:04",
        "arrival": "11:58"
      },
      {
        "departure": "12:36",
        "arrival": "13:37"
      },
      {
        "departure": "14:08",
        "arrival": "15:16"
      },
      {
        "departure": "15:40",
        "arrival": "16:20"
      },
      {
        "departure": "17:12",
        "arrival": "17:59"
      },
      {
        "departure": "18:44",
        "arrival": "19:38"
      }
    ],
    "fare": 45,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#14b8a6",
    "currentLocation": {
      "lat": 19.094,
      "lng": 72.8613
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.0886,
        "lng": 72.8535
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      }
    ]
  },
  {
    "id": "BAS3_209",
    "number": "AS-3",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Thane Station",
      "to": "Airport Terminal 2",
      "stops": [
        "Thane Station",
        "Ghatkopar Station",
        "Airport Terminal 2"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:03",
        "arrival": "06:50"
      },
      {
        "departure": "07:06",
        "arrival": "08:00"
      },
      {
        "departure": "08:09",
        "arrival": "09:10"
      },
      {
        "departure": "09:12",
        "arrival": "10:20"
      },
      {
        "departure": "10:15",
        "arrival": "10:55"
      },
      {
        "departure": "11:18",
        "arrival": "12:05"
      },
      {
        "departure": "12:21",
        "arrival": "13:15"
      }
    ],
    "fare": 40,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#00c9ff",
    "currentLocation": {
      "lat": 19.0856,
      "lng": 72.9085
    },
    "routePath": [
      {
        "lat": 19.1833,
        "lng": 72.9667
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      }
    ]
  },
  {
    "id": "BAS4_210",
    "number": "AS-4",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Vashi",
      "to": "Airport Terminal 2",
      "stops": [
        "Vashi",
        "Chembur",
        "Kurla Station",
        "Airport Terminal 2"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:14",
        "arrival": "08:01"
      },
      {
        "departure": "08:28",
        "arrival": "09:22"
      },
      {
        "departure": "09:42",
        "arrival": "10:43"
      },
      {
        "departure": "10:56",
        "arrival": "12:04"
      },
      {
        "departure": "12:10",
        "arrival": "12:50"
      },
      {
        "departure": "13:24",
        "arrival": "14:11"
      },
      {
        "departure": "14:38",
        "arrival": "15:32"
      }
    ],
    "fare": 45,
    "totalSeats": 46,
    "busType": "AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#22d3a0",
    "currentLocation": {
      "lat": 19.0663,
      "lng": 72.9033
    },
    "routePath": [
      {
        "lat": 19.0771,
        "lng": 72.9986
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.0928,
        "lng": 72.8613
      }
    ]
  },
  {
    "id": "BC20_211",
    "number": "C-20",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "BKC (Bandra Kurla Complex)",
      "to": "Powai Lake",
      "stops": [
        "BKC (Bandra Kurla Complex)",
        "Kurla Station",
        "Ghatkopar Station",
        "Powai Lake"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:25",
        "arrival": "09:12"
      },
      {
        "departure": "09:50",
        "arrival": "10:44"
      },
      {
        "departure": "11:15",
        "arrival": "12:16"
      },
      {
        "departure": "12:40",
        "arrival": "13:48"
      },
      {
        "departure": "14:05",
        "arrival": "14:45"
      },
      {
        "departure": "15:30",
        "arrival": "16:17"
      },
      {
        "departure": "16:55",
        "arrival": "17:49"
      }
    ],
    "fare": 22,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#4f8cff",
    "currentLocation": {
      "lat": 19.0796,
      "lng": 72.9049
    },
    "routePath": [
      {
        "lat": 19.0662,
        "lng": 72.8687
      },
      {
        "lat": 19.0636,
        "lng": 72.8797
      },
      {
        "lat": 19.0832,
        "lng": 72.9073
      },
      {
        "lat": 19.1197,
        "lng": 72.9057
      }
    ]
  },
  {
    "id": "BC25_212",
    "number": "C-25",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Nariman Point",
      "to": "BKC (Bandra Kurla Complex)",
      "stops": [
        "Nariman Point",
        "Marine Lines",
        "Dadar Station",
        "BKC (Bandra Kurla Complex)"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "08:56",
        "arrival": "09:43"
      },
      {
        "departure": "09:52",
        "arrival": "10:46"
      },
      {
        "departure": "10:48",
        "arrival": "11:49"
      },
      {
        "departure": "11:44",
        "arrival": "12:52"
      },
      {
        "departure": "12:40",
        "arrival": "13:20"
      },
      {
        "departure": "13:36",
        "arrival": "14:23"
      },
      {
        "departure": "14:32",
        "arrival": "15:26"
      }
    ],
    "fare": 30,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#00f5c4",
    "currentLocation": {
      "lat": 19.0638,
      "lng": 72.8675
    },
    "routePath": [
      {
        "lat": 18.9258,
        "lng": 72.8218
      },
      {
        "lat": 18.9433,
        "lng": 72.8236
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      }
    ]
  },
  {
    "id": "BC35_213",
    "number": "C-35",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Worli Sea Face",
      "to": "BKC (Bandra Kurla Complex)",
      "stops": [
        "Worli Sea Face",
        "Prabhadevi",
        "Bandra Station",
        "BKC (Bandra Kurla Complex)"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:07",
        "arrival": "06:54"
      },
      {
        "departure": "07:14",
        "arrival": "08:08"
      },
      {
        "departure": "08:21",
        "arrival": "09:22"
      },
      {
        "departure": "09:28",
        "arrival": "10:36"
      },
      {
        "departure": "10:35",
        "arrival": "11:15"
      },
      {
        "departure": "11:42",
        "arrival": "12:29"
      },
      {
        "departure": "12:49",
        "arrival": "13:43"
      }
    ],
    "fare": 20,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ffd166",
    "currentLocation": {
      "lat": 19.0145,
      "lng": 72.8177
    },
    "routePath": [
      {
        "lat": 19.0157,
        "lng": 72.8177
      },
      {
        "lat": 19.0166,
        "lng": 72.8295
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.0662,
        "lng": 72.8687
      }
    ]
  },
  {
    "id": "BN1_214",
    "number": "N-1",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "CST / VT",
      "to": "Borivali Station",
      "stops": [
        "CST / VT",
        "Dadar Station",
        "Bandra Station",
        "Andheri Station",
        "Borivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:18",
        "arrival": "08:05"
      },
      {
        "departure": "08:36",
        "arrival": "09:30"
      },
      {
        "departure": "09:54",
        "arrival": "10:55"
      },
      {
        "departure": "11:12",
        "arrival": "12:20"
      },
      {
        "departure": "12:30",
        "arrival": "13:10"
      },
      {
        "departure": "13:48",
        "arrival": "14:35"
      },
      {
        "departure": "15:06",
        "arrival": "16:00"
      }
    ],
    "fare": 35,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#a855f7",
    "currentLocation": {
      "lat": 19.1197,
      "lng": 72.8478
    },
    "routePath": [
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      }
    ]
  },
  {
    "id": "BN2_215",
    "number": "N-2",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "CST / VT",
      "to": "Vashi",
      "stops": [
        "CST / VT",
        "Byculla",
        "Dadar TT",
        "Chembur",
        "Vashi"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:29",
        "arrival": "09:16"
      },
      {
        "departure": "09:58",
        "arrival": "10:52"
      },
      {
        "departure": "11:27",
        "arrival": "12:28"
      },
      {
        "departure": "12:56",
        "arrival": "14:04"
      },
      {
        "departure": "14:25",
        "arrival": "15:05"
      },
      {
        "departure": "15:54",
        "arrival": "16:41"
      },
      {
        "departure": "17:23",
        "arrival": "18:17"
      }
    ],
    "fare": 30,
    "totalSeats": 58,
    "busType": "Non-AC",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Standard BEST Fare"
    ],
    "color": "#ff9a3c",
    "currentLocation": {
      "lat": 19.0783,
      "lng": 73.001
    },
    "routePath": [
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9763,
        "lng": 72.8335
      },
      {
        "lat": 19.0195,
        "lng": 72.8491
      },
      {
        "lat": 19.0627,
        "lng": 72.9009
      },
      {
        "lat": 19.0771,
        "lng": 72.9986
      }
    ]
  },
  {
    "id": "BN3_216",
    "number": "N-3",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Churchgate",
      "to": "Thane Station",
      "stops": [
        "Churchgate",
        "Mumbai Central",
        "Dadar Station",
        "Thane Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:00",
        "arrival": "09:47"
      },
      {
        "departure": "10:00",
        "arrival": "10:54"
      },
      {
        "departure": "11:00",
        "arrival": "12:01"
      },
      {
        "departure": "12:00",
        "arrival": "13:08"
      },
      {
        "departure": "13:00",
        "arrival": "13:40"
      },
      {
        "departure": "14:00",
        "arrival": "14:47"
      },
      {
        "departure": "15:00",
        "arrival": "15:54"
      }
    ],
    "fare": 40,
    "totalSeats": 46,
    "busType": "AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#ff5571",
    "currentLocation": {
      "lat": 19.1857,
      "lng": 72.9643
    },
    "routePath": [
      {
        "lat": 18.935,
        "lng": 72.8259
      },
      {
        "lat": 18.9696,
        "lng": 72.8194
      },
      {
        "lat": 19.0178,
        "lng": 72.8442
      },
      {
        "lat": 19.1833,
        "lng": 72.9667
      }
    ]
  },
  {
    "id": "B210X_217",
    "number": "210X",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "CST / VT",
      "to": "Borivali Station",
      "stops": [
        "CST / VT",
        "Marine Lines",
        "Bandra Station",
        "Andheri Station",
        "Malad Station",
        "Kandivali Station",
        "Borivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:11",
        "arrival": "06:58"
      },
      {
        "departure": "07:22",
        "arrival": "08:16"
      },
      {
        "departure": "08:33",
        "arrival": "09:34"
      },
      {
        "departure": "09:44",
        "arrival": "10:52"
      },
      {
        "departure": "10:55",
        "arrival": "11:35"
      },
      {
        "departure": "12:06",
        "arrival": "12:53"
      },
      {
        "departure": "13:17",
        "arrival": "14:11"
      }
    ],
    "fare": 35,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#38bdf8",
    "currentLocation": {
      "lat": 19.2343,
      "lng": 72.8555
    },
    "routePath": [
      {
        "lat": 18.9399,
        "lng": 72.8355
      },
      {
        "lat": 18.9433,
        "lng": 72.8236
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      }
    ]
  },
  {
    "id": "B202X_218",
    "number": "202X",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Gorai Creek",
      "to": "Goregaon Station",
      "stops": [
        "Gorai Creek",
        "Borivali Station",
        "Kandivali Station",
        "Malad Station",
        "Goregaon Station"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:22",
        "arrival": "08:09"
      },
      {
        "departure": "08:44",
        "arrival": "09:38"
      },
      {
        "departure": "10:06",
        "arrival": "11:07"
      },
      {
        "departure": "11:28",
        "arrival": "12:36"
      },
      {
        "departure": "12:50",
        "arrival": "13:30"
      },
      {
        "departure": "14:12",
        "arrival": "14:59"
      },
      {
        "departure": "15:34",
        "arrival": "16:28"
      }
    ],
    "fare": 18,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#34d399",
    "currentLocation": {
      "lat": 19.201,
      "lng": 72.8468
    },
    "routePath": [
      {
        "lat": 19.2361,
        "lng": 72.831
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      }
    ]
  },
  {
    "id": "B203X_219",
    "number": "203X",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Dahisar",
      "to": "Andheri Station",
      "stops": [
        "Dahisar",
        "Borivali Station",
        "Kandivali Station",
        "Mindspace Malad",
        "Andheri Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "08:33",
        "arrival": "09:20"
      },
      {
        "departure": "10:06",
        "arrival": "11:00"
      },
      {
        "departure": "11:39",
        "arrival": "12:40"
      },
      {
        "departure": "13:12",
        "arrival": "14:20"
      },
      {
        "departure": "14:45",
        "arrival": "15:25"
      },
      {
        "departure": "16:18",
        "arrival": "17:05"
      },
      {
        "departure": "17:51",
        "arrival": "18:45"
      }
    ],
    "fare": 25,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#f43f5e",
    "currentLocation": {
      "lat": 19.1759,
      "lng": 72.8352
    },
    "routePath": [
      {
        "lat": 19.257,
        "lng": 72.859
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.1783,
        "lng": 72.834
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      }
    ]
  },
  {
    "id": "B204X_220",
    "number": "204X",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Mira Road",
      "to": "Kandivali Station",
      "stops": [
        "Mira Road",
        "Dahisar",
        "Borivali Station",
        "Kandivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:04",
        "arrival": "09:51"
      },
      {
        "departure": "10:08",
        "arrival": "11:02"
      },
      {
        "departure": "11:12",
        "arrival": "12:13"
      },
      {
        "departure": "12:16",
        "arrival": "13:24"
      },
      {
        "departure": "13:20",
        "arrival": "14:00"
      },
      {
        "departure": "14:24",
        "arrival": "15:11"
      },
      {
        "departure": "15:28",
        "arrival": "16:22"
      }
    ],
    "fare": 15,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#818cf8",
    "currentLocation": {
      "lat": 19.2034,
      "lng": 72.8492
    },
    "routePath": [
      {
        "lat": 19.2812,
        "lng": 72.856
      },
      {
        "lat": 19.257,
        "lng": 72.859
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      }
    ]
  },
  {
    "id": "B205X_221",
    "number": "205X",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Bhayandar",
      "to": "Borivali Station",
      "stops": [
        "Bhayandar",
        "Mira Road",
        "Dahisar",
        "Borivali Station"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:15",
        "arrival": "07:02"
      },
      {
        "departure": "07:30",
        "arrival": "08:24"
      },
      {
        "departure": "08:45",
        "arrival": "09:46"
      },
      {
        "departure": "10:00",
        "arrival": "11:08"
      },
      {
        "departure": "11:15",
        "arrival": "11:55"
      },
      {
        "departure": "12:30",
        "arrival": "13:17"
      },
      {
        "departure": "13:45",
        "arrival": "14:39"
      }
    ],
    "fare": 20,
    "totalSeats": 46,
    "busType": "AC",
    "status": "LIVE",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#10b981",
    "currentLocation": {
      "lat": 19.3015,
      "lng": 72.85
    },
    "routePath": [
      {
        "lat": 19.3015,
        "lng": 72.8524
      },
      {
        "lat": 19.2812,
        "lng": 72.856
      },
      {
        "lat": 19.257,
        "lng": 72.859
      },
      {
        "lat": 19.2307,
        "lng": 72.8567
      }
    ]
  },
  {
    "id": "B207X_222",
    "number": "207X",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Versova",
      "stops": [
        "Borivali Station",
        "Kandivali Station",
        "Malad Station",
        "Versova"
      ]
    },
    "schedule": [
      {
        "departure": "06:00",
        "arrival": "06:40"
      },
      {
        "departure": "07:26",
        "arrival": "08:13"
      },
      {
        "departure": "08:52",
        "arrival": "09:46"
      },
      {
        "departure": "10:18",
        "arrival": "11:19"
      },
      {
        "departure": "11:44",
        "arrival": "12:52"
      },
      {
        "departure": "13:10",
        "arrival": "13:50"
      },
      {
        "departure": "14:36",
        "arrival": "15:23"
      },
      {
        "departure": "16:02",
        "arrival": "16:56"
      }
    ],
    "fare": 22,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "ON TIME",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#6366f1",
    "currentLocation": {
      "lat": 19.2058,
      "lng": 72.8456
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.2046,
        "lng": 72.8468
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1225,
        "lng": 72.8111
      }
    ]
  },
  {
    "id": "B212X_223",
    "number": "212X",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Malad Station",
      "to": "Andheri Station",
      "stops": [
        "Malad Station",
        "Mindspace Malad",
        "Goregaon Station",
        "Jogeshwari",
        "Andheri Station"
      ]
    },
    "schedule": [
      {
        "departure": "07:00",
        "arrival": "07:40"
      },
      {
        "departure": "07:57",
        "arrival": "08:44"
      },
      {
        "departure": "08:54",
        "arrival": "09:48"
      },
      {
        "departure": "09:51",
        "arrival": "10:52"
      },
      {
        "departure": "10:48",
        "arrival": "11:56"
      },
      {
        "departure": "11:45",
        "arrival": "12:25"
      },
      {
        "departure": "12:42",
        "arrival": "13:29"
      },
      {
        "departure": "13:39",
        "arrival": "14:33"
      }
    ],
    "fare": 15,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DELAYED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#ec4899",
    "currentLocation": {
      "lat": 19.1687,
      "lng": 72.8493
    },
    "routePath": [
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1783,
        "lng": 72.834
      },
      {
        "lat": 19.1663,
        "lng": 72.8493
      },
      {
        "lat": 19.135,
        "lng": 72.849
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      }
    ]
  },
  {
    "id": "B224X_224",
    "number": "224X",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Borivali Station",
      "to": "Bandra Station",
      "stops": [
        "Borivali Station",
        "Malad Station",
        "Andheri Station",
        "Vile Parle Station",
        "Bandra Station"
      ]
    },
    "schedule": [
      {
        "departure": "08:00",
        "arrival": "08:40"
      },
      {
        "departure": "09:08",
        "arrival": "09:55"
      },
      {
        "departure": "10:16",
        "arrival": "11:10"
      },
      {
        "departure": "11:24",
        "arrival": "12:25"
      },
      {
        "departure": "12:32",
        "arrival": "13:40"
      },
      {
        "departure": "13:40",
        "arrival": "14:20"
      },
      {
        "departure": "14:48",
        "arrival": "15:35"
      },
      {
        "departure": "15:56",
        "arrival": "16:50"
      }
    ],
    "fare": 30,
    "totalSeats": 46,
    "busType": "AC",
    "status": "ARRIVING",
    "amenities": [
      "GPS Tracked",
      "Air Conditioned",
      "USB Charging",
      "CCTV"
    ],
    "color": "#14b8a6",
    "currentLocation": {
      "lat": 19.102,
      "lng": 72.847
    },
    "routePath": [
      {
        "lat": 19.2307,
        "lng": 72.8567
      },
      {
        "lat": 19.1865,
        "lng": 72.8486
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.0984,
        "lng": 72.8458
      },
      {
        "lat": 19.0544,
        "lng": 72.8402
      }
    ]
  },
  {
    "id": "B235X_225",
    "number": "235X",
    "type": "BEST",
    "operator": "BEST",
    "route": {
      "from": "Versova",
      "to": "SEEPZ Andheri",
      "stops": [
        "Versova",
        "Lokhandwala",
        "Andheri Station",
        "MIDC Andheri",
        "SEEPZ Andheri"
      ]
    },
    "schedule": [
      {
        "departure": "05:00",
        "arrival": "05:40"
      },
      {
        "departure": "06:19",
        "arrival": "07:06"
      },
      {
        "departure": "07:38",
        "arrival": "08:32"
      },
      {
        "departure": "08:57",
        "arrival": "09:58"
      },
      {
        "departure": "10:16",
        "arrival": "11:24"
      },
      {
        "departure": "11:35",
        "arrival": "12:15"
      },
      {
        "departure": "12:54",
        "arrival": "13:41"
      },
      {
        "departure": "14:13",
        "arrival": "15:07"
      }
    ],
    "fare": 18,
    "totalSeats": 42,
    "busType": "Electric",
    "status": "DEPARTED",
    "amenities": [
      "GPS Tracked",
      "Electric",
      "Air Conditioned",
      "USB Charging"
    ],
    "color": "#00c9ff",
    "currentLocation": {
      "lat": 19.1154,
      "lng": 72.8764
    },
    "routePath": [
      {
        "lat": 19.1225,
        "lng": 72.8111
      },
      {
        "lat": 19.1415,
        "lng": 72.8258
      },
      {
        "lat": 19.1197,
        "lng": 72.8466
      },
      {
        "lat": 19.1235,
        "lng": 72.8621
      },
      {
        "lat": 19.119,
        "lng": 72.874
      }
    ]
  }
]

// Helper function
export function BUS_TYPE_FROM_ID(id) {
  return 'BEST'
}

// Get booked seats count for a bus from localStorage
export function getBookedSeats(busId) {
  try {
    const bookings = JSON.parse(localStorage.getItem('onbus_bookings') || '[]')
    return bookings
      .filter(b => b.busId === busId && b.status !== 'CANCELLED')
      .flatMap(b => b.seats)
  } catch {
    return []
  }
}

// Get available seat count for a bus at a given time
export function getAvailableSeats(bus, departureTime) {
  if (!bus) return 0
  const booked = getBookedSeats(bus.id)
  return Math.max(0, bus.totalSeats - booked.length)
}

// Search buses by route
export function searchBuses(from, to, date) {
  if (!from && !to) return BUSES
  return BUSES.filter(bus => {
    const fromMatch = !from || bus.route.from.toLowerCase().includes(from.toLowerCase()) ||
      bus.route.stops.some(s => s.toLowerCase().includes(from.toLowerCase()))
    const toMatch = !to || bus.route.to.toLowerCase().includes(to.toLowerCase()) ||
      bus.route.stops.some(s => s.toLowerCase().includes(to.toLowerCase()))
    return fromMatch && toMatch
  })
}

// Get app statistics
export function getAppStats() {
  const activeBuses = BUSES.filter(b => b.status === BUS_STATUS.LIVE || b.status === BUS_STATUS.ON_TIME || b.status === BUS_STATUS.ARRIVING).length
  return {
    activeBuses,
    routes: new Set(BUSES.map(b => `${b.route.from}-${b.route.to}`)).size,
    totalBuses: BUSES.length,
    avgETA: '6 min'
  }
}

// Generate seat layout for booking
export function generateSeatLayout(bus) {
  const bookedSeats = getBookedSeats(bus.id)
  const seats = []
  const rows = Math.ceil(bus.totalSeats / 4)

  for (let row = 1; row <= rows; row++) {
    const rowSeats = []
    for (let col of ['A', 'B', '', 'C', 'D']) {
      if (col === '') {
        rowSeats.push({ type: 'aisle' })
        continue
      }
      const seatNumber = `${row}${col}`
      const seatIndex = (row - 1) * 4 + (col === 'A' ? 0 : col === 'B' ? 1 : col === 'C' ? 2 : 3)
      if (seatIndex < bus.totalSeats) {
        rowSeats.push({
          id: seatNumber,
          status: bookedSeats.includes(seatNumber) ? 'occupied' : 'available',
          row,
          col
        })
      }
    }
    seats.push(rowSeats)
  }

  return seats
}

export default BUSES
