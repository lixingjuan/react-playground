import moment from "moment";
import { EChartsOption } from "echarts";
import round from "lodash/round";

window.moment = moment;

const forSeriesItem = (val: any[]) =>
  val.map(([date, value]) => [
    moment(Number(date)).format("YYYY-MM-DD"),
    round(value, 2),
  ]);

const data1 = [
  [1614556800000, 1],
  [1614643200000, 0.9948255043750418],
  [1614729600000, 1.023017190112872],
  [1614816000000, 1.0161363708325104],
  [1614902400000, 1.0033564692012988],
  [1615161600000, 0.988975242323713],
  [1615248000000, 0.966679296835323],
  [1615334400000, 0.963309034159034],
  [1615420800000, 0.9840336057300267],
  [1615507200000, 0.9925650148645045],
  [1615766400000, 0.9900683126737875],
  [1615852800000, 0.9810813376738602],
  [1615939200000, 0.9956615585645028],
  [1616025600000, 0.9909020488028094],
  [1616112000000, 0.9727594565727004],
  [1616371200000, 0.9838329836057335],
  [1616457600000, 0.9620035487618573],
  [1616544000000, 0.9471886629703099],
  [1616630400000, 0.9532334990213887],
  [1616716800000, 0.9561676690068247],
  [1616976000000, 0.9782695973191976],
  [1617062400000, 0.9770531465461803],
  [1617148800000, 0.9724566968962323],
  [1617235200000, 0.9744895675405447],
  [1617321600000, 0.9748574061051469],
  [1617667200000, 0.9756217790812696],
  [1617753600000, 0.9797293355822836],
  [1617840000000, 0.9776811238917507],
  [1617926400000, 0.9811937805060938],
  [1618185600000, 0.9749358775353457],
  [1618272000000, 0.9679623750569482],
  [1618358400000, 0.9709638786734518],
  [1618444800000, 0.9734659393001404],
  [1618531200000, 0.9819636841386596],
  [1618790400000, 0.997253409377461],
  [1618876800000, 1.001410485717422],
  [1618963200000, 0.9980216976759206],
  [1619049600000, 0.9996713297605869],
  [1619136000000, 0.9947082151700728],
  [1619395200000, 0.9956425293913828],
  [1619481600000, 0.9848875015533006],
  [1619568000000, 0.9980912451581776],
  [1619654400000, 1.0064039694035174],
  [1619740800000, 0.9896365730869248],
  [1620259200000, 1.0037951579939057],
  [1620345600000, 1.0232694294142204],
  [1620604800000, 1.0480960996116953],
  [1620691200000, 1.0352244600130005],
  [1620777600000, 1.0527842144694637],
  [1620864000000, 1.0202097492123976],
  [1620950400000, 1.019075918107216],
  [1621209600000, 1.0225068279580334],
  [1621296000000, 1.031987238126079],
  [1621382400000, 1.0196039551399827],
  [1621468800000, 1.0002682988116844],
  [1621555200000, 1.0050428715146318],
  [1621814400000, 0.996307819147564],
  [1621900800000, 1.0066832383370494],
  [1621987200000, 1.0099220719358963],
  [1622073600000, 1.014337673443983],
  [1622160000000, 1.0069095006502367],
  [1622419200000, 1.0064010189911523],
  [1622505600000, 1.02516223588531],
  [1622592000000, 1.0316888016823615],
  [1622678400000, 1.0349297754345577],
  [1622764800000, 1.0280654052320424],
  [1623024000000, 1.026252891472583],
  [1623110400000, 1.0190999803381313],
  [1623196800000, 1.0382195944133046],
  [1623283200000, 1.028235159718057],
  [1623369600000, 1.0299688905713622],
  [1623715200000, 1.0175644993388644],
  [1623801600000, 1.0111088297057278],
  [1623888000000, 1.0071152505480372],
  [1623974400000, 0.9939050168467793],
  [1624233600000, 0.980976201604413],
  [1624320000000, 0.99542544305006],
  [1624406400000, 1.013119673634424],
  [1624492800000, 1.0105991213923433],
  [1624579200000, 1.0271505914666132],
  [1624838400000, 1.0182550924299885],
  [1624924800000, 1.0029729798018403],
  [1625011200000, 1.0038005599848674],
  [1625097600000, 0.9888879295973327],
  [1625184000000, 0.985214341944166],
  [1625443200000, 0.9977401521812309],
  [1625529600000, 1.00283103074208],
  [1625616000000, 0.9947319360870646],
  [1625702400000, 0.9737186515541687],
  [1625788800000, 0.9817871545246448],
  [1626048000000, 0.9787282584058311],
  [1626134400000, 0.996545265866002],
  [1626220800000, 0.9904192170684113],
  [1626307200000, 0.9910145115469026],
  [1626393600000, 0.9931946966186455],
  [1626652800000, 0.9877979727731122],
  [1626739200000, 0.9877457596027109],
  [1626825600000, 0.9852806665075287],
  [1626912000000, 0.9927032942788272],
  [1626998400000, 0.9842290697818128],
  [1627257600000, 0.9740326988433345],
  [1627344000000, 0.9501590986018768],
  [1627430400000, 0.9281855404604683],
  [1627516800000, 0.941201611097851],
  [1627603200000, 0.9539946819463473],
  [1627862400000, 0.9623246726828069],
  [1627948800000, 0.9520179058366574],
  [1628035200000, 0.9668357907118801],
  [1628121600000, 0.9642684058325546],
  [1628208000000, 0.9784671093493547],
  [1628467200000, 0.9977098110397631],
  [1628553600000, 1.0030359586397808],
  [1628640000000, 1.0199926833634023],
  [1628726400000, 1.0204381688947215],
  [1628812800000, 1.0286699307867526],
  [1629072000000, 1.030494035571517],
  [1629158400000, 1.0053730071199967],
  [1629244800000, 1.0082567318716713],
  [1629331200000, 0.9966797166457482],
  [1629417600000, 0.9908297123013603],
  [1629676800000, 1.0151971819523335],
  [1629763200000, 1.0261033248349898],
  [1629849600000, 1.046977761075835],
  [1629936000000, 1.0525052542623252],
  [1630022400000, 1.0554802514226043],
  [1630281600000, 1.0759204389843957],
  [1630368000000, 1.112149659685599],
  [1630454400000, 1.0991298928909266],
  [1630540800000, 1.12313269604024],
  [1630627200000, 1.118557482001042],
  [1630886400000, 1.1354657567860966],
  [1630972800000, 1.1619328187951563],
  [1631059200000, 1.183456572627583],
  [1631145600000, 1.2196113268423512],
  [1631232000000, 1.1938599932429597],
  [1631491200000, 1.220056482327457],
  [1631577600000, 1.1983950081065957],
  [1631664000000, 1.210327607248215],
  [1631750400000, 1.2149159375590313],
  [1631836800000, 1.17895509910223],
  [1632268800000, 1.1989799707621585],
  [1632355200000, 1.1993127224418079],
  [1632441600000, 1.1626700591229033],
  [1632700800000, 1.160370372644617],
  [1632787200000, 1.1860226358572246],
  [1632873600000, 1.1484886837459989],
  [1632960000000, 1.1754719226526178],
  [1633651200000, 1.1866372023350655],
  [1633910400000, 1.1997247273917024],
  [1633996800000, 1.1779069833297238],
  [1634083200000, 1.143066445248701],
  [1634169600000, 1.1336390155942213],
  [1634256000000, 1.1451009593868167],
  [1634515200000, 1.1849617869066094],
  [1634601600000, 1.2105298544572347],
  [1634688000000, 1.166134164035479],
  [1634774400000, 1.1754351095732016],
  [1634860800000, 1.1405453958820992],
  [1635120000000, 1.158748045784244],
  [1635206400000, 1.1505098048066233],
  [1635292800000, 1.130404127419691],
  [1635379200000, 1.0837372763086996],
  [1635465600000, 1.0995871622254338],
  [1635724800000, 1.1097859501908296],
  [1635811200000, 1.0975813615864427],
  [1635897600000, 1.1245609758616388],
  [1635984000000, 1.1242530837560523],
  [1636070400000, 1.0897836904372027],
  [1636329600000, 1.094734327906574],
  [1636416000000, 1.091977457040164],
  [1636502400000, 1.0786654993220735],
  [1636588800000, 1.0836328241527913],
  [1636675200000, 1.084554856044376],
  [1636934400000, 1.0790900387082099],
  [1637020800000, 1.0685083562975908],
  [1637107200000, 1.073553750379914],
  [1637193600000, 1.0780669255127784],
  [1637280000000, 1.0878839135267901],
  [1637539200000, 1.0922967400035335],
  [1637625600000, 1.0950918448101439],
  [1637712000000, 1.0993654788295395],
  [1637798400000, 1.0938564568721245],
  [1637884800000, 1.0810968812452326],
  [1638144000000, 1.0780331654187096],
  [1638230400000, 1.0709981021690183],
  [1638316800000, 1.0881035267949408],
  [1638403200000, 1.0926231238281208],
  [1638489600000, 1.1198171968138126],
  [1638748800000, 1.1049724734275082],
  [1638835200000, 1.1077368254138409],
  [1638921600000, 1.1143921795219363],
  [1639008000000, 1.1158159930438178],
  [1639094400000, 1.1092708336725305],
];

