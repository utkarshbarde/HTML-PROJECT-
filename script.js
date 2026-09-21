/* =========================================================================
   RAILNEX AI — SIH 2026 (PS 26027) interactive prototype
   Single-file demo. All operational data below is simulated for the demo.
   ========================================================================= */

/* ---------- Mock data ---------- */

const REQUESTS = [
  {id:'MR-1042', dept:'Track', division:'Wardha', section:'Nagpur–Wardha, KM 12+300', type:'Rail fracture repair', criticality:92, urgency:85, impact:74, duration:50, resources:'Track gang (6) + tamping machine', date:'2026-09-22', time:'14:00', status:'Pending', source:'TMS', note:'Ultrasonic flaw detection flagged a transverse fracture risk on the outer rail.'},
  {id:'MR-1043', dept:'Signal', division:'Wardha', section:'Nagpur–Wardha, KM 12+450', type:'Signal relay replacement', criticality:78, urgency:88, impact:66, duration:50, resources:'Signal maintainer (2) + relay kit', date:'2026-09-22', time:'14:30', status:'Pending', source:'SMMS', note:'Intermittent relay fault reported on block signal NB-14; same corridor as MR-1042.'},
  {id:'MR-1044', dept:'Telecom', division:'Wardha', section:'Wardha Yard, Cabin 3', type:'Optical fibre fault', criticality:54, urgency:60, impact:40, duration:35, resources:'Telecom technician (2)', date:'2026-09-22', time:'16:00', status:'Pending', source:'SMMS', note:'Degraded signal on the OFC link supporting axle-counter data at Cabin 3.'},
  {id:'MR-1045', dept:'Traction', division:'Itarsi', section:'Nagpur–Itarsi, KM 44+000', type:'OHE insulator replacement', criticality:81, urgency:70, impact:58, duration:90, resources:'Traction crew (4) + tower wagon', date:'2026-09-23', time:'02:00', status:'Pending', source:'TDMS', note:'Two insulators show tracking marks during night inspection; scheduled for traffic block window.'},
  {id:'MR-1046', dept:'Track', division:'Itarsi', section:'Nagpur–Itarsi, KM 61+200', type:'Ballast deep screening', criticality:63, urgency:48, impact:52, duration:180, resources:'BCM machine + track gang (10)', date:'2026-09-24', time:'01:00', status:'Pending', source:'TMS', note:'Cyclic ballast renewal due as per maintenance calendar.'},
  {id:'MR-1047', dept:'Bridge/Disaster', division:'Wardha', section:'Wardha River Bridge, Br. No. 118', type:'Pier inspection & grouting', criticality:88, urgency:55, impact:70, duration:120, resources:'Bridge inspection team + grouting unit', date:'2026-09-25', time:'10:00', status:'Pending', source:'TMS', note:'Routine annual inspection flagged minor grout loss at pier 4, non-urgent but high criticality asset.'},
  {id:'MR-1048', dept:'Signal', division:'Wardha', section:'Nagpur–Wardha, KM 12+300', type:'Point machine servicing', criticality:70, urgency:65, impact:55, duration:40, resources:'Signal maintainer (2)', date:'2026-09-22', time:'14:40', status:'Pending', source:'SMMS', note:'Preventive servicing of point machine sharing the same corridor and near-identical window as MR-1042/1043.'},
  {id:'MR-1049', dept:'Track', division:'Itarsi', section:'Itarsi Yard, Line 4', type:'Rail joint welding', criticality:40, urgency:35, impact:30, duration:60, resources:'Welding crew (3)', date:'2026-09-26', time:'11:00', status:'Pending', source:'TMS', note:'Low-priority joint welding, ample scheduling flexibility.'},
  {id:'MR-1050', dept:'Track', division:'Nagpur', section:'Nagpur Yard, Line 2', type:'Rail surface inspection', criticality:58, urgency:50, impact:40, duration:40, resources:'Track inspector (2)', date:'2026-09-22', time:'09:00', status:'Pending', source:'TMS', note:'Scheduled ultrasonic inspection ahead of festival-season traffic increase.'},
  {id:'MR-1057', dept:'Track', division:'Nagpur', section:'Nagpur Yard, Line 5', type:'Ballast tamping', criticality:62, urgency:52, impact:44, duration:70, resources:'Tamping machine + track gang (4)', date:'2026-09-22', time:'11:30', status:'Pending', source:'TMS', note:'Track geometry car flagged mild unevenness near the goods siding.'},
  {id:'MR-1051', dept:'Signal', division:'Nagpur', section:'Nagpur Yard, Cabin A', type:'Signal cable fault rectification', criticality:71, urgency:68, impact:48, duration:55, resources:'Signal maintainer (3)', date:'2026-09-23', time:'13:00', status:'Pending', source:'SMMS', note:'Cable insulation fault reported by the last shift, intermittent indication loss on Cabin A panel.'},
  {id:'MR-1052', dept:'Telecom', division:'Nagpur', section:'Nagpur Yard, Cabin A', type:'OFC splicing', criticality:45, urgency:40, impact:30, duration:45, resources:'Telecom technician (2)', date:'2026-09-24', time:'15:00', status:'Pending', source:'SMMS', note:'Minor signal loss on a redundant OFC link; not service-affecting yet.'},
  {id:'MR-1056', dept:'Telecom', division:'Itarsi', section:'Itarsi Yard, Cabin 2', type:'Telecom relay fault', criticality:49, urgency:44, impact:32, duration:30, resources:'Telecom technician (1)', date:'2026-09-22', time:'12:15', status:'Pending', source:'SMMS', note:'Minor relay chatter reported on the yard telecom panel overnight.'},
  {id:'MR-1058', dept:'Track', division:'Itarsi', section:'Itarsi Yard, Line 2', type:'Rail fastener check', criticality:48, urgency:42, impact:35, duration:35, resources:'Track gang (3)', date:'2026-09-22', time:'10:00', status:'Pending', source:'TMS', note:'Routine fastener tightness check as part of the monthly yard inspection.'},
  {id:'MR-1053', dept:'Traction', division:'Nagpur', section:'Nagpur Yard, OHE Section 3', type:'OHE contact wire wear check', criticality:76, urgency:60, impact:55, duration:65, resources:'Traction crew (3)', date:'2026-09-29', time:'02:30', status:'Pending', source:'TDMS', note:'Contact wire wear approaching threshold on Section 3; flagged by the wear-measuring car.'},
  {id:'MR-1054', dept:'Track', division:'Wardha', section:'Nagpur–Wardha, KM 12+600', type:'Rail grinding', criticality:50, urgency:40, impact:35, duration:80, resources:'Rail grinding unit', date:'2026-09-30', time:'01:00', status:'Pending', source:'TMS', note:'Corrugation buildup noted during the last patrol; scheduled for a night grinding pass.'},
  {id:'MR-1055', dept:'Signal', division:'Itarsi', section:'Nagpur–Itarsi, KM 58+000', type:'Axle counter fault', criticality:73, urgency:66, impact:50, duration:45, resources:'Signal maintainer (2)', date:'2026-09-29', time:'04:00', status:'Pending', source:'SMMS', note:'Axle counter reset needed after two false occupancy indications this week.'},
  {id:'MR-1059', dept:'Track', division:'Itarsi', section:'Itarsi Yard, Line 3', type:'Ballast fouling rectification', criticality:55, urgency:46, impact:38, duration:60, resources:'Ballast cleaning unit + track gang (5)', date:'2026-10-04', time:'02:00', status:'Pending', source:'TMS', note:'Drainage inspection flagged fouled ballast reducing track modulus.'},
  {id:'MR-1060', dept:'Signal', division:'Itarsi', section:'Nagpur–Itarsi, KM 58+000', type:'Axle counter replacement', criticality:79, urgency:72, impact:54, duration:45, resources:'Signal maintainer (2) + spares', date:'2026-10-05', time:'04:00', status:'Pending', source:'SMMS', note:'Repeat fault after last reset — unit needs full replacement, not just reset.'},
  {id:'MR-1061', dept:'Traction', division:'Nagpur', section:'Nagpur Yard, OHE Section 3', type:'Pantograph wear inspection', criticality:52, urgency:44, impact:36, duration:65, resources:'Traction crew (2)', date:'2026-10-05', time:'02:30', status:'Pending', source:'TDMS', note:'Routine pantograph contact-strip wear check ahead of monsoon maintenance cycle.'},
];

const TRAINS = [
  {no:'12001', name:'Shatabdi Express', section:'Nagpur–Wardha', eta:'15:15', priority:'Superfast'},
  {no:'12102', name:'Nagpur–Itarsi Passenger', section:'Nagpur–Itarsi', eta:'02:20', priority:'Passenger'},
  {no:'58831', name:'Freight — Coal Rake', section:'Nagpur–Wardha', eta:'15:05', priority:'Goods'},
];

// AI prioritization = weighted read of criticality + urgency + impact (demo weights only)
function priorityScore(r){
  const score = Math.round(r.criticality*0.45 + r.urgency*0.35 + r.impact*0.20);
  let band = 'LOW';
  if(score>=80) band='HIGH'; else if(score>=60) band='MEDIUM';
  return {score, band};
}

const CONFLICTS = [
  {
    id:'C-204', severity:'HIGH', section:'Nagpur–Wardha, KM 12+300–12+450',
    items:[
      {label:'MR-1042 · Track — Rail fracture repair', window:'14:00–14:50'},
      {label:'MR-1043 · Signal — Relay replacement', window:'14:30–15:20'},
      {label:'MR-1048 · Signal — Point machine servicing', window:'14:40–15:20'},
    ],
    train:{no:'12001', label:'Shatabdi Express (Superfast)', eta:'15:15'},
    reason:'Three maintenance activities overlap on the same corridor segment, and a superfast train is scheduled through the section during the overlap.',
    recommendation:'Combine MR-1042, MR-1043 and MR-1048 into one coordinated block (14:15–15:35) and hold the corridor for a single disconnection instead of three overlapping ones.',
    alt:'Alternative: retime MR-1043/MR-1048 to 15:45–16:35, after train 12001 clears the section.',
    status:'Open'
  },
  {
    id:'C-207', severity:'MEDIUM', section:'Nagpur–Itarsi, KM 44+000',
    items:[
      {label:'MR-1045 · Traction — OHE insulator replacement', window:'02:00–03:30'},
    ],
    train:{no:'12102', label:'Nagpur–Itarsi Passenger', eta:'02:20'},
    reason:'A traction block on OHE overlaps a passenger service; power block would require the train to be held or diverted.',
    recommendation:'Shift the traction block to 03:30–05:00, after train 12102 clears KM 44+000.',
    alt:'Alternative: request a short traffic block and hold 12102 at the previous block station for 12 minutes.',
    status:'Open'
  },
  {
    id:'C-211', severity:'LOW', section:'Wardha Yard, Cabin 3 / Line 4',
    items:[
      {label:'MR-1044 · Telecom — OFC fault rectification', window:'16:00–16:35'},
    ],
    train:{no:'—', label:'No scheduled movement in window', eta:'—'},
    reason:'Shared technician pool with MR-1049 (Itarsi Yard) creates a resourcing overlap, not a corridor conflict.',
    recommendation:'Sequence MR-1044 before MR-1049; same crew can cover both with 90 minutes of travel buffer.',
    alt:'Alternative: assign a second technician pair from the Itarsi depot roster.',
    status:'Open'
  },
];

const TODAY_ISO = '2026-09-22';
let scheduleHorizon = 'week';
function inHorizon(dateStr){
  if(scheduleHorizon==='day') return dateStr===TODAY_ISO;
  if(scheduleHorizon==='week'){
    const diffDays = (new Date(dateStr) - new Date(TODAY_ISO)) / (1000*60*60*24);
    return diffDays>=0 && diffDays<7;
  }
  return dateStr.startsWith('2026-09');
}

const BLOCKS = [
  {id:'B-021', section:'Nagpur–Wardha Demo Corridor, KM 12+300–12+450', time:'14:20 – 15:10', activities:'Track inspection, Signal relay, Point servicing', trains:2, impact:'LOW', reco:'COMBINE ACTIVITIES', priority:'HIGH'},
  {id:'B-022', section:'Nagpur–Itarsi, KM 44+000', time:'03:30 – 05:00', activities:'OHE insulator replacement', trains:1, impact:'LOW', reco:'RETIME AFTER TRAIN 12102', priority:'HIGH'},
];
let EMERGENCY_QUEUE = [];

/* ---------- Administration: master reference data (demo) ---------- */
let CORRIDOR_MASTER = [
  {id:'COR-001', route:'Mumbai Central – Virar', length:'120.5 km', single:false},
  {id:'COR-002', route:'Thane – Kalyan', length:'28.3 km', single:false},
  {id:'COR-003', route:'Dadar – Thane', length:'32.1 km', single:false},
  {id:'COR-004', route:'Kalyan – Pune', length:'95 km', single:true},
  {id:'COR-005', route:'Borivali – Virar', length:'45.2 km', single:false},
  {id:'COR-006', route:'Churchgate – Mumbai CST', length:'12.8 km', single:false},
  {id:'COR-007', route:'Dadar – Bandra', length:'6.4 km', single:false},
  {id:'COR-008', route:'Andheri – Borivali', length:'8.9 km', single:false},
  {id:'COR-009', route:'New Delhi – Howrah', length:'1445 km', single:true},
  {id:'COR-010', route:'Delhi – Mumbai (Rajdhani route)', length:'1384 km', single:true},
  {id:'COR-011', route:'Mumbai – Chennai', length:'1329 km', single:true},
  {id:'COR-012', route:'Chennai – Bangalore', length:'346 km', single:false},
  {id:'COR-013', route:'Howrah – Chennai', length:'1663 km', single:true},
  {id:'COR-014', route:'Delhi – Kolkata', length:'1445 km', single:true},
  {id:'COR-015', route:'Bangalore – Hubli', length:'410 km', single:false},
  {id:'COR-016', route:'Secunderabad – Vijayawada', length:'353 km', single:false},
  {id:'COR-017', route:'Ahmedabad – Mumbai', length:'493 km', single:false},
  {id:'COR-018', route:'Jaipur – Delhi', length:'308 km', single:false},
  {id:'COR-019', route:'Nagpur – Wardha', length:'76 km', single:false},
  {id:'COR-020', route:'Nagpur – Itarsi', length:'245 km', single:false},
  {id:'COR-021', route:'Itarsi – Bhopal', length:'92 km', single:false},
  {id:'COR-022', route:'Chennai – Ernakulam', length:'694 km', single:false},
  {id:'COR-023', route:'Guwahati – New Tinsukia', length:'459 km', single:false},
  {id:'COR-024', route:'Howrah – Bhubaneswar', length:'441 km', single:true},
  {id:'COR-025', route:'Pune – Solapur', length:'250 km', single:false},
  {id:'COR-026', route:'Lucknow – Kanpur', length:'72 km', single:false},
  {id:'COR-027', route:'Vijayawada – Visakhapatnam', length:'350 km', single:false},
];

let MASTER_TRAINS = [
  {no:'15905', name:'Kanniyakumari – Dibrugarh Vivek Express', from:'Kanniyakumari', to:'Dibrugarh', dep:'23:00'},
  {no:'15906', name:'Dibrugarh – Kanniyakumari Vivek Express', from:'Dibrugarh', to:'Kanniyakumari', dep:'23:05'},
  {no:'2515', name:'TVC–SCL Special', from:'Trivandrum Central', to:'Silchar', dep:'00:05'},
  {no:'12507', name:'TVC–SCL Express', from:'Trivandrum Central', to:'Silchar', dep:'16:55'},
  {no:'12515', name:'TVC–SCL Express', from:'Trivandrum Central', to:'Silchar', dep:'12:40'},
  {no:'12508', name:'SCL–TVC Express', from:'Silchar', to:'Trivandrum Central', dep:'19:55'},
  {no:'16317', name:'Kanniyakumari – Shri Mata Vaishno Devi Katra Humsafar', from:'Kanniyakumari', to:'Shri Mata Vaishno Devi Katra', dep:'14:15'},
  {no:'16318', name:'SVDK – Kanniyakumari Humsafar', from:'Shri Mata Vaishno Devi Katra', to:'Kanniyakumari', dep:'21:55'},
  {no:'16687', name:'Mangalore Central – SVDK Navyug', from:'Mangalore Central', to:'Shri Mata Vaishno Devi Katra', dep:'17:05'},
  {no:'22501', name:'KSR Bengaluru – New Tinsukia Jn', from:'KSR Bengaluru', to:'New Tinsukia Jn', dep:'03:10'},
  {no:'12001', name:'Nagpur – Wardha Shatabdi Express', from:'Nagpur', to:'Wardha', dep:'14:20'},
  {no:'12102', name:'Nagpur – Itarsi Passenger', from:'Nagpur', to:'Itarsi', dep:'02:00'},
  {no:'12951', name:'Mumbai Rajdhani Express', from:'Mumbai Central', to:'New Delhi', dep:'17:00'},
  {no:'12301', name:'Howrah Rajdhani Express', from:'Howrah', to:'New Delhi', dep:'16:55'},
  {no:'12622', name:'Tamil Nadu Express', from:'Chennai Central', to:'New Delhi', dep:'22:30'},
  {no:'12723', name:'Telangana Express', from:'Hyderabad', to:'New Delhi', dep:'18:15'},
  {no:'12295', name:'Sanghamitra Express', from:'Bengaluru', to:'Patna', dep:'11:15'},
  {no:'12809', name:'Howrah – Mumbai Mail', from:'Howrah', to:'Mumbai CST', dep:'20:05'},
  {no:'12649', name:'KSR Bengaluru – Nizamuddin Karnataka Sampark Kranti', from:'KSR Bengaluru', to:'Hazrat Nizamuddin', dep:'20:00'},
];