const data2 = [
  [1614556800000, 2.4558409247122372],
  [1614643200000, 2.450516471920772],
  [1614729600000, 2.5385151553288092],
  [1614816000000, 2.545843538534517],
  [1614902400000, 2.512115550306398],
  [1615161600000, 2.5097340677851245],
  [1615248000000, 2.4640502628343515],
  [1615334400000, 2.4560442220006387],
  [1615420800000, 2.5185629785956998],
  [1615507200000, 2.552716923047136],
  [1615766400000, 2.582533858679342],
  [1615852800000, 2.5441009903482192],
  [1615939200000, 2.556405316708133],
  [1616025600000, 2.5408869570268253],
  [1616112000000, 2.4986785676253906],
  [1616371200000, 2.524255302670939],
  [1616457600000, 2.4446886163199317],
  [1616544000000, 2.3929833393031745],
  [1616630400000, 2.4245234614751636],
  [1616716800000, 2.4352691752906668],
  [1616976000000, 2.5341103807467786],
  [1617062400000, 2.5159297946697388],
  [1617148800000, 2.50905641015712],
  [1617235200000, 2.5083593908826005],
  [1617321600000, 2.4837023340464874],
  [1617667200000, 2.497865378471785],
  [1617753600000, 2.5204894624238845],
  [1617840000000, 2.5261237015595803],
  [1617926400000, 2.556095530363902],
  [1618185600000, 2.5465792811020647],
  [1618272000000, 2.499007715616136],
  [1618358400000, 2.530847943309099],
  [1618444800000, 2.5483024676418484],
  [1618531200000, 2.595322226202116],
  [1618790400000, 2.6204826858476045],
  [1618876800000, 2.6114601585718846],
  [1618963200000, 2.6024763545891942],
  [1619049600000, 2.6177236512192996],
  [1619136000000, 2.5950898864439433],
  [1619395200000, 2.6369691278546323],
  [1619481600000, 2.596687222281383],
  [1619568000000, 2.64072528727843],
  [1619654400000, 2.6506965352333562],
  [1619740800000, 2.5853412974239327],
  [1620259200000, 2.6929823712208485],
  [1620345600000, 2.778793188572756],
  [1620604800000, 2.941624635759025],
  [1620691200000, 2.8704996272883045],
  [1620777600000, 2.9166771542251952],
  [1620864000000, 2.7997812133943873],
  [1620950400000, 2.7679313048781666],
  [1621209600000, 2.7653755675382636],
  [1621296000000, 2.8133246851312235],
  [1621382400000, 2.7731202261440315],
  [1621468800000, 2.677822202000058],
  [1621555200000, 2.7185397446198825],
  [1621814400000, 2.704860741357445],
  [1621900800000, 2.7312700272031134],
  [1621987200000, 2.741686593027871],
  [1622073600000, 2.7684637501573133],
  [1622160000000, 2.7504380572523885],
  [1622419200000, 2.7545330454901884],
  [1622505600000, 2.8254547566725075],
  [1622592000000, 2.8424930056051965],
  [1622678400000, 2.867169424087824],
  [1622764800000, 2.818136054290057],
  [1623024000000, 2.842318750786567],
  [1623110400000, 2.8154447854245523],
  [1623196800000, 2.9177517256067453],
  [1623283200000, 2.8946436004917855],
  [1623369600000, 2.928245738017561],
  [1623715200000, 2.899648586115763],
  [1623801600000, 2.891894246686738],
  [1623888000000, 2.891110100002904],
  [1623974400000, 2.83411909348771],
  [1624233600000, 2.803973009864759],
  [1624320000000, 2.843664385219319],
  [1624406400000, 2.9028238961441284],
  [1624492800000, 2.913763226424775],
  [1624579200000, 2.966668925525427],
  [1624838400000, 2.848746817429354],
  [1624924800000, 2.8063641732092894],
  [1625011200000, 2.818010203587713],
  [1625097600000, 2.766643755384958],
  [1625184000000, 2.76306185077979],
  [1625443200000, 2.8249416730398753],
  [1625529600000, 2.8379623803208225],
  [1625616000000, 2.814834893559348],
  [1625702400000, 2.7337676796034733],
  [1625788800000, 2.7756178785443915],
  [1626048000000, 2.751183480643194],
  [1626134400000, 2.8267519869889735],
  [1626220800000, 2.822753806983746],
  [1626307200000, 2.836800681529957],
  [1626393600000, 2.8845077785414874],
  [1626652800000, 2.8759789732518852],
  [1626739200000, 2.876840566521777],
  [1626825600000, 2.875127060805251],
  [1626912000000, 2.9187391695789806],
  [1626998400000, 2.9196782094349305],
  [1627257600000, 2.8965797651432275],
  [1627344000000, 2.829026980454418],
  [1627430400000, 2.776808619805028],
  [1627516800000, 2.824641567518902],
  [1627603200000, 2.8748269552842776],
  [1627862400000, 2.8449325730660133],
  [1627948800000, 2.777089363679487],
  [1628035200000, 2.8671597432645672],
  [1628121600000, 2.8599572107612032],
  [1628208000000, 2.9406565534333042],
  [1628467200000, 2.9510924809045758],
  [1628553600000, 2.95829501340794],
  [1628640000000, 3.057639621673427],
  [1628726400000, 3.083806886937665],
  [1628812800000, 3.1180189163286447],
  [1629072000000, 3.1303813276281014],
  [1629158400000, 3.066729914711947],
  [1629244800000, 3.087592088831234],
  [1629331200000, 3.0495464534303998],
  [1629417600000, 3.043244237489956],
  [1629676800000, 3.1506336098821843],
  [1629763200000, 3.1982245370146276],
  [1629849600000, 3.2969398917683956],
  [1629936000000, 3.381559967859667],
  [1630022400000, 3.4141746614132065],
  [1630281600000, 3.5384957936822947],
  [1630368000000, 3.721724735471504],
  [1630454400000, 3.6156035509259707],
  [1630540800000, 3.769606087301664],
  [1630627200000, 3.669864565282632],
  [1630886400000, 3.733854807012788],
  [1630972800000, 3.8858340513277247],
  [1631059200000, 4.001384357725781],
  [1631145600000, 4.216472888854468],
  [1631232000000, 4.08614964616591],
  [1631491200000, 4.260559357967801],
  [1631577600000, 4.179850334472444],
  [1631664000000, 4.241352604625497],
  [1631750400000, 4.201099741522019],
  [1631836800000, 3.9946755472085345],
  [1632268800000, 4.170730998964151],
  [1632355200000, 4.106150227015305],
  [1632441600000, 3.887441067988422],
  [1632700800000, 3.7969447321800245],
  [1632787200000, 3.9702605109538514],
  [1632873600000, 3.7331287452684974],
  [1632960000000, 3.849530964113188],
  [1633651200000, 3.7888128406439683],
  [1633910400000, 3.844951934712528],
  [1633996800000, 3.7583085665605],
  [1634083200000, 3.568603154012217],
  [1634169600000, 3.55766382373157],
  [1634256000000, 3.6605032091929095],
  [1634515200000, 3.8443420428473236],
  [1634601600000, 3.865117089557296],
  [1634688000000, 3.669883926929146],
  [1634774400000, 3.762635894556473],
  [1634860800000, 3.58434417262844],
  [1635120000000, 3.6834758027822687],
  [1635206400000, 3.680600598274877],
  [1635292800000, 3.560054987076101],
  [1635379200000, 3.328886608517188],
  [1635465600000, 3.3347628682343147],
  [1635724800000, 3.3585196085075073],
  [1635811200000, 3.25643532726023],
  [1635897600000, 3.3352953135134613],
  [1635984000000, 3.2978498891545733],
  [1636070400000, 3.1644094213771936],
  [1636329600000, 3.203916861089867],
  [1636416000000, 3.1682236657405345],
  [1636502400000, 3.1148242446537653],
  [1636588800000, 3.1285419712092315],
  [1636675200000, 3.096856636688384],
  [1636934400000, 3.0740582979176545],
  [1637020800000, 3.030281615148552],
  [1637107200000, 3.073351597819878],
  [1637193600000, 3.0993349274422295],
  [1637280000000, 3.164390059730679],
  [1637539200000, 3.193819762432597],
  [1637625600000, 3.2311296552658835],
  [1637712000000, 3.2961654259078195],
  [1637798400000, 3.2611208457167193],
  [1637884800000, 3.2119035402770653],
  [1638144000000, 3.1869173354502065],
  [1638230400000, 3.1740999254576607],
  [1638316800000, 3.264228389982284],
  [1638403200000, 3.2832124843896726],
  [1638489600000, 3.381337308924751],
  [1638748800000, 3.350097292273735],
  [1638835200000, 3.3640764010571456],
  [1638921600000, 3.360581623861293],
  [1639008000000, 3.3491001674782424],
  [1639094400000, 3.3170663233201347],
];

const data3 = [
  [1614556800000, 4.214886246423914],
  [1614643200000, 4.176313177510071],
  [1614729600000, 4.252534885078722],
  [1614816000000, 4.168528501644512],
  [1614902400000, 4.119981316777922],
  [1615161600000, 3.9845863417861938],
  [1615248000000, 3.8700153747348343],
  [1615334400000, 3.8551952980557767],
  [1615420800000, 3.916159040927933],
  [1615507200000, 3.9221435104995814],
  [1615766400000, 3.830002140785863],
  [1615852800000, 3.8292723274234666],
  [1615939200000, 3.9440865655956245],
  [1616025600000, 3.932720938831909],
  [1616112000000, 3.8509234571745514],
  [1616371200000, 3.9012708483350518],
  [1616457600000, 3.86819570675126],
  [1616544000000, 3.8405406457388627],
  [1616630400000, 3.828114356888465],
  [1616716800000, 3.8324445828386815],
  [1616976000000, 3.8244263666971565],
  [1617062400000, 3.8537940563999764],
  [1617148800000, 3.82439717416266],
  [1617235200000, 3.8458828795516027],
  [1617321600000, 3.8992662942996708],
  [1617667200000, 3.8775470486347623],
  [1617753600000, 3.869314753906934],
  [1617840000000, 3.8391102115485665],
  [1617926400000, 3.810520989432302],
  [1618185600000, 3.7724539244497204],
  [1618272000000, 3.8050133312574195],
  [1618358400000, 3.7679485432925284],
  [1618444800000, 3.755483331062803],
  [1618531200000, 3.7380164645894554],
  [1618790400000, 3.827151003250102],
  [1618876800000, 3.8835607107409063],
  [1618963200000, 3.8707159955627346],
  [1619049600000, 3.8549131035556505],
  [1619136000000, 3.855321799038592],
  [1619395200000, 3.7789443979526296],
  [1619481600000, 3.762051651324368],
  [1619568000000, 3.7937742054765193],
  [1619654400000, 3.8497557557947175],
  [1619740800000, 3.828600899130062],
  [1620259200000, 3.7449642877994664],
  [1620345600000, 3.7518634567853177],
  [1620604800000, 3.655975711811299],
  [1620691200000, 3.6796411264425974],
  [1620777600000, 3.7469785726796796],
  [1620864000000, 3.6832512698752504],
  [1620950400000, 3.7354572523986533],
  [1621209600000, 3.7712959539147186],
  [1621296000000, 3.762557655255629],
  [1621382400000, 3.7300371718272576],
  [1621468800000, 3.742969464608917],
  [1621555200000, 3.706109024385497],
  [1621814400000, 3.654409045793355],
  [1621900800000, 3.695911099001615],
  [1621987200000, 3.7046104742813766],
  [1622073600000, 3.6918338750170285],
  [1622160000000, 3.6603935153650036],
  [1622419200000, 3.6478018021524625],
  [1622505600000, 3.6774614172002407],
  [1622592000000, 3.702508611797676],
  [1622678400000, 3.6870268376700466],
  [1622764800000, 3.7142537415098373],
  [1623024000000, 3.657513185294747],
  [1623110400000, 3.644181927874978],
  [1623196800000, 3.627347566315707],
  [1623283200000, 3.583938267520386],
  [1623369600000, 3.5405289687250643],
  [1623715200000, 3.486406009769768],
  [1623801600000, 3.445964618648191],
  [1623888000000, 3.414037716754568],
  [1623974400000, 3.402088239300936],
  [1624233600000, 3.3462623825000484],
  [1624320000000, 3.398322402350972],
  [1624406400000, 3.4439016795438175],
  [1624492800000, 3.404063600801821],
  [1624579200000, 3.4508884261331567],
  [1624838400000, 3.579802658466808],
  [1624924800000, 3.5254364283907123],
  [1625011200000, 3.5122803261779185],
  [1625097600000, 3.4764610863515166],
  [1625184000000, 3.4524161687717725],
  [1625443200000, 3.4518420489266877],
  [1625529600000, 3.471770819142518],
  [1625616000000, 3.444076834750793],
  [1625702400000, 3.4072358562170364],
  [1625788800000, 3.40355759687056],
  [1626048000000, 3.419195064515501],
  [1626134400000, 3.4390751805071713],
  [1626220800000, 3.395695074246346],
  [1626307200000, 3.377206469065644],
  [1626393600000, 3.3157075297277308],
  [1626652800000, 3.2858143744039854],
  [1626739200000, 3.2839557830410833],
  [1626825600000, 3.266673802619543],
  [1626912000000, 3.2547924410797346],
  [1626998400000, 3.184029737461806],
  [1627257600000, 3.1391608119416925],
  [1627344000000, 3.0564972850942915],
  [1627430400000, 2.963859642294144],
  [1627516800000, 2.990638927271666],
  [1627603200000, 3.0116867446431694],
  [1627862400000, 3.114201194947745],
  [1627948800000, 3.1326411459042873],
  [1628035200000, 3.116478212638421],
  [1628121600000, 3.10763287468618],
  [1628208000000, 3.099916314734445],
  [1628467200000, 3.2265632602222523],
  [1628553600000, 3.255639024580114],
  [1628640000000, 3.2423077671603444],
  [1628726400000, 3.2093104723352077],
  [1628812800000, 3.222262226806531],
  [1629072000000, 3.218506120701399],
  [1629158400000, 3.122501605589397],
  [1629244800000, 3.1147363914135022],
  [1629331200000, 3.082566218399081],
  [1629417600000, 3.0484012221941104],
  [1629676800000, 3.0782651849833598],
  [1629763200000, 3.0922873323861975],
  [1629849600000, 3.108557304945215],
  [1629936000000, 3.0318198626004706],
  [1630022400000, 3.008436642469299],
  [1630281600000, 2.9860362376661542],
  [1630368000000, 2.9977813673783156],
  [1630454400000, 3.049374306677305],
  [1630540800000, 3.0322382889282444],
  [1630627200000, 3.114035770585602],
  [1630886400000, 3.1516065624817546],
  [1630972800000, 3.152608839499445],
  [1631059200000, 3.162398069400385],
  [1631145600000, 3.155421053655878],
  [1631232000000, 3.1348695093708034],
  [1631491200000, 3.109102232255804],
  [1631577600000, 3.059552770371523],
  [1631664000000, 3.0678337193235117],
  [1631750400000, 3.1423136056672436],
  [1631836800000, 3.1408734406321153],
  [1632268800000, 3.0734970710157055],
  [1632355200000, 3.1476947628593113],
  [1632441600000, 3.1555670163283573],
  [1632700800000, 3.2417141856255958],
  [1632787200000, 3.213660159975089],
  [1632873600000, 3.2363427592783602],
  [1632960000000, 3.2803651012980946],
  [1633651200000, 3.4211898877060505],
  [1633910400000, 3.4427437090088158],
  [1633996800000, 3.398984099799544],
  [1634083200000, 3.3869859681217522],
  [1634169600000, 3.3382052429791953],
  [1634256000000, 3.2965766887881207],
  [1634515200000, 3.3477317400696727],
  [1634601600000, 3.490055076581749],
  [1634688000000, 3.4223478582410523],
  [1634774400000, 3.3780822451005195],
  [1634860800000, 3.352898818675437],
  [1635120000000, 3.359146021057548],
  [1635206400000, 3.3089835159488548],
  [1635292800000, 3.314539828347897],
  [1635379200000, 3.2726193488118636],
  [1635465600000, 3.368740634061849],
  [1635724800000, 3.4080727088725844],
  [1635811200000, 3.4580503279294703],
  [1635897600000, 3.5446451160889785],
  [1635984000000, 3.5927154895588034],
  [1636070400000, 3.5259618940116377],
  [1636329600000, 3.50824202557266],
  [1636416000000, 3.536490668119806],
  [1636502400000, 3.513214487281785],
  [1636588800000, 3.5302337348928634],
  [1636675200000, 3.5793453087597062],
  [1636934400000, 3.5709670513593985],
  [1637020800000, 3.5542494599381116],
  [1637107200000, 3.5324231749800514],
  [1637193600000, 3.5297374618064334],
  [1637280000000, 3.51243601969523],
  [1637539200000, 3.5044080727088724],
  [1637625600000, 3.4742619154194965],
  [1637712000000, 3.4174435124457503],
  [1637798400000, 3.425189264931981],
  [1637884800000, 3.4002393787828655],
  [1638144000000, 3.411926123426036],
  [1638230400000, 3.3789482902905625],
  [1638316800000, 3.3799797598427492],
  [1638403200000, 3.3865870034836423],
  [1638489600000, 3.448397329856178],
  [1638748800000, 3.384076445516999],
  [1638835200000, 3.384874374793219],
  [1638921600000, 3.4376836696962028],
  [1639008000000, 3.4636844870871686],
  [1639094400000, 3.460337076464979],
];