let MASTER_DEFECTS = [
  {id:'DEF-001', title:'Rail Wear Exceeding Limit', dept:'Engineering', location:'Track 2, Km 124', priority:'Critical'},
  {id:'DEF-002', title:'OHE Wire Sagging', dept:'Traction Distribution', location:'OHE Km 89', priority:'Critical'},
  {id:'DEF-011', title:'Emergency Rail Fracture', dept:'Engineering', location:'Prayagraj Track', priority:'Critical'},
  {id:'DEF-012', title:'OHE Catenary Snap Risk', dept:'Traction Distribution', location:'Bhubaneswar OHE', priority:'Critical'},
  {id:'DEF-016', title:'Embankment Sliding', dept:'Engineering', location:'Guwahati Section', priority:'Critical'},
  {id:'DEF-019', title:'Bridge Bearing Failure', dept:'Engineering', location:'Narmada Bridge', priority:'Critical'},
  {id:'DEF-024', title:'OHE Registration Defect', dept:'Traction Distribution', location:'Chennai–Ernakulam', priority:'High'},
  {id:'DEF-027', title:'OHE Anchor Failure', dept:'Traction Distribution', location:'Prayagraj Section', priority:'High'},
  {id:'DEF-029', title:'Point Position Detection Error', dept:'Signal & Telecom', location:'Delhi Junction', priority:'Critical'},
  {id:'DEF-030', title:'Interlocking Failure', dept:'Signal & Telecom', location:'Mumbai CST', priority:'Critical'},
  {id:'DEF-033', title:'Level Crossing Warning Fault', dept:'Signal & Telecom', location:'Howrah Rural', priority:'High'},
  {id:'DEF-038', title:'Bogie Defect', dept:'Mechanical', location:'Wagon Shop, Mumbai', priority:'Medium'},
  {id:'DEF-041', title:'Ballast Fouling', dept:'Engineering', location:'Itarsi Yard, Line 3', priority:'Medium'},
  {id:'DEF-044', title:'Rail Corrugation', dept:'Engineering', location:'Nagpur–Wardha KM 12+600', priority:'High'},
  {id:'DEF-047', title:'Axle Counter Malfunction', dept:'Signal & Telecom', location:'Nagpur–Itarsi KM 58+000', priority:'Critical'},
  {id:'DEF-050', title:'Pantograph Wear', dept:'Traction Distribution', location:'Nagpur Yard, OHE Section 3', priority:'Medium'},
  {id:'DEF-053', title:'Rail Fastener Loosening', dept:'Engineering', location:'Itarsi Yard, Line 2', priority:'Medium'},
  {id:'DEF-056', title:'Point Machine Alignment Drift', dept:'Signal & Telecom', location:'Nagpur–Wardha KM 12+300', priority:'High'},
  {id:'DEF-059', title:'OHE Insulator Tracking Marks', dept:'Traction Distribution', location:'Nagpur–Itarsi KM 44+000', priority:'High'},
];

let ADMIN_USERS = [
  {username:'r.officer', fullName:'Railway Officer', role:'Approver'},
  {username:'control.wr', fullName:'Control Office, Wardha', role:'Controller'},
  {username:'sysadmin', fullName:'System Administrator', role:'Admin'},
];

let BLOCK_SCHEDULE = [
  {date:'2026-09-22', time:'14:20 – 15:10', type:'Combined Track + Signal Block (B-021)', category:'Routine', corridor:'Nagpur – Wardha', status:'Approved'},
  {date:'2026-09-22', time:'—', type:'Emergency Track Failure Response', category:'Emergency', corridor:'Nagpur – Wardha', status:'Approved'},
  {date:'2026-09-23', time:'02:00 – 05:00', type:'OHE Insulator Replacement', category:'Routine', corridor:'Nagpur – Itarsi', status:'Pending'},
  {date:'2026-09-24', time:'01:00 – 04:00', type:'Ballast Deep Screening', category:'Routine', corridor:'Nagpur – Itarsi', status:'Pending'},
  {date:'2026-09-25', time:'10:00 – 12:00', type:'Bridge Pier Inspection & Grouting', category:'Routine', corridor:'Wardha River Bridge', status:'Pending'},
  {date:'2026-09-26', time:'11:00 – 12:00', type:'Rail Joint Welding', category:'Routine', corridor:'Itarsi Yard', status:'Pending'},
  {date:'2026-09-29', time:'02:30 – 03:35', type:'OHE Contact Wire Wear Check', category:'Routine', corridor:'Nagpur Yard', status:'Pending'},
  {date:'2026-09-29', time:'04:00 – 04:45', type:'Axle Counter Reset', category:'Routine', corridor:'Nagpur – Itarsi', status:'Pending'},
  {date:'2026-09-30', time:'01:00 – 02:20', type:'Rail Grinding', category:'Routine', corridor:'Nagpur – Wardha', status:'Pending'},
  {date:'2026-10-01', time:'22:00 – 01:00', type:'Signal Cable Fault Rectification', category:'Routine', corridor:'Nagpur Yard', status:'Pending'},
  {date:'2026-10-02', time:'23:30 – 03:30', type:'OHE Replacement', category:'Routine', corridor:'Nagpur – Wardha', status:'Pending'},
  {date:'2026-10-03', time:'00:00 – 03:00', type:'Track Renewal', category:'Routine', corridor:'Wardha – Itarsi', status:'Pending'},
  {date:'2026-10-04', time:'02:00 – 05:00', type:'Ballast Fouling Rectification', category:'Routine', corridor:'Itarsi Yard', status:'Pending'},
  {date:'2026-10-04', time:'22:30 – 01:30', type:'Rail Corrugation Grinding', category:'Routine', corridor:'Nagpur – Wardha', status:'Pending'},
  {date:'2026-10-05', time:'04:00 – 04:45', type:'Axle Counter Replacement', category:'Emergency', corridor:'Nagpur – Itarsi', status:'Pending'},
  {date:'2026-10-05', time:'02:30 – 03:35', type:'Pantograph Inspection', category:'Routine', corridor:'Nagpur Yard', status:'Pending'},
  {date:'2026-10-06', time:'01:30 – 03:00', type:'Rail Fastener Retightening', category:'Routine', corridor:'Itarsi Yard', status:'Pending'},
  {date:'2026-10-06', time:'14:00 – 14:50', type:'Point Machine Realignment', category:'Routine', corridor:'Nagpur – Wardha', status:'Pending'},
  {date:'2026-10-07', time:'03:00 – 04:30', type:'OHE Insulator Replacement', category:'Routine', corridor:'Nagpur – Itarsi', status:'Pending'},
];

const AUDIT = [];
function pushAudit(text){
  AUDIT.unshift({text, ts:new Date()});
}
pushAudit(`System initialized. Demo dataset loaded (${REQUESTS.length} maintenance requests, ${CONFLICTS.length} conflicts, 3 divisions).`);

/* ---------- Nav config ---------- */

const ICONS = {
  dash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>',
  req:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M9 12h6M9 16h6M9 8h3"/></svg>',
  ai:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>',
  plan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="17" rx="1"/><path d="M3 9h18M8 2v4M16 2v4"/><rect x="6.5" y="12" width="5" height="4" fill="currentColor" stroke="none"/></svg>',
  conf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3 2 20h20L12 3z"/><path d="M12 10v5M12 17.5v.1"/></svg>',
  emg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>',
  appr:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>',
  ana:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10M11 20V4M18 20v-7"/></svg>',
  sys:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 12l2.5 2.5L16 9"/></svg>',
  train:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="4" width="14" height="12" rx="3"/><path d="M5 12h14M8 20l-2 2M16 20l2 2M9 8h6"/><circle cx="9" cy="16" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="16" r="1" fill="currentColor" stroke="none"/></svg>',
  gauge:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 12l4-3M12 5v2M5 12h2M19 12h-2"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 10a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>',
  map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 4l6 2 5-2v14l-5 2-6-2-5 2V6z"/><path d="M9 4v14M15 6v14"/></svg>',
  box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M12 3v9M12 12l8-4.5M12 12l-8-4.5"/></svg>',
  warn2:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 4L2 20h20L12 4z"/><path d="M12 10v4M12 17v.1"/></svg>',
  route:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8 7l4 3M16 17l-4-3M8 7c2 1 4 1.5 4 3s2 2 4 3"/></svg>',
  history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2M4 4l1.5 3"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h16v11H8l-4 4V5z"/><path d="M8 9h8M8 12h5"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.2"/><path d="M5 20c1.2-4 4-6 7-6s5.8 2 7 6"/></svg>',
};

const NAV = [
  {id:'dashboard', label:'Dashboard', icon:'dash', section:'Overview'},
  {id:'blocks', label:'Blocks', icon:'box', section:'Management'},
  {id:'defects', label:'Defects', icon:'warn2', section:'Management'},
  {id:'corridors', label:'Corridors', icon:'route', section:'Management'},
  {id:'trains', label:'Trains', icon:'train', section:'Management'},
  {id:'requests', label:'Maintenance Requests', icon:'req', section:'Operations'},
  {id:'planner', label:'Block Planner', icon:'plan', section:'Operations'},
  {id:'conflicts', label:'Conflict Detection', icon:'conf', section:'Operations'},
  {id:'emergency', label:'Emergency Planning', icon:'emg', section:'Operations'},
  {id:'approval', label:'Approval Center', icon:'appr', section:'Operations'},
  {id:'prioritization', label:'AI Prioritization', icon:'ai', section:'AI Engine'},
  {id:'analytics', label:'Analytics', icon:'ana', section:'AI Engine'},
  {id:'viva', label:'Viva Assistant', icon:'chat', section:'AI Engine'},
  {id:'system', label:'System / Data Sources', icon:'sys', section:'Administration'},
  {id:'users', label:'Users', icon:'user', section:'Administration'},
  {id:'audit', label:'Audit Log', icon:'history', section:'Administration'},
];
const NAV_SECTIONS = ['Overview','Management','Operations','AI Engine','Administration'];

let currentView = 'dashboard';
let approvalState = {}; // requestId/conflictId -> {status, ts}

/* ---------- Render: shell ---------- */

function pendingCountFor(id){
  const isPending = it => { const st = approvalState[it.id]?.status; return !st || st==='Pending'; };
  if(id==='conflicts') return CONFLICTS.filter(isPending).length;
  if(id==='emergency') return EMERGENCY_QUEUE.filter(isPending).length;
  if(id==='approval') return [...BLOCKS, ...CONFLICTS, ...EMERGENCY_QUEUE].filter(isPending).length;
  return 0;
}
function renderNav(){
  const el = document.getElementById('navlist');
  const activeId = currentView==='approval-confirm' ? 'approval' : currentView;
  el.innerHTML = NAV_SECTIONS.map(sec=>{
    const items = NAV.filter(n=>n.section===sec);
    return `
      <div class="nav-section-label">${sec}</div>
      ${items.map(n=>{
        const count = pendingCountFor(n.id);
        return `
        <button class="navitem ${n.id===activeId?'active':''}" data-view="${n.id}">
          <span class="ic">${ICONS[n.icon]}</span>
          <span>${n.label}</span>
          ${count>0?`<span class="nav-badge">${count}</span>`:''}
        </button>`;
      }).join('')}
    `;
  }).join('');
  el.querySelectorAll('.navitem').forEach(b=>{
    b.addEventListener('click', ()=>{ navigate(b.dataset.view); });
  });
}

function navigate(view, fromPopstate){
  currentView = view;
  document.getElementById('viewTitle').textContent = NAV.find(n=>n.id===view).label;
  renderNav();
  renderView();
  document.getElementById('sidebar').classList.remove('open');
  window.scrollTo({top:0, behavior:'smooth'});
  if(!fromPopstate){
    history.pushState({view}, '', '#'+view);
  }
}

window.addEventListener('popstate', (e)=>{
  const view = (e.state && e.state.view) || 'dashboard';
  if(NAV.some(n=>n.id===view)){
    navigate(view, true);
  } else {
    navigate('dashboard', true);
  }
});

function renderView(){
  const c = document.getElementById('content');
  const renderers = {
    dashboard: viewDashboard, requests: viewRequests, prioritization: viewPrioritization,
    planner: viewPlanner, conflicts: viewConflicts, emergency: viewEmergency,
    approval: viewApproval, analytics: viewAnalytics, system: viewSystem,
    blocks: viewBlocks, defects: viewDefectsMaster, corridors: viewCorridorsMaster,
    trains: viewTrainsMaster, users: viewUsersMaster, audit: viewAuditLog, viva: viewViva,
  };
  c.innerHTML = renderers[currentView]();
  afterRender[currentView] && afterRender[currentView]();
}
const afterRender = {};

function demoBanner(text){
  return `<div class="demo-banner">◆ ${text || 'Demo / simulated data — not connected to live Indian Railways systems.'}</div>`;
}

/* ---------- View: Dashboard ---------- */

function iconStat(iconKey, color, num, label, trend, dir){
  const arrow = dir==='up' ? '▲' : dir==='down' ? '▼' : '●';
  return `
    <div class="panel icon-stat">
      <span class="icon-badge ${color}">${ICONS[iconKey]}</span>
      <span>
        <div class="isv-num mono">${num}</div>
        <div class="isv-lbl">${label}</div>
        <div class="isv-trend ${dir}">${arrow} ${trend}</div>
      </span>
    </div>`;
}
function healthChip(name, desc){
  return `<div class="health-chip"><div class="ht">${name}</div><div class="hs">${desc}</div><div class="hd2"><span class="dot2"></span>Online (simulated)</div></div>`;
}

function viewDashboard(){
  const pending = REQUESTS.filter(r=>r.status==='Pending').length;
  const high = REQUESTS.filter(r=>priorityScore(r).band==='HIGH').length;
  const openConf = CONFLICTS.filter(c=>{ const st = approvalState[c.id]?.status; return !st || st==='Pending'; }).length;
  const resolvedConf = CONFLICTS.length - openConf;
  const todayCount = REQUESTS.filter(r=>r.date===TODAY_ISO).length;
  const todayHigh = REQUESTS.filter(r=>r.date===TODAY_ISO && priorityScore(r).band==='HIGH').length;

  return `
    <div class="hero-banner">
      <div class="hero-content">
        <div>
          <div class="hero-tag">SIH 2026 · Problem Statement 26027</div>
          <h1 class="hd" id="heroGreeting">Good day, Railway Officer</h1>
          <p>Here's the corridor overview for today — right block, right time, for a smoother tomorrow.</p>
        </div>
        <div class="hero-right">
          <div class="hero-pill"><span class="pulse-dot"></span> System online (simulated)</div>
        </div>
      </div>
    </div>
    ${demoBanner()}
    <div class="stat-row" style="margin-bottom:16px;">
      ${iconStat('req','blue', REQUESTS.length, 'Total maintenance requests', `${todayCount} new today`, 'up')}
      ${iconStat('clock','amber', pending, 'Pending block requests', `${todayCount} new today`, 'up')}
      ${iconStat('ai','red', high, 'High-priority requests', `${todayHigh} new today`, todayHigh>0?'up':'flat')}
      ${iconStat('conf','red', openConf, 'Detected conflicts', resolvedConf>0?`${resolvedConf} resolved`:'none resolved yet', resolvedConf>0?'down':'flat')}
      ${iconStat('check','green', BLOCKS.length, 'AI-optimized blocks', 'ready for review', 'flat')}
      ${iconStat('train','purple', TRAINS.length, 'Trains in affected corridors', 'today', 'flat')}
      ${iconStat('gauge','teal', '92%', 'Asset availability', 'simulated', 'flat')}
    </div>

    <div class="grid" style="grid-template-columns:2fr 1fr; margin-bottom:16px; gap:14px;">
      <div class="panel">
        <div style="display:flex; justify-content:space-between; align-items:start; flex-wrap:wrap; gap:8px;">
          <div>
            <div class="lbl">Rail corridor timeline · Nagpur ↔ Wardha</div>
            <h3 style="margin-bottom:2px;">Live train movement, blocks &amp; disconnections</h3>
          </div>
          <span class="badge green">LIVE (simulated)</span>
        </div>
        <div style="margin-top:12px;">
          <div class="corridor-lane" id="lane1"><span class="lane-tag">UP LINE 1</span></div>
          <div class="corridor-lane" id="lane2"><span class="lane-tag">UP LINE 2</span></div>
          <div class="corridor-lane" id="lane3"><span class="lane-tag">UP LINE 3</span></div>
          <div class="corridor-lane" id="lane4"><span class="lane-tag">DN LINE 1</span></div>
          <div class="corridor-lane" id="lane5"><span class="lane-tag">DN LINE 2</span></div>
        </div>
        <div style="display:flex; gap:14px; margin-top:10px; font-size:10.5px; color:var(--ink-2); flex-wrap:wrap;">
          <span><span class="lamp blue"></span> Train movement</span>
          <span><span class="lamp amber"></span> Maintenance block</span>
          <span><span class="lamp red"></span> Conflict</span>
          <span><span class="lamp green"></span> Available window</span>
        </div>
      </div>

      <div class="panel" style="border-left:3px solid var(--signal-blue);">
        <div class="lbl">AI-recommended block plan</div>
        <h3 style="font-size:15px;">${BLOCKS[0].section.split(',')[0]}</h3>
        <div class="kv" style="grid-template-columns:1fr 1fr; margin:10px 0;">
          <div><div class="k">Window</div><div class="v mono">${BLOCKS[0].time}</div></div>
          <div><div class="k">Priority</div><div class="v">${bandBadge(BLOCKS[0].priority)}</div></div>
          <div><div class="k">Train impact</div><div class="v"><span class="badge green">${BLOCKS[0].impact}</span></div></div>
          <div><div class="k">Conflict risk</div><div class="v"><span class="badge green">LOW (after combine)</span></div></div>
        </div>
        <div class="k">Reason</div>
        <ul style="margin:6px 0 0; padding-left:16px; font-size:11.5px; color:var(--ink-1);">
          <li>High asset criticality (rail fracture risk)</li>
          <li>Combines 3 same-corridor requests into one block</li>
          <li>Sits ahead of the 15:15 superfast service with margin</li>
        </ul>
        <div style="margin-top:12px; display:flex; gap:8px;">
          <button class="btn primary sm" onclick="navigate('approval')">Review in Approval Center</button>
        </div>
      </div>
    </div>

    <div class="grid g2" style="margin-bottom:16px;">
      <div class="panel">
        <div class="lbl">System health &amp; data sources</div>
        <h3 style="margin-bottom:10px;">Live feed status (simulated)</h3>
        <div class="health-grid">
          ${healthChip('TMS','Track &amp; maintenance')}
          ${healthChip('SMMS','Signal &amp; telecom')}
          ${healthChip('TDMS','Traction &amp; assets')}
          ${healthChip('COA','Train time table')}
          ${healthChip('BDMS','Block requests')}
        </div>
      </div>
      <div class="panel">
        <div class="lbl">Live network map · Nagpur Division</div>
        <h3 style="margin-bottom:4px;">Which section needs what maintenance, right now</h3>
        <div id="riskMapWrap"></div>
      </div>
    </div>

    <div class="grid g2" style="margin-bottom:16px;">
      <div class="panel">
        <div class="lbl">Quick actions</div>
        <h3 style="margin-bottom:10px;">Jump straight to what matters</h3>
        <div class="qa-grid">
          <button class="qa-btn" onclick="runSimulation()">
            <span class="icon-badge blue">${ICONS.play}</span>
            <span><div class="qa-t">Run simulation</div><div class="qa-s">Load demo data &amp; process</div></span>
          </button>
          <button class="qa-btn" onclick="navigate('conflicts')">
            <span class="icon-badge amber">${ICONS.conf}</span>
            <span><div class="qa-t">View conflicts</div><div class="qa-s">${openConf} open right now</div></span>
          </button>
          <button class="qa-btn" onclick="navigate('emergency')">
            <span class="icon-badge red">${ICONS.emg}</span>
            <span><div class="qa-t">Emergency planning</div><div class="qa-s">Urgent block re-plan</div></span>
          </button>
          <button class="qa-btn" onclick="navigate('planner')">
            <span class="icon-badge green">${ICONS.plan}</span>
            <span><div class="qa-t">Block planner</div><div class="qa-s">Create optimized plan</div></span>
          </button>
        </div>
      </div>
      <div class="panel">
        <div class="lbl">Recent activity</div>
        <h3 style="margin-bottom:8px;">Audit trail (live)</h3>
        <div id="recentActivityWrap"></div>
      </div>
    </div>

    <div class="lbl" style="margin-bottom:8px;">Decision pipeline</div>
    <div class="pipeline-bar" id="dashPipeline"></div>
  `;
}