const option: EChartsOption = {
  legend: {},
  color: ["#5180FF", "#FF9749", "#1ABFB0"],
  xAxis: {
    type: "category",
    axisLabel: {
      formatter: (val: any) => moment(Number(val)).format("YYYY-MM-DD"),
    },
  },
  yAxis: {
    type: "value",
  },
  tooltip: {
    trigger: "axis",
    position(pt) {
      return [pt[0], "10%"];
    },
    appendToBody: true,
    confine: true,
    renderMode: "html",
    // !! 该类名用于控制将tooltip 第一行的日期居中
    className: "echarts-tooltip-first-line-date-center",
    hideDelay: 0,
    textStyle: {
      fontSize: 12,
    },
    formatter: (params) => {
      if (!Array.isArray(params)) {
        return "";
      }

      // /** @ts-ignore */
      const [{ data = [], marker = "", seriesName }] = (params as any) || [
        { data: [], marker: "", seriesName: "" },
      ];

      const [date, value] = data;
      const realMaker = marker.replace(
        "width:10px;height:10px;",
        "width:6px;height:6px;"
      );
      return `
        <div style="min-width: 100px">
          <div style="width:100%; text-align:center; font-size:14px; color: #333; font-weight:400; margin-bottom:10px;">${date}</div>
          <div style="width:100%; display:flex; justify-content:space-between; align-items:center;">
            <span style="margin-right:20px;">${realMaker}${seriesName}</span>
            <span>${round(value, 2)}%</span>
          </div>
        </div>
      `;
    },
  },
  series: [
    {
      name: "目标方案",
      type: "line",
      smooth: 0.3,
      showSymbol: false,
      data: forSeriesItem(data1),
    },
    {
      name: "分析基准",
      type: "line",
      smooth: 0.3,
      showSymbol: false,
      data: forSeriesItem(data2),
    },
    {
      name: "超额收益",
      type: "line",
      smooth: 0.3,
      showSymbol: false,
      data: forSeriesItem(data3),
    },
  ],
};

export default option;