afterRender.dashboard = function(){
  drawRiskMap();
  drawCorridorLanes();
  renderRecentActivity();
  renderPipeline('dashPipeline', SIM_STEPS, pipelineStage);
};

function coachMarkup(x,color,i,coachW,coachH,y){
  return `
    <rect x="${x}" y="${y}" width="${coachW}" height="${coachH}" rx="2" fill="${color}" opacity="${(0.72+0.06*i).toFixed(2)}"/>
    <rect x="${x+4}" y="${y+3}" width="6" height="6" rx="1" fill="#0B1826" opacity=".55"/>
    <rect x="${x+13}" y="${y+3}" width="6" height="6" rx="1" fill="#0B1826" opacity=".55"/>
    <circle cx="${x+6}" cy="${y+coachH+4}" r="3" fill="#0F1E31" stroke="#8AA6C0" stroke-width="1"/>
    <circle cx="${x+coachW-6}" cy="${y+coachH+4}" r="3" fill="#0F1E31" stroke="#8AA6C0" stroke-width="1"/>
  `;
}
function trainSVG(color, reversed){
  const coachW = 26, gap = 3, coachH = 16, y = 6, n = 2, lw = 26;
  const panto = (cx)=>`
    <line x1="${cx-4}" y1="${y-6}" x2="${cx-1}" y2="${y-13}" stroke="#C9D3DF" stroke-width="1.1"/>
    <line x1="${cx+4}" y1="${y-6}" x2="${cx+1}" y2="${y-13}" stroke="#C9D3DF" stroke-width="1.1"/>
    <line x1="${cx-3}" y1="${y-13}" x2="${cx+3}" y2="${y-13}" stroke="#C9D3DF" stroke-width="1.4"/>`;
  let out = '';
  if(reversed){
    out += `
      <rect x="0" y="${y-2}" width="${lw}" height="${coachH+4}" rx="3" fill="${color}"/>
      <rect x="7" y="${y-6}" width="14" height="8" rx="2" fill="${color}"/>
      <rect x="10" y="${y-4}" width="8" height="4" fill="#0B1826" opacity=".6"/>
      ${panto(14)}
      <circle cx="7" cy="${y+coachH+6}" r="3.5" fill="#0F1E31" stroke="#8AA6C0" stroke-width="1.2"/>
      <circle cx="${lw-7}" cy="${y+coachH+6}" r="3.5" fill="#0F1E31" stroke="#8AA6C0" stroke-width="1.2"/>
    `;
    for(let i=0;i<n;i++){ out += coachMarkup(lw+3+i*(coachW+gap), color, i, coachW, coachH, y); }
  } else {
    for(let i=0;i<n;i++){ out += coachMarkup(i*(coachW+gap), color, i, coachW, coachH, y); }
    const lx = n*(coachW+gap);
    out += `
      <rect x="${lx}" y="${y-2}" width="${lw}" height="${coachH+4}" rx="3" fill="${color}"/>
      <rect x="${lx+5}" y="${y-6}" width="14" height="8" rx="2" fill="${color}"/>
      <rect x="${lx+8}" y="${y-4}" width="8" height="4" fill="#0B1826" opacity=".6"/>
      ${panto(lx+13)}
      <circle cx="${lx+7}" cy="${y+coachH+6}" r="3.5" fill="#0F1E31" stroke="#8AA6C0" stroke-width="1.2"/>
      <circle cx="${lx+lw-7}" cy="${y+coachH+6}" r="3.5" fill="#0F1E31" stroke="#8AA6C0" stroke-width="1.2"/>
    `;
  }
  return out;
}
function laneSVG(direction, trainColor, trackIndex){
  let sleepers = '';
  for(let x=6; x<894; x+=16){ sleepers += `<rect x="${x}" y="40" width="4" height="14" fill="#22405f"/>`; }
  let ohe = `<line x1="0" y1="2" x2="900" y2="2" stroke="#7C8CA3" stroke-width="1"/>`;
  [80,300,430,650,800].forEach(px=>{
    ohe += `<line x1="${px}" y1="0" x2="${px}" y2="9" stroke="#4a6e93" stroke-width="1.4"/><line x1="${px-8}" y1="2" x2="${px+8}" y2="2" stroke="#4a6e93" stroke-width="1"/>`;
  });
  const reversed = direction==='dn';
  const animName = reversed ? 'trainStopGoRev' : 'trainStopGoFwd';
  const shared = ((trackIndex||0)*2.9).toFixed(2);
  const delay = `-${shared}s`;
  const train = `
    <g class="train-icon" style="animation-name:${animName}; animation-delay:${delay};">
      <g transform="translate(0,14)">${trainSVG(trainColor, reversed)}</g>
    </g>`;
  return `
    <svg viewBox="0 0 900 62" preserveAspectRatio="xMidYMid meet">
      ${ohe}
      ${sleepers}
      <line x1="0" y1="46" x2="900" y2="46" stroke="#4a6e93" stroke-width="2.5"/>
      <line x1="0" y1="52" x2="900" y2="52" stroke="#4a6e93" stroke-width="2.5"/>
      ${animatedSignal(220, direction==='up'?'MR-1042':'MR-1043', shared, reversed)}
      ${signalPostMini(560, 'blue', 'B-021')}
      ${train}
    </svg>`;
}
function animatedSignal(x, label, beginOffset, reversed){
  const red = lampFill('red'), amber = lampFill('amber'), green = lampFill('green');
  const b = beginOffset||0;
  const T = 14.5;
  // Ta = time the train (at this x=220 signal) takes to arrive; matches the train's own keyframe math.
  const Ta = reversed ? 7.4 : 4.1;
  const Rdur = 3;
  const kt1 = ((Ta-0.5)/T).toFixed(4);
  const kt2 = (Ta/T).toFixed(4);
  const kt3 = ((Ta+Rdur)/T).toFixed(4);
  return `
    <rect x="${x-6}" y="-1" width="12" height="23" rx="2" fill="#16283F" stroke="#3d5e82" stroke-width="1"/>
    <line x1="${x}" y1="22" x2="${x}" y2="46" stroke="#3d5e82" stroke-width="1.5"/>
    <circle cx="${x}" cy="4" r="2.6" fill="${red}" opacity="0.25">
      <animate attributeName="opacity" values="0.25;0.25;1;0.25" keyTimes="0;${kt1};${kt2};${kt3}" calcMode="discrete" dur="${T}s" begin="${b}s" repeatCount="indefinite"/>
    </circle>
    <circle cx="${x}" cy="11" r="2.6" fill="${amber}" opacity="0.25">
      <animate attributeName="opacity" values="0.25;1;0.25;0.25" keyTimes="0;${kt1};${kt2};${kt3}" calcMode="discrete" dur="${T}s" begin="${b}s" repeatCount="indefinite"/>
    </circle>
    <circle cx="${x}" cy="18" r="2.6" fill="${green}" opacity="0.25">
      <animate attributeName="opacity" values="1;0.25;0.25;1" keyTimes="0;${kt1};${kt2};${kt3}" calcMode="discrete" dur="${T}s" begin="${b}s" repeatCount="indefinite"/>
    </circle>
    <text x="${x}" y="61" fill="#5B6B82" font-size="8" font-family="IBM Plex Mono" text-anchor="middle">${label}</text>
  `;
}
function signalPostMini(x,color,label){
  const c = lampFill(color);
  return `
    <line x1="${x}" y1="10" x2="${x}" y2="46" stroke="#3d5e82" stroke-width="1.5"/>
    <circle cx="${x}" cy="8" r="7" fill="${c}" opacity="0.22"/>
    <circle cx="${x}" cy="8" r="4" fill="${c}"/>
    <text x="${x}" y="61" fill="#5B6B82" font-size="8" font-family="IBM Plex Mono" text-anchor="middle">${label}</text>
  `;
}
const TRACKS = [
  {id:'lane1', dir:'up', color:'#3E8FD9'},
  {id:'lane2', dir:'up', color:'#1F9C8F'},
  {id:'lane3', dir:'up', color:'#7358C4'},
  {id:'lane4', dir:'dn', color:'#B4780F'},
  {id:'lane5', dir:'dn', color:'#C8432F'},
];
function drawCorridorLanes(){
  TRACKS.forEach((t,i)=>{
    const el = document.getElementById(t.id);
    if(el) el.insertAdjacentHTML('beforeend', laneSVG(t.dir, t.color, i));
  });
}
function renderRecentActivity(){
  const el = document.getElementById('recentActivityWrap');
  if(!el) return;
  const recent = AUDIT.slice(0,6);
  el.innerHTML = recent.map(a=>{
    let color = 'var(--signal-blue)';
    if(/conflict/i.test(a.text)) color = 'var(--signal-amber)';
    if(/emergency/i.test(a.text)) color = 'var(--signal-red)';
    if(/approv|accept/i.test(a.text)) color = 'var(--signal-green)';
    return `<div class="activity-row"><span class="activity-dot" style="background:${color};"></span><span class="activity-txt">${a.text}</span><span class="activity-time">${fmtTime(a.ts)}</span></div>`;
  }).join('');
}
function renderPipeline(elId, steps, activeIdx){
  const el = document.getElementById(elId);
  if(!el) return;
  el.innerHTML = steps.map((s,i)=>{
    const cls = i<activeIdx ? 'done' : (i===activeIdx ? 'active' : '');
    const dotContent = i<activeIdx ? '✓' : (i+1);
    return `${i>0?`<div class="pline ${i<=activeIdx?'done':''}"></div>`:''}<div class="pnode ${cls}"><div class="pdot">${dotContent}</div><div class="plabel">${s}</div></div>`;
  }).join('');
}

function drawTimeline(elId, blocks, hourStart, hourEnd){
  const el = document.getElementById(elId);
  if(!el) return;
  const span = hourEnd - hourStart;
  const hours = [];
  for(let h=hourStart; h<hourEnd; h++) hours.push(h);
  const rowH = 34;
  el.innerHTML = `
    <div class="tl-hours">${hours.map(h=>`<span>${String(h).padStart(2,'0')}:00</span>`).join('')}</div>
    ${blocks.map(b=>{
      const left = ((b.start-hourStart)/span*100).toFixed(2);
      const width = Math.max(((b.end-b.start)/span*100),1.2).toFixed(2);
      const top = 26 + (b.row||0)*rowH;
      const colorVar = {red:'var(--signal-red)', amber:'var(--signal-amber)', green:'var(--signal-green)', blue:'var(--signal-blue)'}[b.color];
      const bg = {red:'var(--signal-red-soft)', amber:'var(--signal-amber-soft)', green:'var(--signal-green-soft)', blue:'var(--signal-blue-soft)'}[b.color];
      return `<div class="tl-block" title="${b.label}" style="left:${left}%; width:${width}%; top:${top}px; background:${bg}; color:${colorVar}; border-color:${colorVar};">${b.label}</div>`;
    }).join('')}
  `;
  el.style.height = (26 + (Math.max(...blocks.map(b=>b.row||0))+1)*rowH + 10) + 'px';
}

function riskColor(score){
  if(score>=80) return {c:'var(--signal-red)', bg:'var(--signal-red-soft)', band:'HIGH'};
  if(score>=50) return {c:'var(--signal-amber)', bg:'var(--signal-amber-soft)', band:'MEDIUM'};
  if(score>0) return {c:'var(--signal-green)', bg:'var(--signal-green-soft)', band:'LOW'};
  return {c:'var(--ink-2)', bg:'var(--navy-3)', band:'CLEAR'};
}
function computeSectionRisk(){
  const pick = (label, matcher) => {
    const items = REQUESTS.filter(r=>matcher(r.section));
    const sorted = items.sort((a,b)=>b.criticality-a.criticality);
    return {label, items, top: sorted[0] || null, score: sorted[0] ? sorted[0].criticality : 0};
  };
  return {
    nagpurYard: pick('Nagpur Yard', s=>s.includes('Nagpur Yard')),
    segA: pick('Nagpur ↔ Wardha corridor', s=>s.includes('Nagpur–Wardha')),
    segB: pick('Wardha ↔ Itarsi corridor', s=>s.includes('Nagpur–Itarsi')),
    wardhaYard: pick('Wardha Yard', s=>s.includes('Wardha Yard')),
    bridge: pick('Wardha River Bridge (Br. 118)', s=>s.includes('Wardha River Bridge')),
    itarsiYard: pick('Itarsi Yard', s=>s.includes('Itarsi Yard')),
  };
}
function drawRiskMap(){
  const el = document.getElementById('riskMapWrap');
  if(!el) return;
  const r = computeSectionRisk();
  const node = name => `<div style="display:flex; flex-direction:column; align-items:center; flex:none; width:78px;">
      <div style="width:16px; height:16px; border-radius:50%; background:var(--navy-3); border:2px solid var(--ink-1);"></div>
      <div class="hd" style="font-size:13px; margin-top:6px;">${name}</div>
    </div>`;
  const seg = s => {
    const rc = riskColor(s.score);
    const chip = s.top ? `${s.top.id} · ${s.top.type}` : 'No pending work';
    return `<div style="flex:1; min-width:140px; cursor:${s.top?'pointer':'default'};" ${s.top?`onclick="openRequestModal('${s.top.id}')"`:''} title="${s.label}">
        <div style="height:10px; background:${rc.c}; border-radius:4px; box-shadow:0 0 10px 0 ${rc.c}88;"></div>
        <div style="margin-top:8px; font-size:11px; color:var(--ink-2);">${s.label}</div>
        <div style="font-size:11.5px; font-weight:600; margin-top:2px;">${chip}</div>
        <div style="margin-top:4px;"><span class="badge" style="background:${rc.bg}; color:${rc.c};">${rc.band}${s.items.length>1?` · ${s.items.length} items`:''}</span></div>
      </div>`;
  };
  const spur = s => {
    const rc = riskColor(s.score);
    const chip = s.top ? `${s.top.id} · ${s.top.type}` : 'No pending work';
    return `<div style="border:1px solid var(--line); border-left:3px solid ${rc.c}; border-radius:3px; padding:8px 10px; flex:1; min-width:170px; cursor:${s.top?'pointer':'default'};" ${s.top?`onclick="openRequestModal('${s.top.id}')"`:''}>
        <div style="font-size:10.5px; color:var(--ink-2);">${s.label}</div>
        <div style="font-size:12px; font-weight:600; margin-top:2px;">${chip}</div>
        <span class="badge" style="background:${rc.bg}; color:${rc.c}; margin-top:5px;">${rc.band}</span>
      </div>`;
  };
  el.innerHTML = `
    <div style="display:flex; align-items:flex-start; gap:4px; overflow-x:auto; padding-bottom:6px;">
      ${node('Nagpur')}
      ${seg(r.segA)}
      ${node('Wardha')}
      ${seg(r.segB)}
      ${node('Itarsi')}
    </div>
    <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:14px;">
      ${spur(r.nagpurYard)}
      ${spur(r.wardhaYard)}
      ${spur(r.bridge)}
      ${spur(r.itarsiYard)}
    </div>
  `;
}
function lampFill(color){
  return {red:'#D8503F', amber:'#D9A23B', green:'#2E9B5C', blue:'#3E8FD9'}[color];
}
function signalPost(x,color,label){
  const c = lampFill(color);
  return `
    <line x1="${x}" y1="32" x2="${x}" y2="70" stroke="#3d5e82" stroke-width="2"/>
    <circle cx="${x}" cy="24" r="11" fill="${c}" opacity="0.22"/>
    <circle cx="${x}" cy="24" r="6" fill="${c}"/>
    <text x="${x}" y="12" fill="#B9C7D6" font-size="9" font-family="Inter, sans-serif" text-anchor="middle">${label}</text>
  `;
}
function drawCorridorHero(){
  const el = document.getElementById('corridorSvgWrap');
  if(!el) return;
  let sleepers = '';
  for(let x=6; x<894; x+=16){ sleepers += `<rect x="${x}" y="64" width="4" height="22" fill="#22405f"/>`; }
  el.innerHTML = `
    <svg viewBox="0 0 900 150" preserveAspectRatio="xMidYMid meet">
      ${sleepers}
      <line x1="0" y1="70" x2="900" y2="70" stroke="#4a6e93" stroke-width="3"/>
      <line x1="0" y1="78" x2="900" y2="78" stroke="#4a6e93" stroke-width="3"/>
      <text x="16" y="114" fill="#7F93A8" font-size="10" font-family="IBM Plex Mono">KM 12+000</text>
      <text x="884" y="114" fill="#7F93A8" font-size="10" font-family="IBM Plex Mono" text-anchor="end">KM 13+000</text>
      ${signalPost(180,'red','MR-1042 · Track')}
      ${signalPost(420,'red','MR-1043 · Signal')}
      ${signalPost(660,'blue','B-021 combined block')}
      <g class="train-icon">
        <g transform="translate(0,38)">
          <rect x="-2" y="10" width="48" height="20" rx="4" fill="#3E8FD9"/>
          <rect x="4" y="1" width="18" height="11" rx="2" fill="#3E8FD9"/>
          <circle cx="10" cy="33" r="5" fill="#0F1E31" stroke="#8AA6C0" stroke-width="1.5"/>
          <circle cx="36" cy="33" r="5" fill="#0F1E31" stroke="#8AA6C0" stroke-width="1.5"/>
        </g>
      </g>
    </svg>
  `;
}

/* ---------- View: Maintenance Requests ---------- */

let reqFilters = {dept:'', crit:'', status:''};

function viewRequests(){
  const depts = [...new Set(REQUESTS.map(r=>r.dept))];
  const rows = REQUESTS.filter(r=>{
    if(reqFilters.dept && r.dept!==reqFilters.dept) return false;
    if(reqFilters.crit==='high' && r.criticality<80) return false;
    if(reqFilters.crit==='med' && !(r.criticality>=50 && r.criticality<80)) return false;
    if(reqFilters.crit==='low' && r.criticality>=50) return false;
    if(reqFilters.status && r.status!==reqFilters.status) return false;
    return true;
  });

  return `
    ${demoBanner()}
    <div class="panel">
      <div class="filters">
        <select id="fDept"><option value="">All departments</option>${depts.map(d=>`<option value="${d}" ${reqFilters.dept===d?'selected':''}>${d}</option>`).join('')}</select>
        <select id="fCrit">
          <option value="">All criticality</option>
          <option value="high" ${reqFilters.crit==='high'?'selected':''}>High (80+)</option>
          <option value="med" ${reqFilters.crit==='med'?'selected':''}>Medium (50–79)</option>
          <option value="low" ${reqFilters.crit==='low'?'selected':''}>Low (&lt;50)</option>
        </select>
        <select id="fStatus"><option value="">All statuses</option><option ${reqFilters.status==='Pending'?'selected':''}>Pending</option><option ${reqFilters.status==='Scheduled'?'selected':''}>Scheduled</option></select>
        <span style="margin-left:auto; color:var(--ink-2); font-size:11.5px; align-self:center;">${rows.length} of ${REQUESTS.length} requests</span>
      </div>
      <div class="tbl-wrap">
        <table>
          <thead><tr>
            <th>Request ID</th><th>Department</th><th>Asset / section</th><th>Maintenance type</th>
            <th>Criticality</th><th>Urgency</th><th>Duration</th><th>Requested</th><th>Status</th>
          </tr></thead>
          <tbody>
            ${rows.map(r=>`
              <tr data-id="${r.id}">
                <td class="mono">${r.id}</td>
                <td>${r.dept}</td>
                <td>${r.section}</td>
                <td>${r.type}</td>
                <td>${sevBadge(r.criticality)}</td>
                <td class="mono">${r.urgency}</td>
                <td class="mono">${r.duration} min</td>
                <td class="mono">${r.date} · ${r.time}</td>
                <td><span class="badge grey">${r.status}</span></td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function sevBadge(score){
  if(score>=80) return `<span class="badge red">${score}</span>`;
  if(score>=50) return `<span class="badge amber">${score}</span>`;
  return `<span class="badge green">${score}</span>`;
}

afterRender.requests = function(){
  document.getElementById('fDept').onchange = e=>{reqFilters.dept=e.target.value; renderView();};
  document.getElementById('fCrit').onchange = e=>{reqFilters.crit=e.target.value; renderView();};
  document.getElementById('fStatus').onchange = e=>{reqFilters.status=e.target.value; renderView();};
  document.querySelectorAll('tbody tr[data-id]').forEach(tr=>{
    tr.onclick = ()=>openRequestModal(tr.dataset.id);
  });
};

function openRequestModal(id){
  const r = REQUESTS.find(x=>x.id===id);
  const p = priorityScore(r);
  document.getElementById('modalTitle').textContent = `${r.id} — ${r.type}`;
  document.getElementById('modalBody').innerHTML = `
    <div class="kv">
      <div><div class="k">Department</div><div class="v">${r.dept}</div></div>
      <div><div class="k">Section / asset</div><div class="v">${r.section}</div></div>
      <div><div class="k">Required duration</div><div class="v mono">${r.duration} minutes</div></div>
      <div><div class="k">Required resources</div><div class="v">${r.resources}</div></div>
      <div><div class="k">Requested window</div><div class="v mono">${r.date} · ${r.time}</div></div>
      <div><div class="k">Source system</div><div class="v mono">${r.source}</div></div>
      <div><div class="k">AI priority</div><div class="v">${p.band} (${p.score})</div></div>
      <div><div class="k">Status</div><div class="v"><span class="badge grey">${r.status}</span></div></div>
    </div>
    <div class="k">Field note</div>
    <p style="font-size:12.5px; color:var(--ink-1); margin-top:6px;">${r.note}</p>
  `;
  document.getElementById('modalBg').classList.add('show');
}
function closeModal(){ document.getElementById('modalBg').classList.remove('show'); }

/* ---------- View: AI Prioritization ---------- */

function viewPrioritization(){
  const ranked = [...REQUESTS].map(r=>({...r, ...priorityScore(r)})).sort((a,b)=>b.score-a.score);
  const hi = ranked.filter(r=>r.band==='HIGH').length, med = ranked.filter(r=>r.band==='MEDIUM').length, lo = ranked.filter(r=>r.band==='LOW').length;
  return `
    ${demoBanner('Priority score is a demo weighting of criticality, urgency and impact — not a production ML model output.')}
    <div class="stat-row" style="grid-template-columns:repeat(3,1fr); margin-bottom:14px;">
      <div class="panel tight stat red"><div class="num mono" style="font-size:20px;">${hi}</div><div class="cap">HIGH priority requests</div></div>
      <div class="panel tight stat amber"><div class="num mono" style="font-size:20px;">${med}</div><div class="cap">MEDIUM priority requests</div></div>
      <div class="panel tight stat green"><div class="num mono" style="font-size:20px;">${lo}</div><div class="cap">LOW priority requests</div></div>
    </div>
    <div class="grid g2">
      <div class="panel">
        <div class="lbl">Ranked queue</div>
        <h3 style="margin-bottom:10px;">All requests by AI priority</h3>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Rank</th><th>Request</th><th>Criticality</th><th>Urgency</th><th>Impact</th><th>Priority</th></tr></thead>
            <tbody>
              ${ranked.map((r,i)=>`
                <tr data-id="${r.id}">
                  <td class="mono">${i+1}</td>
                  <td>${r.id}<br><span style="color:var(--ink-2); font-size:11px;">${r.type}</span></td>
                  <td class="mono">${r.criticality}</td>
                  <td class="mono">${r.urgency}</td>
                  <td class="mono">${r.impact}</td>
                  <td>${bandBadge(r.band)}</td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
      <div class="panel">
        <div class="lbl">Explainability (SHAP-style demo)</div>
        <h3 id="explainTitle">${ranked[0].id} — factor contribution</h3>
        <p style="color:var(--ink-1); font-size:12px; margin-top:2px;">Illustrative visualization for the demo — not output from a trained SHAP explainer.</p>
        <div id="explainBody" style="margin-top:14px;"></div>
      </div>
    </div>
  `;
}

function bandBadge(band){
  const cls = band==='HIGH'?'red':band==='MEDIUM'?'amber':'green';
  return `<span class="badge ${cls}">${band}</span>`;
}

afterRender.prioritization = function(){
  const ranked = [...REQUESTS].map(r=>({...r, ...priorityScore(r)})).sort((a,b)=>b.score-a.score);
  document.querySelectorAll('#content tbody tr[data-id]').forEach(tr=>{
    tr.onclick = ()=> showExplain(ranked.find(r=>r.id===tr.dataset.id));
  });
  showExplain(ranked[0]);
};

function confidenceFor(score){
  const d = Math.min(Math.abs(score-80), Math.abs(score-60));
  return Math.max(58, Math.min(97, Math.round(60 + d*1.8)));
}
function showExplain(r){
  document.getElementById('explainTitle').textContent = `${r.id} — factor contribution`;
  const factors = [
    {lbl:'Asset criticality', val:r.criticality, w:0.45, color:'var(--signal-red)'},
    {lbl:'Time urgency', val:r.urgency, w:0.35, color:'var(--signal-amber)'},
    {lbl:'Network / traffic impact', val:r.impact, w:0.20, color:'var(--signal-blue)'},
  ];
  const conf = confidenceFor(r.score);
  document.getElementById('explainBody').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; padding:8px 10px; background:var(--navy-2); border-radius:4px;">
      <span style="font-size:11.5px; color:var(--ink-1);">AI confidence in this band</span>
      <span class="badge ${conf>=80?'green':conf>=65?'amber':'red'}">${conf}%</span>
    </div>
    ${factors.map(f=>`
      <div class="factor-row">
        <span class="f-lbl">${f.lbl}</span>
        <span class="barline"><i style="width:${f.val}%; background:${f.color};"></i></span>
        <span class="f-val">${f.val}</span>
      </div>`).join('')}
    <div style="margin-top:12px; padding-top:12px; border-top:1px solid var(--line);">
      <div class="k">Why this priority</div>
      <p style="font-size:12.5px; color:var(--ink-1); margin-top:6px;">
        ${r.band} priority because ${r.criticality>=80?'asset criticality is high':'asset criticality is moderate'} and
        ${r.urgency>=70?'the maintenance window is time-sensitive':'scheduling has some flexibility'}.
        Network impact contributes the smallest share (20% weight) to the overall score.
      </p>
      <p style="font-size:11px; color:var(--ink-2); margin-top:8px;">Confidence is how far the score sits from the nearest priority-band cutoff (60/80) — not a trained model's accuracy metric.</p>
    </div>
  `;
}

/* ---------- View: Block Planner ---------- */

let plannerTab = 'day';

function viewPlanner(){
  return `
    ${demoBanner('AI prioritization ranks requests; a separate optimization step (OR-Tools style constraint solver, simulated here) fits them into a feasible schedule.')}
    <div class="panel" style="margin-bottom:16px;">
      <div class="lbl">How the AI builds one block from separate requests</div>
      <h3 style="margin-bottom:4px;">Today, 22 Sep · Nagpur–Wardha corridor, KM 12+300–12+450</h3>
      <p style="font-size:12px; color:var(--ink-2); margin:0 0 4px;">TMS and SMMS each raise their own maintenance need, at their own time. RailNex checks the corridor and window, then combines them into a single block.</p>
      <div class="combine-flow">
        <div class="combine-card">
          <span class="src-tag">TMS</span>
          <div class="cc-time">14:00</div>
          <div class="cc-what">Track — Rail fracture repair</div>
          <div class="cc-where">MR-1042 · Nagpur–Wardha KM 12+300</div>
        </div>
        <div class="combine-plus">+</div>
        <div class="combine-card">
          <span class="src-tag">SMMS</span>
          <div class="cc-time">14:30</div>
          <div class="cc-what">Signal — Relay replacement</div>
          <div class="cc-where">MR-1043 · Nagpur–Wardha KM 12+450</div>
        </div>
        <div class="combine-plus">+</div>
        <div class="combine-card">
          <span class="src-tag">SMMS</span>
          <div class="cc-time">14:40</div>
          <div class="cc-what">Signal — Point machine servicing</div>
          <div class="cc-where">MR-1048 · Nagpur–Wardha KM 12+300</div>
        </div>
        <div class="combine-arrow"><span class="ar">→</span>AI combines</div>
        <div class="combine-card result">
          <span class="badge blue">AI RECOMMENDED · B-021</span>
          <div class="cc-time">14:20 – 15:10</div>
          <div class="cc-what">One coordinated block</div>
          <div class="cc-where">Single disconnection instead of three</div>
        </div>
      </div>
    </div>
    <div class="panel" style="margin-bottom:16px;">
      <div class="lbl">Core planning surface</div>
      <h3>AI-optimized block schedule — Nagpur–Wardha corridor</h3>
      <div class="grid g2" style="margin-top:14px;">
        ${blockCard({id:'B-021', section:'Nagpur–Wardha Demo Corridor, KM 12+300–12+450', time:'14:20 – 15:10', activities:'Track inspection, Signal relay, Point servicing', trains:2, impact:'LOW', reco:'COMBINE ACTIVITIES', priority:'HIGH'})}
        ${blockCard({id:'B-022', section:'Nagpur–Itarsi, KM 44+000', time:'03:30 – 05:00', activities:'OHE insulator replacement', trains:1, impact:'LOW', reco:'RETIME AFTER TRAIN 12102', priority:'HIGH'})}
      </div>
    </div>

    <div class="grid g2" style="margin-bottom:16px;">
      <div class="panel">
        <div class="lbl">Constraints considered</div>
        <ul style="margin:8px 0 0; padding-left:18px; font-size:12.5px; color:var(--ink-1);">
          <li>Train timetable &amp; corridor availability (COA)</li>
          <li>Maintenance duration &amp; required resources</li>
          <li>Department co-location on the same section</li>
          <li>Safety separation between traffic and work blocks</li>
          <li>Existing approved blocks / disconnections</li>
          <li><b>VVIP protection window</b> — extra safety buffer enforced around Rajdhani/Shatabdi-class services</li>
          <li><b>Night window preference</b> — routine, non-urgent work pushed to 01:00–04:00</li>
          <li><b>Department workload cap</b> — max 2 concurrent blocks per department, per division</li>
        </ul>
      </div>
      <div class="panel">
        <div class="lbl">Optimization objective</div>
        <div class="grid g2" style="gap:10px;">
          <div>
            <div class="k" style="color:var(--signal-green);">Maximize</div>
            <ul style="margin:6px 0 0; padding-left:16px; font-size:12px; color:var(--ink-1);"><li>Asset availability</li><li>Maintenance completion</li><li>Block utilization</li></ul>
          </div>
          <div>
            <div class="k" style="color:var(--signal-red);">Minimize</div>
            <ul style="margin:6px 0 0; padding-left:16px; font-size:12px; color:var(--ink-1);"><li>Train–block conflicts</li><li>Operational disruption</li><li>Idle / unused block time</li></ul>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-banner" style="align-items:flex-start;">
      <span>◆</span>
      <span><b>Design choice:</b> location proximity and resource consolidation are deliberately kept out of the AI Prioritization score (Criticality + Urgency + Impact) — they belong to the Optimization Engine's constraints above. Blending them into one score would hide from the officer <i>why</i> a request is urgent versus <i>where</i> it fits the schedule.</span>
    </div>

    <div class="panel" style="margin-bottom:16px;">
      <div class="lbl">Before vs after optimization (simulated)</div>
      <div class="grid g2" style="margin-top:8px;">
        <div>
          <h3 style="font-size:14px;">Before</h3>
          <div class="timeline-strip" id="beforeTL" style="height:110px;"></div>
        </div>
        <div>
          <h3 style="font-size:14px; color:var(--signal-green);">After</h3>
          <div class="timeline-strip" id="afterTL" style="height:110px;"></div>
        </div>
      </div>
      <div class="grid g3" style="margin-top:12px;">
        <div class="stat green" style="padding-left:10px;"><div class="num mono" style="font-size:20px;">3h20m → 1h10m</div><div class="cap">Total corridor occupancy — 3 separate closures vs 1 shared block (incl. line-clear overhead)</div></div>
        <div class="stat green" style="padding-left:10px;"><div class="num mono" style="font-size:20px;">65%</div><div class="cap">Reduction in total possession time (demo calculation)</div></div>
        <div class="stat green" style="padding-left:10px;"><div class="num mono" style="font-size:20px;">0</div><div class="cap">Residual train conflicts</div></div>
      </div>
      <p style="font-size:11px; color:var(--ink-2); margin-top:8px;">Calculation: 3 separate blocks each carry their own ~20 min line-clear/handback overhead (50+20, 50+20, 40+20 = 200 min). One shared block runs the same crews in parallel and pays the overhead once (max(50,50,40)+20 = 70 min).</p>
    </div>

    <div class="panel">
      <div class="lbl">Planning horizon</div>
      <div style="display:flex; gap:8px; margin-bottom:12px;">
        <button class="btn sm ${plannerTab==='day'?'primary':'ghost'}" data-tab="day">Day plan</button>
        <button class="btn sm ${plannerTab==='week'?'primary':'ghost'}" data-tab="week">Weekly plan</button>
        <button class="btn sm ${plannerTab==='month'?'primary':'ghost'}" data-tab="month">Monthly plan</button>
      </div>
      <div id="plannerTabBody"></div>
    </div>
  `;
}

function blockCard(b){
  const feas = Math.max(60, Math.min(98, 96 - b.trains*6 - (b.impact==='LOW'?0:12)));
  return `
    <div class="panel tight" style="border-left:3px solid var(--signal-blue);">
      <div style="display:flex; justify-content:space-between; align-items:start;">
        <div>
          <div class="lbl">${b.id} · AI recommended</div>
          <h3 style="font-size:15px;">${b.section}</h3>
        </div>
        <span class="badge blue">AI</span>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin:8px 0; padding:7px 9px; background:var(--navy-2); border-radius:4px;">
        <span style="font-size:11px; color:var(--ink-1);">Feasibility score</span>
        <span class="badge ${feas>=80?'green':feas>=65?'amber':'red'}">${feas}%</span>
      </div>
      <div class="kv" style="grid-template-columns:1fr 1fr; margin:10px 0;">
        <div><div class="k">Time</div><div class="v mono">${b.time}</div></div>
        <div><div class="k">Priority</div><div class="v">${bandBadge(b.priority)}</div></div>
        <div><div class="k">Affected trains</div><div class="v mono">${b.trains}</div></div>
        <div><div class="k">Operational impact</div><div class="v"><span class="badge green">${b.impact}</span></div></div>
      </div>
      <div class="k">Activities</div>
      <div style="font-size:12.5px; margin:4px 0 10px;">${b.activities}</div>
      <div class="k">Recommendation</div>
      <div style="font-size:12.5px; color:var(--signal-blue); font-weight:600; margin-top:3px;">${b.reco}</div>
    </div>
  `;
}

afterRender.planner = function(){
  drawTimeline('beforeTL', [
    {label:'MR-1042 Track', start:14.0, end:14.83, color:'red', row:0},
    {label:'MR-1043 Signal', start:14.5, end:15.33, color:'red', row:1},
    {label:'MR-1048 Point', start:14.66, end:15.33, color:'red', row:2},
  ], 13, 17);
  drawTimeline('afterTL', [
    {label:'B-021 Combined block', start:14.33, end:15.16, color:'green', row:0},
  ], 13, 17);
  renderPlannerTab();
  document.querySelectorAll('[data-tab]').forEach(b=>{
    b.onclick = ()=>{ plannerTab=b.dataset.tab; renderView(); };
  });
};

function renderPlannerTab(){
  const body = document.getElementById('plannerTabBody');
  const now = new Date(TODAY_ISO);
  let items, caption;
  if(plannerTab==='day'){
    items = BLOCK_SCHEDULE.filter(b=>b.date===TODAY_ISO);
    caption = `Today's schedule (${TODAY_ISO}): ${items.length} block(s) planned, including the AI-combined B-021.`;
  } else if(plannerTab==='week'){
    items = BLOCK_SCHEDULE.filter(b=>{
      const diff = (new Date(b.date) - now) / (1000*60*60*24);
      return diff>=0 && diff<7;
    });
    caption = `Short-term coordination for the week of 22–28 Sep 2026 (simulated): ${items.length} block(s) across the corridor, ${items.filter(b=>b.category==='Emergency').length} of them emergency-category.`;
  } else {
    items = BLOCK_SCHEDULE;
    caption = `Full planning horizon (simulated): ${items.length} block(s) across ${new Set(items.map(b=>b.corridor)).size} corridors/sections, spanning ${items[0]?.date} to ${items[items.length-1]?.date}.`;
  }
  const table = items.length ? `
    <div class="tbl-wrap" style="margin-top:10px;"><table>
      <thead><tr><th>Date</th><th>Time</th><th>Type</th><th>Corridor</th><th>Category</th><th>Status</th></tr></thead>
      <tbody>${items.map(b=>`<tr><td class="mono">${b.date}</td><td class="mono">${b.time}</td><td>${b.type}</td><td>${b.corridor}</td><td><span class="badge ${b.category==='Emergency'?'red':'blue'}">${b.category}</span></td><td><span class="badge ${b.status==='Approved'?'green':'grey'}">${b.status}</span></td></tr>`).join('')}</tbody>
    </table></div>
  ` : `<div style="font-size:12px; color:var(--ink-2); padding:8px 0;">No blocks scheduled in this window.</div>`;
  body.innerHTML = `<p style="font-size:12.5px; color:var(--ink-1);">${caption}</p>${table}`;
}

/* ---------- View: Conflict Detection ---------- */

function viewConflicts(){
  return `
    ${demoBanner()}
    <div style="display:flex; flex-direction:column; gap:14px;">
      ${CONFLICTS.map(c=>{
        const st = approvalState[c.id]?.status || 'Pending';
        return `
        <div class="panel" style="border-left:3px solid ${sevColor(c.severity)};">
          <div style="display:flex; justify-content:space-between; align-items:start; flex-wrap:wrap; gap:8px;">
            <div>
              <div class="lbl">Conflict ${c.id} · ${c.section}</div>
              <h3>${sevLabel(c.severity)} corridor / resource conflict</h3>
            </div>
            <span class="badge ${sevBadgeClass(c.severity)}">${c.severity}</span>
          </div>
          <div style="margin:12px 0;">
            ${c.items.map(it=>`<div style="display:flex; justify-content:space-between; font-size:12.5px; padding:6px 0; border-bottom:1px dashed var(--line);"><span>${it.label}</span><span class="mono" style="color:var(--ink-2);">${it.window}</span></div>`).join('')}
            <div style="display:flex; justify-content:space-between; font-size:12.5px; padding:6px 0;"><span>🚆 Train ${c.train.no} — ${c.train.label}</span><span class="mono" style="color:var(--ink-2);">${c.train.eta}</span></div>
          </div>
          <div class="k">Why this is flagged</div>
          <p style="font-size:12.5px; color:var(--ink-1); margin:6px 0 10px;">${c.reason}</p>
          <div class="k" style="color:var(--signal-blue);">Recommended resolution</div>
          <p style="font-size:12.5px; margin:6px 0 4px; font-weight:600;">${c.recommendation}</p>
          <p style="font-size:11.5px; color:var(--ink-2); margin-bottom:12px;">${c.alt}</p>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button class="btn sm ghost" ${st!=='Pending'?'disabled':''} onclick="alertToast('Conflict ${c.id} marked for review.')">Review conflict</button>
            <button class="btn sm ok" ${st!=='Pending'?'disabled':''} onclick="acceptConflict('${c.id}')">Accept recommendation</button>
            <button class="btn sm ghost" ${st!=='Pending'?'disabled':''} onclick="alertToast('Modify view is a demo stub — would open the block planner pre-filled for ${c.id}.')">Modify</button>
            <button class="btn sm warn" ${st!=='Pending'?'disabled':''} onclick="rejectConflict('${c.id}')">Reject</button>
            ${st!=='Pending' ? `<span class="badge ${st==='Approved'?'green':'red'}" style="margin-left:auto; align-self:center;">${st}</span>` : ''}
          </div>
        </div>
      `;}).join('')}
    </div>
  `;
}
function sevColor(s){ return s==='HIGH'?'var(--signal-red)':s==='MEDIUM'?'var(--signal-amber)':'var(--signal-green)'; }
function sevBadgeClass(s){ return s==='HIGH'?'red':s==='MEDIUM'?'amber':'green'; }
function sevLabel(s){ return s==='HIGH'?'High-severity':s==='MEDIUM'?'Medium-severity':'Low-severity'; }

function acceptConflict(id){
  approvalState[id] = {status:'Approved', ts:new Date()};
  pushAudit(`Conflict ${id}: recommendation accepted by Control Office — synced to Approval Center.`);
  alertToast(`Conflict ${id} recommendation accepted — sent to Approval Center.`);
  renderView();
}
function rejectConflict(id){
  approvalState[id] = {status:'Rejected', ts:new Date()};
  pushAudit(`Conflict ${id}: AI recommendation rejected by Control Office — synced to Approval Center.`);
  alertToast(`Conflict ${id} recommendation rejected.`);
  renderView();
}

/* ---------- View: Emergency Planning ---------- */

let emergencyActive = false;

function viewEmergency(){
  const total = EMERGENCY_QUEUE.length;
  const pending = EMERGENCY_QUEUE.filter(e=>(approvalState[e.id]?.status||'Pending')==='Pending').length;
  return `
    ${demoBanner()}
    <div class="stat-row" style="grid-template-columns:repeat(3,1fr); margin-bottom:14px;">
      <div class="panel tight stat red"><div class="num mono" style="font-size:20px;">${total}</div><div class="cap">Emergency events triggered this session</div></div>
      <div class="panel tight stat amber"><div class="num mono" style="font-size:20px;">${pending}</div><div class="cap">Awaiting officer approval</div></div>
      <div class="panel tight stat blue"><div class="num mono" style="font-size:20px;">~6</div><div class="cap">Pipeline steps per re-plan (simulated)</div></div>
    </div>
    <div class="panel" style="border:1px solid var(--signal-red); background:linear-gradient(180deg, var(--signal-red-soft), transparent);">
      <div class="lbl" style="color:var(--signal-red);">Urgent / unplanned events</div>
      <h3>Trigger an emergency re-plan</h3>
      <p style="font-size:12.5px; color:var(--ink-1); margin:6px 0 14px;">Simulates how RailNex would recompute priorities and block plans when an unplanned event interrupts the schedule. A Railway Officer must still approve the final action.</p>
      <div class="grid g4" style="margin-bottom:14px;">
        ${['Accident / Derailment','Track failure','Signal failure','Natural calamity'].map(t=>`<button class="btn warn" onclick="triggerEmergency('${t}')">⚠ ${t}</button>`).join('')}
      </div>
      <button class="btn ghost" onclick="triggerEmergency('VIP / Government movement')">⚑ VIP / Government movement</button>
    </div>
    <div id="emergencyResult" style="margin-top:16px;"></div>
    ${total>0 ? `
    <div class="panel" style="margin-top:16px;">
      <div class="lbl">Event history (this session)</div>
      <h3 style="margin-bottom:10px;">Past emergency re-plans</h3>
      <div class="tbl-wrap"><table>
        <thead><tr><th>ID</th><th>Event</th><th>Risk</th><th>Status</th></tr></thead>
        <tbody>${EMERGENCY_QUEUE.map(e=>`<tr><td class="mono">${e.id}</td><td>${e.title}</td><td><span class="badge red">${e.risk}</span></td><td><span class="badge ${(approvalState[e.id]?.status||'Pending')==='Approved'?'green':(approvalState[e.id]?.status||'Pending')==='Rejected'?'red':'blue'}">${approvalState[e.id]?.status||'Pending'}</span></td></tr>`).join('')}</tbody>
      </table></div>
    </div>` : ''}
  `;
}

let emergencyRunning = false;
async function triggerEmergency(type){
  if(emergencyRunning) return;
  emergencyRunning = true;
  emergencyActive = true;
  pushAudit(`Emergency event triggered: ${type} — RailNex recalculating affected section, trains and block priorities.`);
  const affectedTrains = TRAINS.slice(0,2);
  const el = document.getElementById('emergencyResult');
  el.innerHTML = `
    <div class="panel emg-pulse" style="border-left:3px solid var(--signal-red); border-color:var(--signal-red);">
      <div style="display:flex; justify-content:space-between; align-items:start;">
        <div>
          <div class="lbl" style="color:var(--signal-red);">Emergency event · live</div>
          <h3>${type} detected</h3>
        </div>
        <span class="badge red">RECALCULATING</span>
      </div>
      <div class="flow" style="margin:14px 0;" id="emgFlow"></div>
      <div id="emgDetails" style="min-height:18px; font-size:12.5px; color:var(--ink-1);">Detecting affected section…</div>
    </div>
    <div id="emgFinal"></div>
  `;
  const emgSteps = ['Detect section','Identify trains','Recalculate priorities','Recalculate plan','Suggest alt. route','Notify control room'];
  const emgTexts = [
    'Section identified: Nagpur–Wardha, KM 12+300–13+000.',
    `Trains within the affected window: ${affectedTrains.map(t=>t.no).join(', ')}.`,
    'Priorities recalculated — MR-1042 (Track) and MR-1043 (Signal) escalated to CRITICAL.',
    'Emergency block plan drafted: full corridor closure, 60-minute window.',
    'Alternative route identified — Route B via Itarsi loop, +14 min transit time.',
    'Control room and department heads notified (simulated).',
  ];
  for(let i=0;i<emgSteps.length;i++){
    renderFlow('emgFlow', emgSteps, i);
    const d = document.getElementById('emgDetails');
    if(d) d.textContent = emgTexts[i];
    await sleep(600);
  }
  renderFlow('emgFlow', emgSteps, emgSteps.length);
  const finalEl = document.getElementById('emgFinal');
  if(finalEl){
    finalEl.innerHTML = `
      <div class="panel" style="border-left:3px solid var(--signal-red); margin-top:12px;">
        <div class="kv">
          <div><div class="k">Affected section</div><div class="v">Nagpur–Wardha, KM 12+300–13+000</div></div>
          <div><div class="k">Affected trains</div><div class="v">${affectedTrains.map(t=>t.no).join(', ')}</div></div>
          <div><div class="k">AI action</div><div class="v">Recalculate block priority for the section</div></div>
          <div><div class="k">Recommended action</div><div class="v">Urgent maintenance block, corridor closed to traffic</div></div>
          <div><div class="k">Alternative route</div><div class="v">Divert via Route B (Itarsi loop)</div></div>
          <div><div class="k">Status</div><div class="v"><span class="badge red">Awaiting human approval</span></div></div>
        </div>
        <div style="display:flex; gap:8px; margin-top:10px;">
          <button class="btn primary sm" onclick="navigate('approval')">Send to Approval Center</button>
          <button class="btn ghost sm" onclick="alertToast('Control room + affected department heads notified (simulated).')">Notify stakeholders</button>
        </div>
      </div>
      ${emergencyScheduleImpact()}
    `;
  }
  const emgId = `EMG-${Date.now().toString().slice(-4)}`;
  EMERGENCY_QUEUE = EMERGENCY_QUEUE.filter(e=>e.kind!=='Emergency re-plan'); // keep only the latest emergency queued for approval
  EMERGENCY_QUEUE.push({
    id: emgId, kind:'Emergency re-plan', title:`${type} — emergency block`,
    reason:'Urgent unplanned event; corridor closed and today\'s schedule reflowed around it.',
    trains:`${affectedTrains.map(t=>t.no).join(', ')} within the affected window`,
    risk:'HIGH', impact:'Corridor closed to traffic; Route B diversion in effect',
  });
  pushAudit(`Emergency re-plan ${emgId} ready for ${type} — awaiting officer approval.`);
  emergencyRunning = false;
}
function emergencyScheduleImpact(){
  const bumped = [
    {id:'MR-1043', from:'22 Sep · 14:30', to:'22 Sep · 16:45', reason:'Signal relay work shares the corridor now held for the emergency block.'},
    {id:'MR-1048', from:'22 Sep · 14:40', to:'22 Sep · 17:00', reason:'Point machine servicing shares the same section and crew as the emergency response.'},
    {id:'MR-1044', from:'22 Sep · 16:00', to:'23 Sep · 09:30', reason:'Telecom technician pool reassigned to support the emergency at Wardha corridor.'},
  ];
  return `
    <div class="panel" style="margin-top:12px;">
      <div class="lbl">Schedule impact</div>
      <h3 style="margin-bottom:8px;">How today's schedule reflows around the emergency block</h3>
      <div class="tbl-wrap"><table>
        <thead><tr><th>Request</th><th>Originally scheduled</th><th>Reflowed to</th><th>Reason</th></tr></thead>
        <tbody>${bumped.map(b=>`<tr><td class="mono">${b.id}</td><td class="mono" style="color:var(--ink-2); text-decoration:line-through;">${b.from}</td><td class="mono" style="color:var(--signal-amber); font-weight:700;">${b.to}</td><td style="font-size:11.5px; color:var(--ink-1);">${b.reason}</td></tr>`).join('')}</tbody>
      </table></div>
    </div>
  `;
}

/* ---------- View: Approval Center ---------- */

function buildApprovalItems(){
  return [
    ...BLOCKS.map(b=>({id:b.id, kind:'Block plan', title:`${b.section.split(',')[0]} combined block`, reason:`${b.reco.charAt(0)}${b.reco.slice(1).toLowerCase()} — ${b.activities}.`, trains:`${b.trains} train(s) in window · ${b.time}`, risk:b.impact, impact:`${b.impact} operational disruption`})),
    ...CONFLICTS.map(c=>({id:c.id, kind:'Conflict resolution', title:`Corridor conflict ${c.id}`, reason:c.reason, trains:`Train ${c.train.no} — ${c.train.label}`, risk:c.severity, impact:c.recommendation})),
    ...EMERGENCY_QUEUE,
  ];
}

function viewApproval(){
  const items = buildApprovalItems();
  const stCount = s => items.filter(it=>(approvalState[it.id]?.status||'Pending')===s).length;
  return `
    ${demoBanner('Human-in-the-loop is mandatory — no plan is final without officer approval.')}
    <div class="stat-row" style="grid-template-columns:repeat(4,1fr); margin-bottom:14px;">
      <div class="panel tight stat blue"><div class="num mono" style="font-size:20px;">${stCount('Pending')}</div><div class="cap">Awaiting officer decision</div></div>
      <div class="panel tight stat green"><div class="num mono" style="font-size:20px;">${stCount('Approved')}</div><div class="cap">Approved</div></div>
      <div class="panel tight stat amber"><div class="num mono" style="font-size:20px;">${stCount('Modified')}</div><div class="cap">Sent back for modification</div></div>
      <div class="panel tight stat red"><div class="num mono" style="font-size:20px;">${stCount('Rejected')}</div><div class="cap">Rejected</div></div>
    </div>
    <div style="display:flex; flex-direction:column; gap:14px; margin-bottom:20px;">
      ${items.map(it=>{
        const st = approvalState[it.id]?.status || 'Pending';
        return `
        <div class="panel" style="border-left:3px solid ${st==='Approved'?'var(--signal-green)':st==='Rejected'?'var(--signal-red)':'var(--signal-blue)'};">
          <div style="display:flex; justify-content:space-between; align-items:start; flex-wrap:wrap; gap:8px;">
            <div>
              <div class="lbl">${it.kind} · ${it.id}</div>
              <h3>${it.title}</h3>
            </div>
            <span class="badge ${st==='Approved'?'green':st==='Rejected'?'red':'blue'}">${st==='Pending'?'AI RECOMMENDED':st.toUpperCase()}</span>
          </div>
          <div class="kv">
            <div><div class="k">Reason</div><div class="v">${it.reason}</div></div>
            <div><div class="k">Affected trains</div><div class="v">${it.trains}</div></div>
            <div><div class="k">Risk</div><div class="v">${it.risk}</div></div>
            <div><div class="k">Expected impact</div><div class="v">${it.impact}</div></div>
          </div>
          <div style="display:flex; gap:8px; margin-top:10px;">
            <button class="btn ok sm" ${st!=='Pending'?'disabled':''} onclick="decide('${it.id}','Approved')">Approve</button>
            <button class="btn ghost sm" ${st!=='Pending'?'disabled':''} onclick="decide('${it.id}','Modified')">Modify</button>
            <button class="btn warn sm" ${st!=='Pending'?'disabled':''} onclick="decide('${it.id}','Rejected')">Reject</button>
          </div>
        </div>`;
      }).join('')}
    </div>

    <div class="panel">
      <div class="lbl">Audit trail</div>
      <h3 style="margin-bottom:10px;">Recommendation → review → approval log</h3>
      <div style="display:flex; flex-direction:column; gap:8px; max-height:280px; overflow-y:auto;">
        ${AUDIT.map(a=>`<div style="font-size:12px; padding:8px 10px; background:var(--navy-2); border-radius:3px; display:flex; justify-content:space-between; gap:10px;"><span>${a.text}</span><span class="mono" style="color:var(--ink-2); white-space:nowrap;">${fmtTime(a.ts)}</span></div>`).join('')}
      </div>
    </div>
  `;
}

let lastDecision = null;
function decide(id, status){
  approvalState[id] = {status, ts:new Date()};
  pushAudit(`${id}: officer marked as ${status.toUpperCase()}.`);
  const item = buildApprovalItems().find(x=>x.id===id) || {id, kind:'Item', title:id, reason:'—'};
  showApprovalConfirm(item, status);
}

function showApprovalConfirm(item, status){
  lastDecision = {item, status, ts:new Date()};
  currentView = 'approval-confirm';
  document.getElementById('viewTitle').textContent = status==='Approved' ? 'Approved' : status==='Rejected' ? 'Rejected' : 'Modification logged';
  renderNav();
  document.getElementById('content').innerHTML = viewApprovalConfirm();
  window.scrollTo({top:0, behavior:'smooth'});
  history.pushState({view:'approval-confirm', decision:lastDecision}, '', '#approval-confirm');
}

function viewApprovalConfirm(){
  const {item, status, ts} = lastDecision;
  const color = status==='Approved' ? 'green' : status==='Rejected' ? 'red' : 'amber';
  const icon = status==='Approved' ? '✓' : status==='Rejected' ? '✕' : '✎';
  const headline = status==='Approved' ? 'Recommendation approved' : status==='Rejected' ? 'Recommendation rejected' : 'Sent back for modification';
  const idNum = (item.id.replace(/\D/g,'') || '0').slice(-4).padStart(4,'0');
  const pnCode = `PN-${String(ts.getHours()).padStart(2,'0')}${String(ts.getMinutes()).padStart(2,'0')}-${idNum}`;
  const formNo = `T/351/${ts.getFullYear()}/${idNum}`;
  return `
    <div class="panel" style="max-width:560px; margin:24px auto; text-align:center; border-top:4px solid var(--signal-${color});">
      <div style="width:64px; height:64px; border-radius:50%; background:var(--signal-${color}-soft); color:var(--signal-${color}); display:flex; align-items:center; justify-content:center; margin:0 auto 16px; font-size:26px; font-weight:700;">${icon}</div>
      <h2 class="hd" style="font-size:24px; margin-bottom:4px;">${headline}</h2>
      <p style="color:var(--ink-2); font-size:12.5px; margin:0 0 20px;">${item.kind} · ${item.id}</p>
      <div class="kv" style="text-align:left; grid-template-columns:1fr 1fr;">
        <div><div class="k">Item</div><div class="v">${item.title}</div></div>
        <div><div class="k">Decision</div><div class="v"><span class="badge ${color}">${status.toUpperCase()}</span></div></div>
        <div><div class="k">Officer</div><div class="v">Railway Officer, Control Office</div></div>
        <div><div class="k">Timestamp</div><div class="v mono">${fmtTime(ts)}</div></div>
      </div>
      <div style="margin-top:6px; text-align:left;">
        <div class="k">Reason on file</div>
        <p style="font-size:12.5px; color:var(--ink-1); margin-top:6px;">${item.reason}</p>
      </div>
      ${status==='Approved' ? `
      <div style="margin-top:16px; padding-top:16px; border-top:1px solid var(--line); text-align:left;">
        <div class="k" style="margin-bottom:8px;">Statutory paperwork issued (demo format)</div>
        <div class="kv" style="grid-template-columns:1fr 1fr;">
          <div><div class="k">Form T/351 (Disconnection Notice)</div><div class="v mono">${formNo}</div></div>
          <div><div class="k">Private Number (line possession code)</div><div class="v mono">${pnCode}</div></div>
        </div>
        <div class="k" style="margin:14px 0 6px;">Approval chain (demo)</div>
        <div class="flow">
          <div class="node done"><div class="t">Section Controller</div><div class="s">Reviewed</div></div>
          <div class="arrow">→</div>
          <div class="node done"><div class="t">Control Office</div><div class="s">Sanctioned</div></div>
          <div class="arrow">→</div>
          <div class="node done"><div class="t">Station Master</div><div class="s">PN issued to gang</div></div>
        </div>
      </div>` : ''}
      <div style="margin-top:22px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
        <button class="btn primary" onclick="navigate('approval')">Back to Approval Center</button>
        <button class="btn ghost" onclick="navigate('dashboard')">Go to Dashboard</button>
      </div>
    </div>
  `;
}

function fmtTime(d){
  return d.toLocaleTimeString('en-IN', {hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false});
}

/* ---------- View: Analytics ---------- */

let charts = {};

function viewAnalytics(){
  return `
    ${demoBanner('All figures below are prototype simulation values, not measured railway performance data.')}
    <div class="panel" style="margin-bottom:16px;">
      <div class="lbl">How the AI Engine works</div>
      <h3 style="margin-bottom:10px;">Data → Prioritization → Conflict Detection → Optimization → Recommendation → Approval</h3>
      <div class="pipeline-bar" id="analyticsPipeline"></div>
    </div>

    <div class="grid g4" style="margin-bottom:10px;">
      <div class="panel stat green"><div class="num mono">−42%</div><div class="cap">Planning time (simulation)</div></div>
      <div class="panel stat green"><div class="num mono">3 → 0</div><div class="cap">Train-block conflicts resolved</div></div>
      <div class="panel stat blue"><div class="num mono">86%</div><div class="cap">Block utilization (simulation)</div></div>
      <div class="panel stat amber"><div class="num mono">2</div><div class="cap">Safety interventions this week</div></div>
    </div>

    <div class="lbl" style="margin:18px 0 8px;">Section 1 — Impact of AI Optimization (before vs after)</div>
    <div class="grid g2" style="margin-bottom:16px;">
      <div class="panel">
        <div class="lbl">Prototype simulation</div>
        <h3 style="margin-bottom:4px;">Train–block conflicts, before vs after AI optimization</h3>
        <p style="font-size:11px; color:var(--ink-2); margin:0 0 8px;">Shows how many corridor conflicts existed per day before RailNex combined/retimed requests, versus after.</p>
        <canvas id="chartConflicts" height="220"></canvas>
      </div>
      <div class="panel">
        <div class="lbl">Prototype simulation</div>
        <h3 style="margin-bottom:4px;">Planning time per block (minutes)</h3>
        <p style="font-size:11px; color:var(--ink-2); margin:0 0 8px;">How long it took to arrive at a workable block plan, week over week, as combine-and-optimize logic matured.</p>
        <canvas id="chartTime" height="220"></canvas>
      </div>
    </div>

    <div class="lbl" style="margin:18px 0 8px;">Section 2 — Live system data (computed from what's actually on record)</div>
    <div class="grid g2" style="margin-bottom:16px;">
      <div class="panel">
        <div class="lbl">Live — from AI Prioritization</div>
        <h3 style="margin-bottom:4px;">Requests by priority band</h3>
        <p style="font-size:11px; color:var(--ink-2); margin:0 0 8px;">Where today's maintenance requests actually land — Criticality + Urgency + Impact scored, real-time.</p>
        <canvas id="chartPriority" height="220"></canvas>
      </div>
      <div class="panel">
        <div class="lbl">Live — from Administration → Blocks</div>
        <h3 style="margin-bottom:4px;">Blocks by category</h3>
        <p style="font-size:11px; color:var(--ink-2); margin:0 0 8px;">Routine vs Emergency split across every block currently in the schedule.</p>
        <canvas id="chartBlockCat" height="220"></canvas>
      </div>
      <div class="panel">
        <div class="lbl">Live — from Maintenance Requests</div>
        <h3 style="margin-bottom:4px;">Requests by division</h3>
        <p style="font-size:11px; color:var(--ink-2); margin:0 0 8px;">Where the workload actually sits right now — Nagpur, Wardha or Itarsi.</p>
        <canvas id="chartDivReq" height="220"></canvas>
      </div>
      <div class="panel">
        <div class="lbl">Prototype simulation</div>
        <h3 style="margin-bottom:4px;">Block utilization by department</h3>
        <p style="font-size:11px; color:var(--ink-2); margin:0 0 8px;">Simulated share of block time used by each maintenance department.</p>
        <canvas id="chartUtil" height="220"></canvas>
      </div>
    </div>
  `;
}

afterRender.analytics = function(){
  renderPipeline('analyticsPipeline', SIM_STEPS, SIM_STEPS.length);
  Object.values(charts).forEach(c=>c && c.destroy());
  const gridColor = 'rgba(42,67,97,.5)';
  const tickColor = '#7F93A8';
  const baseOpts = {
    responsive:true,
    plugins:{legend:{labels:{color:'#B9C7D6', font:{size:11}}}},
    scales:{x:{ticks:{color:tickColor, font:{size:10}}, grid:{color:gridColor}}, y:{ticks:{color:tickColor, font:{size:10}}, grid:{color:gridColor}}}
  };
  charts.conflicts = new Chart(document.getElementById('chartConflicts'), {
    type:'bar',
    data:{labels:['Mon','Tue','Wed','Thu','Fri'], datasets:[
      {label:'Before AI', data:[5,4,6,3,5], backgroundColor:'#D8503F'},
      {label:'After AI', data:[1,0,1,0,0], backgroundColor:'#2E9B5C'},
    ]},
    options: baseOpts,
  });
  charts.util = new Chart(document.getElementById('chartUtil'), {
    type:'doughnut',
    data:{labels:['Track','Signal','Telecom','Traction','Bridge'], datasets:[{data:[32,26,12,20,10], backgroundColor:['#3E8FD9','#D9A23B','#7F93A8','#D8503F','#2E9B5C']}]},
    options:{responsive:true, plugins:{legend:{position:'bottom', labels:{color:'#B9C7D6', font:{size:10}}}}},
  });
  charts.time = new Chart(document.getElementById('chartTime'), {
    type:'line',
    data:{labels:['W1','W2','W3','W4'], datasets:[{label:'Avg. planning time', data:[68,54,41,33], borderColor:'#3E8FD9', backgroundColor:'rgba(62,143,217,.15)', fill:true, tension:.35}]},
    options: baseOpts,
  });
  charts.priority = new Chart(document.getElementById('chartPriority'), {
    type:'bar',
    data:{labels:['High','Medium','Low'], datasets:[{label:'Requests', data:[REQUESTS.filter(r=>priorityScore(r).band==='HIGH').length, REQUESTS.filter(r=>priorityScore(r).band==='MEDIUM').length, REQUESTS.filter(r=>priorityScore(r).band==='LOW').length], backgroundColor:['#D8503F','#D9A23B','#2E9B5C']}]},
    options:{...baseOpts, indexAxis:'y', plugins:{legend:{display:false}}},
  });
  charts.blockCat = new Chart(document.getElementById('chartBlockCat'), {
    type:'doughnut',
    data:{labels:['Routine','Emergency'], datasets:[{data:[
      BLOCK_SCHEDULE.filter(b=>b.category==='Routine').length,
      BLOCK_SCHEDULE.filter(b=>b.category==='Emergency').length,
    ], backgroundColor:['#3E8FD9','#D8503F']}]},
    options:{responsive:true, plugins:{legend:{position:'bottom', labels:{color:'#48596F', font:{size:10}}}}},
  });
  charts.divReq = new Chart(document.getElementById('chartDivReq'), {
    type:'bar',
    data:{labels:['Nagpur','Wardha','Itarsi'], datasets:[{label:'Requests', data:[
      REQUESTS.filter(r=>r.division==='Nagpur').length,
      REQUESTS.filter(r=>r.division==='Wardha').length,
      REQUESTS.filter(r=>r.division==='Itarsi').length,
    ], backgroundColor:['#2472C4','#7358C4','#1F9C8F']}]},
    options:{...baseOpts, plugins:{legend:{display:false}}},
  });
};

/* ---------- View: System / Data Sources ---------- */

function viewSystem(){
  return `
    ${demoBanner()}
    <div class="panel" style="margin-bottom:16px; border-left:3px solid var(--signal-blue);">
      <div class="lbl">Why this problem is real</div>
      <h3 style="margin-bottom:8px;">Grounded in a published Government of India audit</h3>
      <p style="font-size:12.5px; color:var(--ink-1); margin:0 0 8px;">CAG Report No. 22 of 2022 ("Performance Audit on Derailment in Indian Railways") records that track machines are left idle by blocks not being planned properly across divisions and poor coordination with the Operating Department — exactly the multi-department planning gap RailNex targets.</p>
      <p style="font-size:11px; color:var(--ink-2); margin:0;">Source: Comptroller and Auditor General of India, Report No. 22 of 2022 (Railways) · cag.gov.in. Existing systems referenced (BDMS, TMS, SMMS, COA) are real Indian Railways platforms maintained by CRIS (Centre for Railway Information Systems); RailNex is a demo layer and is not connected to them.</p>
    </div>
    <div class="panel" style="margin-bottom:16px;">
      <div class="lbl">Data integration layer</div>
      <h3 style="margin-bottom:10px;">Source systems feeding RailNex (simulated feeds)</h3>
      <div class="grid g3" style="grid-template-columns:repeat(5,1fr); gap:10px;">
        <div class="arch-col"><h4>TMS</h4><ul><li>Track defects</li><li>Overdue maintenance</li><li>Maintenance status</li><li>Required duration</li></ul></div>
        <div class="arch-col"><h4>SMMS</h4><ul><li>Signal defects</li><li>Telecom faults</li><li>Equipment status</li><li>Maintenance data</li></ul></div>
        <div class="arch-col"><h4>TDMS</h4><ul><li>Traction defects</li><li>Asset health</li><li>Maintenance records</li></ul></div>
        <div class="arch-col"><h4>COA</h4><ul><li>Train time table</li><li>Movement schedule</li><li>Route / platform data</li><li>Goods forecast</li></ul></div>
        <div class="arch-col"><h4>BDMS</h4><ul><li>Block/disconnection requests</li><li>Maintenance blocks</li><li>Resource requirements</li></ul></div>
      </div>
      <div class="flow" style="margin-top:14px;">
        <div class="node"><div class="t">Data cleaning &amp; validation</div><div class="s">Format checks, de-duplication</div></div>
        <div class="arrow">→</div>
        <div class="node"><div class="t">Standardization</div><div class="s">Common section / asset IDs</div></div>
        <div class="arrow">→</div>
        <div class="node"><div class="t">Real-time sync</div><div class="s">Simulated polling interval</div></div>
        <div class="arrow">→</div>
        <div class="node"><div class="t">Unified dataset</div><div class="s">Single source for AI engine</div></div>
      </div>
      <div class="demo-banner" style="margin-top:14px; margin-bottom:0;">◆ All five feeds above show demo/simulated records. No live connection to TMS, SMMS, TDMS, COA or BDMS exists in this prototype.</div>
    </div>

    <div class="panel" style="margin-bottom:16px;">
      <div class="lbl">Which division needs what — at a glance</div>
      <h3 style="margin-bottom:4px;">Division × system snapshot</h3>
      <p style="font-size:12px; color:var(--ink-2); margin:0 0 12px;">TMS = Track, SMMS = Signal/Telecom, TDMS = Traction. Darker badge = more urgent. Click a cell to open its most urgent request.</p>
      <div class="horizon-tabs">
        <button class="btn sm ${scheduleHorizon==='day'?'primary':'ghost'}" data-horizon="day">Day · 22 Sep 2026</button>
        <button class="btn sm ${scheduleHorizon==='week'?'primary':'ghost'}" data-horizon="week">Week · 22–28 Sep 2026</button>
        <button class="btn sm ${scheduleHorizon==='month'?'primary':'ghost'}" data-horizon="month">Month · September 2026</button>
      </div>
      <div id="matrixWrap"></div>
    </div>

    <div class="panel" style="margin-bottom:16px;">
      <div class="lbl">Full schedule, by division</div>
      <h3 style="margin-bottom:4px;">Every pending block/disconnection request (BDMS) for the selected window</h3>
      <p style="font-size:12px; color:var(--ink-2); margin:0 0 12px;">Cross-referenced with TMS/SMMS/TDMS defect data and the COA timetable below.</p>
      <div id="divisionTablesWrap"></div>
      <div style="margin-top:18px; padding-top:14px; border-top:1px solid var(--line);">
        <div class="src-block"><h4><span class="src-tag">COA</span> Train time table &amp; movement schedule</h4>
          <div class="tbl-wrap"><table>
            <thead><tr><th>Train no.</th><th>Name</th><th>Section</th><th>Scheduled</th><th>Category</th></tr></thead>
            <tbody>${TRAINS.map(t=>`<tr><td class="mono">${t.no}</td><td>${t.name}</td><td>${t.section}</td><td class="mono">${t.eta}</td><td><span class="badge blue">${t.priority}</span></td></tr>`).join('')}</tbody>
          </table></div>
        </div>
      </div>
    </div>

    <div class="panel" style="margin-bottom:16px;">
      <div class="lbl">System architecture</div>
      <h3 style="margin-bottom:10px;">End-to-end decision-support flow</h3>
      <div style="display:flex; flex-direction:column; gap:0; align-items:center;">
        ${archNode('TMS · SMMS · TDMS · COA · BDMS','Source systems (simulated)')}
        ${archArrow()}
        ${archNode('Data integration layer','Cleaning, standardization, sync')}
        ${archArrow()}
        ${archNode('Unified dataset','Single operational picture')}
        ${archArrow()}
        ${archNode('AI prioritization engine','Criticality + Urgency + Impact')}
        ${archArrow()}
        ${archNode('Optimization engine','Constraint handling, conflict detection, scheduling')}
        ${archArrow()}
        ${archNode('AI-recommended plan','Block / disconnection proposal + reasoning')}
        ${archArrow()}
        ${archNode('Human validation &amp; approval','Railway Officer — mandatory')}
        ${archArrow()}
        ${archNode('Final block / disconnection plan','Issued to Control Office', true)}
      </div>
    </div>

    <div class="panel">
      <div class="lbl">Security &amp; compliance</div>
      <h3 style="margin-bottom:10px;">Role-based access (demo)</h3>
      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:14px;" id="roleChips">
        <button class="role-chip active" data-role="officer">Railway Officer</button>
        <button class="role-chip" data-role="control">Control Office</button>
        <button class="role-chip" data-role="super">Maintenance Supervisor</button>
        <button class="role-chip" data-role="admin">Administrator</button>
      </div>
      <div id="roleBody"></div>
      <div class="grid g4" style="margin-top:16px;">
        <div class="panel tight"><div class="lbl">Encryption</div><div style="font-size:12px; color:var(--ink-1);">Data in transit &amp; at rest (demo statement)</div></div>
        <div class="panel tight"><div class="lbl">Audit trail</div><div style="font-size:12px; color:var(--ink-1);">Every recommendation and decision logged</div></div>
        <div class="panel tight"><div class="lbl">Human approval</div><div style="font-size:12px; color:var(--ink-1);">Mandatory before any final plan</div></div>
        <div class="panel tight"><div class="lbl">Action logging</div><div style="font-size:12px; color:var(--ink-1);">Timestamped, per-role</div></div>
      </div>
    </div>
  `;
}
function archNode(t,s,last){
  return `<div class="node" style="max-width:420px; width:100%; ${last?'border-color:var(--signal-green);':''}"><div class="t" style="${last?'color:var(--signal-green);':''}">${t}</div><div class="s">${s}</div></div>`;
}
function archArrow(){ return `<div style="color:var(--ink-2); font-size:16px; padding:2px 0;">↓</div>`; }

const ROLE_PERMS = {
  officer:['Approve / reject AI-recommended block plans','Approve emergency re-plans','View full audit trail'],
  control:['Raise and edit maintenance requests','Review conflicts and propose resolutions','Cannot give final approval'],
  super:['Submit requests for own department','View department-specific block schedule','Cannot view cross-department analytics'],
  admin:['Manage user roles and access','View system health and data sync status','No operational approval rights'],
};

function renderMatrix(){
  const wrap = document.getElementById('matrixWrap');
  if(!wrap) return;
  const divisions = ['Nagpur','Wardha','Itarsi'];
  const sources = [{k:'TMS', lbl:'TMS · Track'}, {k:'SMMS', lbl:'SMMS · Signal/Telecom'}, {k:'TDMS', lbl:'TDMS · Traction'}];
  const rows = divisions.map(div=>{
    const cells = sources.map(s=>{
      const items = REQUESTS.filter(r=>r.division===div && r.source===s.k && inHorizon(r.date)).sort((a,b)=>b.criticality-a.criticality);
      return {...s, items, top: items[0] || null};
    });
    return {div, cells};
  });
  wrap.innerHTML = `
    <div class="tbl-wrap"><table>
      <thead><tr><th>Division</th>${sources.map(s=>`<th>${s.lbl}</th>`).join('')}</tr></thead>
      <tbody>
        ${rows.map(row=>`
          <tr>
            <td class="hd" style="font-size:15px; white-space:nowrap;">${row.div}</td>
            ${row.cells.map(cell=>{
              if(!cell.items.length) return `<td><span class="badge grey">No pending work</span></td>`;
              const rc = riskColor(cell.top.criticality);
              return `<td style="cursor:pointer;" onclick="openRequestModal('${cell.top.id}')">
                <span class="badge" style="background:${rc.bg}; color:${rc.c};">${cell.items.length} pending · ${rc.band}</span>
                <div style="font-size:11px; color:var(--ink-2); margin-top:4px;">${cell.top.type}</div>
              </td>`;
            }).join('')}
          </tr>`).join('')}
      </tbody>
    </table></div>
  `;
}

function renderDivisionTables(){
  const wrap = document.getElementById('divisionTablesWrap');
  if(!wrap) return;
  const divisions = ['Nagpur','Wardha','Itarsi'];
  wrap.innerHTML = divisions.map(div=>{
    const items = REQUESTS.filter(r=>r.division===div && inHorizon(r.date))
      .sort((a,b)=> a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
    const rows = items.length ? `
      <div class="tbl-wrap"><table>
        <thead><tr><th>Request</th><th>System</th><th>Section</th><th>Maintenance type</th><th>Urgency</th><th>Date</th><th>Time</th><th>Why this, now</th></tr></thead>
        <tbody>${items.map(r=>`<tr data-id="${r.id}"><td class="mono">${r.id}</td><td><span class="src-tag">${r.source}</span></td><td>${r.section}</td><td>${r.type}</td><td>${bandBadge(priorityScore(r).band)}</td><td class="mono">${r.date}</td><td class="mono">${r.time}</td><td style="max-width:220px; white-space:normal; font-size:11.5px; color:var(--ink-1);">${r.note}</td></tr>`).join('')}</tbody>
      </table></div>
    ` : `<div style="font-size:12px; color:var(--ink-2); padding:6px 0;">No maintenance scheduled in this window.</div>`;
    return `<div class="src-block"><h4>${div} Division <span class="src-tag">${items.length} item${items.length!==1?'s':''}</span></h4>${rows}</div>`;
  }).join('');
  wrap.querySelectorAll('tbody tr[data-id]').forEach(tr=>{
    tr.onclick = ()=> openRequestModal(tr.dataset.id);
  });
}

afterRender.system = function(){
  renderMatrix();
  renderDivisionTables();
  document.querySelectorAll('[data-horizon]').forEach(b=>{
    b.onclick = ()=>{ scheduleHorizon=b.dataset.horizon; renderView(); };
  });
  const body = document.getElementById('roleBody');
  function showRole(r){
    body.innerHTML = `<ul style="margin:0; padding-left:18px; font-size:12.5px; color:var(--ink-1);">${ROLE_PERMS[r].map(p=>`<li>${p}</li>`).join('')}</ul>`;
  }
  showRole('officer');
  document.querySelectorAll('.role-chip').forEach(chip=>{
    chip.onclick = ()=>{
      document.querySelectorAll('.role-chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      showRole(chip.dataset.role);
    };
  });
};

/* ---------- Views: Blocks / Defects / Corridors / Trains / Users / Audit Log (flat master-data pages) ---------- */

function viewBlocks(){
  const emg = BLOCK_SCHEDULE.filter(b=>b.category==='Emergency').length;
  const approved = BLOCK_SCHEDULE.filter(b=>b.status==='Approved').length;
  return `
    ${demoBanner()}
    <h2 class="hd" style="font-size:24px; margin-bottom:2px;">Block Management</h2>
    <p style="font-size:12.5px; color:var(--ink-2); margin:0 0 16px;">View and schedule maintenance blocks across corridors.</p>
    <div class="stat-row" style="grid-template-columns:repeat(3,1fr); margin-bottom:14px;">
      <div class="panel tight stat blue"><div class="num mono" style="font-size:20px;">${BLOCK_SCHEDULE.length}</div><div class="cap">Total scheduled blocks</div></div>
      <div class="panel tight stat red"><div class="num mono" style="font-size:20px;">${emg}</div><div class="cap">Emergency category</div></div>
      <div class="panel tight stat green"><div class="num mono" style="font-size:20px;">${approved}</div><div class="cap">Officer-approved</div></div>
    </div>
    <button class="btn primary sm" style="margin-bottom:14px;" onclick="openAddBlockModal()">+ Schedule Block</button>
    <div class="tbl-wrap"><table>
      <thead><tr><th>Date</th><th>Time</th><th>Type</th><th>Category</th><th>Corridor</th><th>Status</th></tr></thead>
      <tbody>${BLOCK_SCHEDULE.map(b=>`<tr><td class="mono">${b.date}</td><td class="mono">${b.time}</td><td>${b.type}</td><td><span class="badge ${b.category==='Emergency'?'red':'blue'}">${b.category}</span></td><td>${b.corridor}</td><td><span class="badge ${b.status==='Approved'?'green':'grey'}">${b.status}</span></td></tr>`).join('')}</tbody>
    </table></div>
  `;
}

function viewDefectsMaster(){
  const critical = MASTER_DEFECTS.filter(d=>d.priority==='Critical').length;
  const depts = new Set(MASTER_DEFECTS.map(d=>d.dept)).size;
  return `
    ${demoBanner()}
    <h2 class="hd" style="font-size:24px; margin-bottom:2px;">Defect Management</h2>
    <p style="font-size:12.5px; color:var(--ink-2); margin:0 0 16px;">Track and resolve maintenance defects across zones.</p>
    <div class="stat-row" style="grid-template-columns:repeat(3,1fr); margin-bottom:14px;">
      <div class="panel tight stat blue"><div class="num mono" style="font-size:20px;">${MASTER_DEFECTS.length}</div><div class="cap">Total logged defects</div></div>
      <div class="panel tight stat red"><div class="num mono" style="font-size:20px;">${critical}</div><div class="cap">Critical priority</div></div>
      <div class="panel tight stat amber"><div class="num mono" style="font-size:20px;">${depts}</div><div class="cap">Departments involved</div></div>
    </div>
    <button class="btn primary sm" style="margin-bottom:14px;" onclick="openAddDefectModal()">+ Report Defect</button>
    <div class="tbl-wrap"><table>
      <thead><tr><th>ID</th><th>Title</th><th>Department</th><th>Location</th><th>Priority</th></tr></thead>
      <tbody>${MASTER_DEFECTS.map(d=>`<tr><td class="mono">${d.id}</td><td>${d.title}</td><td><span class="src-tag">${d.dept}</span></td><td>${d.location}</td><td><span class="badge ${d.priority==='Critical'?'red':d.priority==='High'?'amber':'blue'}">${d.priority}</span></td></tr>`).join('')}</tbody>
    </table></div>
  `;
}

function viewCorridorsMaster(){
  const single = CORRIDOR_MASTER.filter(c=>c.single).length;
  const totalKm = CORRIDOR_MASTER.reduce((s,c)=>s+(parseFloat(c.length)||0),0);
  return `
    ${demoBanner()}
    <h2 class="hd" style="font-size:24px; margin-bottom:2px;">Corridor Management</h2>
    <p style="font-size:12.5px; color:var(--ink-2); margin:0 0 16px;">Manage railway corridors and sections.</p>
    <div class="stat-row" style="grid-template-columns:repeat(3,1fr); margin-bottom:14px;">
      <div class="panel tight stat blue"><div class="num mono" style="font-size:20px;">${CORRIDOR_MASTER.length}</div><div class="cap">Corridors in master list</div></div>
      <div class="panel tight stat amber"><div class="num mono" style="font-size:20px;">${single}</div><div class="cap">Single-line sections</div></div>
      <div class="panel tight stat green"><div class="num mono" style="font-size:20px;">${totalKm.toLocaleString('en-IN')}</div><div class="cap">Total route km (approx.)</div></div>
    </div>
    <button class="btn primary sm" style="margin-bottom:14px;" onclick="openAddCorridorModal()">+ Add Corridor</button>
    <div class="tbl-wrap"><table>
      <thead><tr><th>ID</th><th>Route</th><th>Length</th><th>Single Line</th></tr></thead>
      <tbody>${CORRIDOR_MASTER.map(c=>`<tr><td class="mono">${c.id}</td><td>${c.route}</td><td class="mono">${c.length}</td><td><span class="badge ${c.single?'amber':'grey'}">${c.single?'Yes':'No'}</span></td></tr>`).join('')}</tbody>
    </table></div>
  `;
}

function viewTrainsMaster(){
  return `
    ${demoBanner()}
    <h2 class="hd" style="font-size:24px; margin-bottom:2px;">Train Management</h2>
    <p style="font-size:12.5px; color:var(--ink-2); margin:0 0 16px;">View and manage train schedules.</p>
    <div class="stat-row" style="grid-template-columns:repeat(2,1fr); margin-bottom:14px;">
      <div class="panel tight stat blue"><div class="num mono" style="font-size:20px;">${MASTER_TRAINS.length}</div><div class="cap">Trains in master timetable</div></div>
      <div class="panel tight stat green"><div class="num mono" style="font-size:20px;">${new Set(MASTER_TRAINS.map(t=>t.from)).size}</div><div class="cap">Distinct origin stations</div></div>
    </div>
    <button class="btn primary sm" style="margin-bottom:14px;" onclick="openAddTrainModal()">+ Add Train</button>
    <div class="tbl-wrap"><table>
      <thead><tr><th>Number</th><th>Name</th><th>From</th><th>To</th><th>Departure</th></tr></thead>
      <tbody>${MASTER_TRAINS.map(t=>`<tr><td class="mono">${t.no}</td><td>${t.name}</td><td>${t.from}</td><td>${t.to}</td><td class="mono">${t.dep}</td></tr>`).join('')}</tbody>
    </table></div>
  `;
}

function viewUsersMaster(){
  return `
    ${demoBanner()}
    <h2 class="hd" style="font-size:24px; margin-bottom:2px;">User Management</h2>
    <p style="font-size:12.5px; color:var(--ink-2); margin:0 0 16px;">Manage system users and roles.</p>
    <button class="btn primary sm" style="margin-bottom:14px;" onclick="openAddUserModal()">+ Add User</button>
    <div class="tbl-wrap"><table>
      <thead><tr><th>Username</th><th>Full name</th><th>Role</th></tr></thead>
      <tbody>${ADMIN_USERS.map(u=>`<tr><td class="mono">${u.username}</td><td>${u.fullName}</td><td><span class="badge blue">${u.role}</span></td></tr>`).join('')}</tbody>
    </table></div>
  `;
}

function viewAuditLog(){
  return `
    ${demoBanner()}
    <h2 class="hd" style="font-size:24px; margin-bottom:2px;">Audit Log</h2>
    <p style="font-size:12.5px; color:var(--ink-2); margin:0 0 16px;">Every recommendation, review and decision, timestamped.</p>
    <div class="panel">
      <div style="display:flex; flex-direction:column; gap:8px; max-height:520px; overflow-y:auto;">
        ${AUDIT.map(a=>`<div style="font-size:12px; padding:8px 10px; background:var(--navy-2); border-radius:3px; display:flex; justify-content:space-between; gap:10px;"><span>${a.text}</span><span class="mono" style="color:var(--ink-2); white-space:nowrap;">${fmtTime(a.ts)}</span></div>`).join('')}
      </div>
    </div>
  `;
}

/* ---------- View: Viva Assistant (prepared Q&A for judges — not a live LLM) ---------- */

const VIVA_QA = [
  {cat:'Overview', q:'What problem does RailNex solve, in one line?', a:'Track (TMS), Signal/Telecom (SMMS), Traction (TDMS), the train timetable (COA) and block requests (BDMS) are separate systems today — RailNex is a decision-support layer that reads across all of them, ranks what\'s urgent, combines compatible work into one block, and puts the final call in front of a Railway Officer.'},
  {cat:'Overview', q:'Is this connected to real Indian Railways systems?', a:'No — this is a working prototype with simulated data, clearly labelled throughout. It is not connected to live BDMS, TMS, SMMS, COA or TDMS. The terminology and workflow are modelled on how those real CRIS-built systems work.'},
  {cat:'Overview', q:'What evidence do you have that this is a real problem, not invented?', a:'CAG Report No. 22 of 2022 ("Performance Audit on Derailment in Indian Railways") records that track machines sit idle because blocks aren\'t planned properly across divisions and coordination with the Operating Department is poor — that is exactly the gap RailNex targets.'},
  {cat:'Workflow', q:'Walk me through the pipeline in one sentence.', a:'Data ingestion → AI prioritization (criticality + urgency + impact) → conflict detection → optimization (constraint-based scheduling) → AI recommendation with reasoning → mandatory human approval → final block.'},
  {cat:'Workflow', q:'What happens when two departments request work on the same corridor?', a:'Conflict Detection flags the overlap, explains why (shared corridor, shared time window, or a train passing through), and proposes a resolution — usually combining the requests into one block, or retiming one of them. The officer can accept, modify or reject.'},
  {cat:'Workflow', q:'How does an emergency change the schedule?', a:'Emergency Planning recalculates the affected section and trains, drafts an urgent block, and shows exactly which already-pending requests get reflowed and to what new time — with the reason for each shift, and a bridge if a superfast/VIP service is nearby.'},
  {cat:'AI & Optimization', q:'What does the AI Prioritization score actually use?', a:'Three factors only — Criticality (45%), Urgency (35%) and Impact (20%) — shown with a SHAP-style explainability breakdown per request. We deliberately did not add location or resource factors here.'},
  {cat:'AI & Optimization', q:'Why keep AI Prioritization and the Optimization Engine separate?', a:'The problem statement explicitly separates them: prioritization decides what matters, optimization decides where it fits. Blending both into one score (as some other prototypes do) hides from the officer why something is urgent versus where it happens to fit the calendar — two different questions with two different answers.'},
  {cat:'AI & Optimization', q:'What would the Optimization Engine be built on in production?', a:'A constraint solver such as Google OR-Tools (CP-SAT) — industry standard for this class of scheduling problem. In this prototype the "before vs after" comparison is computed from the actual request durations plus a standard line-clear/handback overhead, not invented numbers.'},
  {cat:'AI & Optimization', q:'How is the demo\'s impact number calculated?', a:'Three separate blocks each carry roughly a 20-minute line-clear/handback overhead: (50+20)+(50+20)+(40+20) = 200 minutes. Combined into one block, the crews work in parallel and the overhead is paid once: max(50,50,40)+20 = 70 minutes — a 65% cut, shown with the working on the Block Planner page.'},
  {cat:'Data & Safety', q:'What are TMS, SMMS, TDMS, COA and BDMS?', a:'Real Indian Railways systems, maintained by CRIS: TMS (Track Management), SMMS (Signal & Telecom faults), TDMS (Traction Distribution), COA (Control Office Application — train timetable), and BDMS (Block Demand & Management System — the block-request system RailNex\'s workflow is modelled on).'},
  {cat:'Data & Safety', q:'Can RailNex issue a block on its own, without a human?', a:'No. Every recommendation is advisory. It cannot issue live signalling, interlocking or traction-power commands — that is stated on every page of the sidebar. A Railway Officer must approve, and approval generates the statutory paperwork reference (Form T/351, Private Number).'},
  {cat:'Data & Safety', q:'What is the Form T/351 and Private Number shown on approval?', a:'Form T/351 is the real disconnection/reconnection notice used to hand over track possession; the Private Number (PN) is the verification code a Station Master issues once signals are confirmed locked. RailNex generates a demo-format reference for these to show where the digital workflow would meet the statutory paper process.'},
  {cat:'Limitations & Future', q:'What are the current limitations of this prototype?', a:'All data is simulated and scoped to one demo corridor (Nagpur–Wardha–Itarsi) plus reference master data; there is no persistence across a page refresh; conflicts are curated for the demo rather than auto-detected from arbitrary overlaps; and Analytics uses illustrative, clearly-labelled figures.'},
  {cat:'Limitations & Future', q:'What would you build next?', a:'Wire a real constraint solver (OR-Tools CP-SAT) behind the Optimization Engine; connect Conflict Detection to scan the full request set automatically instead of curated examples; add persistence (a real backend/DB) so decisions survive a refresh; and pilot on one real division\'s BDMS export in read-only mode before any write access.'},
  {cat:'What-If Scenarios', q:'What happens if a recommendation is approved without proper review?', a:'That would defeat the whole safeguard this system is built around. A rushed approval could combine incompatible activities or miss a train conflict the AI flagged. That is exactly why every approval requires a named officer and generates a statutory paper trail (Form T/351, Private Number) — there is no one-click auto-approve.'},
  {cat:'What-If Scenarios', q:'What happens if the tool itself breaks down or fails mid-use?', a:'Nothing unsafe happens, because RailNex is advisory-only — it never issues a live signalling, interlocking or traction-power command. If the tool fails, the Division simply falls back to the manual BDMS/paper process it already runs today. The failure mode is "lose a planning aid," not "lose control of the track."'},
  {cat:'What-If Scenarios', q:'What if this is rolled out too fast across all divisions at once?', a:'We would not recommend that. A big-bang rollout skips validating the Optimization Engine\'s constraints (VVIP window, night-window preference, workload caps) against each division\'s own operating rules. The right path is a phased pilot — one division, read-only against a real BDMS export — before any division gets write access.'},
  {cat:'What-If Scenarios', q:'What if the AI gives a wrong or unsafe recommendation?', a:'The officer sees the full reasoning before approving, and Reject/Modify buttons exist for exactly this case. A wrong AI suggestion costs a few minutes of officer review time — it can never become a safety incident, because nothing is final without human sign-off.'},
];
const VIVA_CATS = ['All', ...Array.from(new Set(VIVA_QA.map(q=>q.cat)))];
let vivaCat = 'All';

function viewViva(){
  return `
    ${demoBanner('Prepared answers for common judge/viva questions — a quick-reference tool, not a live AI chatbot.')}
    <h2 class="hd" style="font-size:24px; margin-bottom:2px;">Viva Assistant</h2>
    <p style="font-size:12.5px; color:var(--ink-2); margin:0 0 14px;">Tap a question for the answer the team would give live. Grounded in what's actually built above — nothing here overstates the prototype.</p>
    <div style="margin-bottom:14px;">
      ${VIVA_CATS.map(c=>`<button class="faq-cat-chip ${vivaCat===c?'active':''}" data-vivacat="${c}">${c}</button>`).join('')}
    </div>
    <div id="vivaList"></div>
  `;
}

afterRender.viva = function(){
  renderVivaList();
  document.querySelectorAll('[data-vivacat]').forEach(chip=>{
    chip.onclick = ()=>{ vivaCat = chip.dataset.vivacat; renderView(); };
  });
};

function renderVivaList(){
  const el = document.getElementById('vivaList');
  if(!el) return;
  const items = vivaCat==='All' ? VIVA_QA : VIVA_QA.filter(q=>q.cat===vivaCat);
  el.innerHTML = items.map((item,i)=>`
    <div class="faq-item" data-idx="${i}">
      <button class="faq-q">
        <span>${item.q}</span>
        <span class="chev">▾</span>
      </button>
      <div class="faq-a"><div class="faq-a-inner">${item.a}</div></div>
    </div>
  `).join('');
  el.querySelectorAll('.faq-item').forEach(node=>{
    node.querySelector('.faq-q').onclick = ()=> node.classList.toggle('open');
  });
}

function openAddBlockModal(){
  document.getElementById('modalTitle').textContent = 'Schedule Block';
  document.getElementById('modalBody').innerHTML = `
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div><label class="k">Date</label><input type="text" id="fBlkDate" placeholder="e.g. 2026-10-05" style="width:100%; margin-top:5px;"></div>
      <div><label class="k">Time window</label><input type="text" id="fBlkTime" placeholder="e.g. 01:00 – 04:00" style="width:100%; margin-top:5px;"></div>
      <div><label class="k">Type</label><input type="text" id="fBlkType" placeholder="e.g. Rail Grinding" style="width:100%; margin-top:5px;"></div>
      <div><label class="k">Category</label>
        <select id="fBlkCat" style="width:100%; margin-top:5px;"><option>Routine</option><option>Emergency</option></select>
      </div>
      <div><label class="k">Corridor</label><input type="text" id="fBlkCorridor" placeholder="e.g. Nagpur – Wardha" style="width:100%; margin-top:5px;"></div>
      <button class="btn primary" onclick="submitBlock()">Schedule Block</button>
    </div>`;
  document.getElementById('modalBg').classList.add('show');
}
function submitBlock(){
  const date = document.getElementById('fBlkDate').value.trim();
  const time = document.getElementById('fBlkTime').value.trim();
  const type = document.getElementById('fBlkType').value.trim();
  const category = document.getElementById('fBlkCat').value;
  const corridor = document.getElementById('fBlkCorridor').value.trim();
  if(!date || !type || !corridor){ alertToast('Please fill date, type and corridor.'); return; }
  BLOCK_SCHEDULE.push({date, time: time||'—', type, category, corridor, status:'Pending'});
  pushAudit(`Admin: block scheduled — ${type} on ${date} (${corridor}).`);
  closeModal();
  alertToast(`Block scheduled for ${date}.`);
  renderView();
}

function openAddCorridorModal(){
  document.getElementById('modalTitle').textContent = 'Add Corridor';
  document.getElementById('modalBody').innerHTML = `
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div><label class="k">Route</label><input type="text" id="fCorRoute" placeholder="e.g. Pune – Solapur" style="width:100%; margin-top:5px;"></div>
      <div><label class="k">Length</label><input type="text" id="fCorLength" placeholder="e.g. 250 km" style="width:100%; margin-top:5px;"></div>
      <div><label class="k">Single line?</label>
        <select id="fCorSingle" style="width:100%; margin-top:5px;"><option value="no">No</option><option value="yes">Yes</option></select>
      </div>
      <button class="btn primary" onclick="submitCorridor()">Create Corridor</button>
    </div>`;
  document.getElementById('modalBg').classList.add('show');
}
function submitCorridor(){
  const route = document.getElementById('fCorRoute').value.trim();
  const length = document.getElementById('fCorLength').value.trim();
  const single = document.getElementById('fCorSingle').value === 'yes';
  if(!route || !length){ alertToast('Please fill route and length.'); return; }
  const id = `COR-${String(CORRIDOR_MASTER.length+1).padStart(3,'0')}`;
  CORRIDOR_MASTER.push({id, route, length, single});
  pushAudit(`Admin: corridor ${id} (${route}) added to master data.`);
  closeModal();
  alertToast(`Corridor ${id} created.`);
  renderView();
}

function openAddTrainModal(){
  document.getElementById('modalTitle').textContent = 'Add Train';
  document.getElementById('modalBody').innerHTML = `
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div><label class="k">Train number</label><input type="text" id="fTrNo" placeholder="e.g. 12345" style="width:100%; margin-top:5px;"></div>
      <div><label class="k">Name</label><input type="text" id="fTrName" placeholder="e.g. Nagpur Express" style="width:100%; margin-top:5px;"></div>
      <div><label class="k">From</label><input type="text" id="fTrFrom" placeholder="e.g. Nagpur" style="width:100%; margin-top:5px;"></div>
      <div><label class="k">To</label><input type="text" id="fTrTo" placeholder="e.g. Wardha" style="width:100%; margin-top:5px;"></div>
      <div><label class="k">Departure</label><input type="text" id="fTrDep" placeholder="e.g. 14:20" style="width:100%; margin-top:5px;"></div>
      <button class="btn primary" onclick="submitTrain()">Create Train</button>
    </div>`;
  document.getElementById('modalBg').classList.add('show');
}
function submitTrain(){
  const no = document.getElementById('fTrNo').value.trim();
  const name = document.getElementById('fTrName').value.trim();
  const from = document.getElementById('fTrFrom').value.trim();
  const to = document.getElementById('fTrTo').value.trim();
  const dep = document.getElementById('fTrDep').value.trim();
  if(!no || !name || !from || !to || !dep){ alertToast('Please fill all fields.'); return; }
  MASTER_TRAINS.push({no, name, from, to, dep});
  pushAudit(`Admin: train ${no} (${name}) added to master data.`);
  closeModal();
  alertToast(`Train ${no} created.`);
  renderView();
}

function openAddDefectModal(){
  document.getElementById('modalTitle').textContent = 'Report Defect';
  document.getElementById('modalBody').innerHTML = `
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div><label class="k">Title</label><input type="text" id="fDefTitle" placeholder="e.g. Rail Fracture" style="width:100%; margin-top:5px;"></div>
      <div><label class="k">Department</label>
        <select id="fDefDept" style="width:100%; margin-top:5px;"><option>Engineering</option><option>Traction Distribution</option><option>Signal & Telecom</option><option>Mechanical</option></select>
      </div>
      <div><label class="k">Location</label><input type="text" id="fDefLoc" placeholder="e.g. Track 3, Km 40" style="width:100%; margin-top:5px;"></div>
      <div><label class="k">Priority</label>
        <select id="fDefPri" style="width:100%; margin-top:5px;"><option>Critical</option><option>High</option><option>Medium</option><option>Low</option></select>
      </div>
      <button class="btn primary" onclick="submitDefect()">Report Defect</button>
    </div>`;
  document.getElementById('modalBg').classList.add('show');
}
function submitDefect(){
  const title = document.getElementById('fDefTitle').value.trim();
  const dept = document.getElementById('fDefDept').value;
  const location = document.getElementById('fDefLoc').value.trim();
  const priority = document.getElementById('fDefPri').value;
  if(!title || !location){ alertToast('Please fill title and location.'); return; }
  const id = `DEF-${String(MASTER_DEFECTS.length+1).padStart(3,'0')}`;
  MASTER_DEFECTS.push({id, title, dept, location, priority});
  pushAudit(`Admin: defect ${id} (${title}) reported at ${location}.`);
  closeModal();
  alertToast(`Defect ${id} reported.`);
  renderView();
}

function openAddUserModal(){
  document.getElementById('modalTitle').textContent = 'Add User';
  document.getElementById('modalBody').innerHTML = `
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div><label class="k">Username</label><input type="text" id="fUsrName" placeholder="e.g. newuser" style="width:100%; margin-top:5px;"></div>
      <div><label class="k">Password</label><input type="password" id="fUsrPass" placeholder="Min 6 characters" style="width:100%; margin-top:5px;"></div>
      <div><label class="k">Full name</label><input type="text" id="fUsrFull" placeholder="e.g. Rajesh Kumar" style="width:100%; margin-top:5px;"></div>
      <div><label class="k">Role</label>
        <select id="fUsrRole" style="width:100%; margin-top:5px;"><option>Viewer</option><option>Controller</option><option>Approver</option><option>Admin</option></select>
      </div>
      <button class="btn primary" onclick="submitUser()">Create User</button>
    </div>`;
  document.getElementById('modalBg').classList.add('show');
}
function submitUser(){
  const username = document.getElementById('fUsrName').value.trim();
  const password = document.getElementById('fUsrPass').value;
  const fullName = document.getElementById('fUsrFull').value.trim();
  const role = document.getElementById('fUsrRole').value;
  if(!username || !fullName){ alertToast('Please fill username and full name.'); return; }
  if(password.length < 6){ alertToast('Password must be at least 6 characters.'); return; }
  ADMIN_USERS.push({username, fullName, role});
  pushAudit(`Admin: user ${username} (${fullName}, ${role}) created.`);
  closeModal();
  alertToast(`User ${username} created.`);
  renderView();
}

/* ---------- Simulation flow (Run simulation) ---------- */

const SIM_STEPS = ['Data ingestion','Prioritization','Conflict detection','Optimization','Recommendation','Human approval'];

function renderFlow(elId, steps, activeIdx){
  const el = document.getElementById(elId);
  if(!el) return;
  el.innerHTML = steps.map((s,i)=>{
    const cls = i<activeIdx ? 'done' : (i===activeIdx ? 'active' : '');
    return `${i>0?'<div class="arrow">→</div>':''}<div class="node ${cls}"><div class="t">${s}</div></div>`;
  }).join('');
}

let simRunning = false;
let pipelineStage = -1;
async function runSimulation(){
  if(simRunning) return;
  simRunning = true;
  navigate('dashboard');
  pushAudit('Run simulation triggered — walking demo dataset through the full pipeline.');
  for(let i=0;i<SIM_STEPS.length;i++){
    pipelineStage = i;
    renderPipeline('dashPipeline', SIM_STEPS, i);
    renderRecentActivity();
    alertToast(`${SIM_STEPS[i]}…`);
    await sleep(700);
  }
  pipelineStage = SIM_STEPS.length;
  renderPipeline('dashPipeline', SIM_STEPS, SIM_STEPS.length);
  pushAudit('Simulation complete — AI-recommended block plan B-021 sent to Approval Center.');
  renderRecentActivity();
  alertToast('Simulation complete. Recommendation sent to Approval Center.');
  simRunning = false;
}
function sleep(ms){ return new Promise(res=>setTimeout(res,ms)); }

/* ---------- Presentation mode ---------- */

const PRESENT_STEPS = [
  {k:'01 · Problem', h:'Maintenance planning is fragmented', p:'Track, signal, telecom and traction teams raise block requests independently, so overlapping corridor work and train conflicts are usually caught late — or not until the block is already underway.'},
  {k:'02 · Data', h:'TMS + SMMS + TDMS + COA + BDMS', p:'RailNex pulls defect, asset, timetable and block-request data from five source systems into one unified dataset, standardized on a common section and asset reference.'},
  {k:'03 · AI', h:'Criticality + Urgency + Impact', p:'Each request is scored on asset criticality, time urgency and network/traffic impact, producing a ranked, explainable priority queue instead of a first-come first-served backlog.'},
  {k:'04 · Optimization', h:'Constraint-aware block scheduling', p:'A separate optimization step fits prioritized requests into feasible windows — respecting the timetable, resource availability and safety separation — and proposes combining overlapping work into single blocks.'},
  {k:'05 · Result', h:'AI recommendation + human approval', p:'Every recommendation carries its reasoning and risk assessment to a Railway Officer for approval, modification or rejection. RailNex assists the decision; the officer makes it.'},
];
let presentIdx = 0;

function openPresent(){
  presentIdx = 0;
  document.getElementById('present-overlay').classList.add('show');
  renderPresent();
}
function closePresent(){ document.getElementById('present-overlay').classList.remove('show'); }
function renderPresent(){
  const s = PRESENT_STEPS[presentIdx];
  document.getElementById('present-body').innerHTML = `
    <div class="pstep">
      <div class="k mono">${s.k}</div>
      <h2 class="hd">${s.h}</h2>
      <p>${s.p}</p>
    </div>`;
  document.getElementById('pDots').innerHTML = PRESENT_STEPS.map((_,i)=>`<span class="step-dot ${i===presentIdx?'on':''}"></span>`).join('');
  document.getElementById('pPrev').disabled = presentIdx===0;
  document.getElementById('pNext').textContent = presentIdx===PRESENT_STEPS.length-1 ? 'Finish ✓' : 'Next →';
}
document.getElementById('pPrev').onclick = ()=>{ if(presentIdx>0){presentIdx--; renderPresent();} };
document.getElementById('pNext').onclick = ()=>{
  if(presentIdx<PRESENT_STEPS.length-1){presentIdx++; renderPresent();} else {closePresent();}
};

/* ---------- Toasts / clock / boot ---------- */

function alertToast(msg){
  const wrap = document.getElementById('toastWrap');
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(()=>{ t.style.opacity='0'; t.style.transition='opacity .3s'; setTimeout(()=>t.remove(),300); }, 3200);
}

let lastDateStr = '';
let lastTimeStr = '';
function tickClock(){
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', {weekday:'short', day:'2-digit', month:'short', year:'numeric'}).toUpperCase();
  const timeStr = now.toLocaleTimeString('en-IN', {hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false});
  const flaps = (s, prev) => s.split('').map((c,i)=>{
    const changed = c !== prev[i];
    return `<span class="flap${changed?' flip':''}">${c===' '?'&nbsp;':c}</span>`;
  }).join('');
  const dateHtml = flaps(dateStr, lastDateStr);
  const timeHtml = flaps(timeStr, lastTimeStr);
  lastDateStr = dateStr;
  lastTimeStr = timeStr;
  const el = document.getElementById('clockLine');
  if(el){
    el.innerHTML = `
      <span class="flap-board">${dateHtml}</span>
      <span class="flap-board" style="margin-left:8px;">${timeHtml}</span>
      <span style="margin-left:10px; color:var(--ink-2); font-size:10px; letter-spacing:.4px;">IST · SIMULATED CONTROL-OFFICE CLOCK</span>
    `;
  }
  const hg = document.getElementById('heroGreeting');
  if(hg){
    const hr = now.getHours();
    const part = hr<12 ? 'Morning' : hr<17 ? 'Afternoon' : 'Evening';
    hg.textContent = `Good ${part}, Railway Officer`;
  }
}

document.getElementById('presentBtn').onclick = openPresent;
document.getElementById('simulateBtn').onclick = runSimulation;

function fillDemoCreds(){
  document.getElementById('loginUser').value = 'r.officer';
  document.getElementById('loginPass').value = 'railnex2026';
  document.getElementById('loginErr').classList.remove('show');
}
function attemptLogin(){
  const user = document.getElementById('loginUser').value.trim();
  const pass = document.getElementById('loginPass').value;
  const err = document.getElementById('loginErr');
  if(!user || !pass){
    err.classList.add('show');
    return;
  }
  err.classList.remove('show');
  document.getElementById('loginScreen').classList.add('hide');
  document.getElementById('app').classList.remove('hide');
  pushAudit(`${user} signed in as Railway Officer, Control Office.`);
  renderNav();
}
function signOut(){
  document.getElementById('loginUser').value = '';
  document.getElementById('loginPass').value = '';
  document.getElementById('loginErr').classList.remove('show');
  document.getElementById('app').classList.add('hide');
  document.getElementById('loginScreen').classList.remove('hide');
  navigate('dashboard');
}
document.getElementById('loginPass').addEventListener('keydown', (e)=>{ if(e.key==='Enter') attemptLogin(); });
document.getElementById('loginUser').addEventListener('keydown', (e)=>{ if(e.key==='Enter') document.getElementById('loginPass').focus(); });

history.replaceState({view:'dashboard'}, '', '#dashboard');
renderNav();
renderView();
tickClock();
setInterval(tickClock, 1000);