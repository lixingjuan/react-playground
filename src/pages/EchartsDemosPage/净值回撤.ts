import moment from "moment";
import { EChartsOption } from "echarts";
import round from "lodash/round";

window.moment = moment;

const forSeriesItem = (val: any[]) =>
  val.map(([date, value]) => [date, round(value, 2)]);

const data1 = [
  [1614528000000, 0, 0],
  [1614614400000, -0.01727090905015838, 0],
  [1614700800000, -0.0033339982750404396, 0],
  [1614787200000, -0.032954845937751664, 0],
  [1614873600000, -0.039049394556692985, 0],
  [1615132800000, -0.061037762482089364, 0],
  [1615219200000, -0.09042471592853907, 0],
  [1615305600000, -0.09014095991793691, 0],
  [1615392000000, -0.06890852668036462, 0],
  [1615478400000, -0.061205506951148236, 0],
  [1615737600000, -0.07493766209660757, 0],
  [1615824000000, -0.07019984260960377, 0],
  [1615910400000, -0.05575122802916055, 0],
  [1615996800000, -0.0457626616457969, 0],
  [1616083200000, -0.07051327207208469, 0],
  [1616342400000, -0.06585584570740322, 0],
  [1616428800000, -0.08897704246876281, 0],
  [1616515200000, -0.1128261858012789, 0],
  [1616601600000, -0.10524085321864385, 0],
  [1616688000000, -0.09455015928620092, 0],
  [1616947200000, -0.08855384416993262, 0],
  [1617033600000, -0.0830833308047978, 0],
  [1617120000000, -0.09241648318650164, 0],
  [1617206400000, -0.08380901082391501, 0],
  [1617292800000, -0.07709000626561024, 0],
  [1617638400000, -0.07591881012265822, 0],
  [1617724800000, -0.07390637104697684, 0],
  [1617811200000, -0.07438246037017182, 0],
  [1617897600000, -0.08235372039139954, 0],
  [1618156800000, -0.1058264298083017, 0],
  [1618243200000, -0.1030851583845136, 0],
  [1618329600000, -0.09611787219969115, 0],
  [1618416000000, -0.09722261950807887, 0],
  [1618502400000, -0.0963394557182683, 0],
  [1618761600000, -0.07388888418682449, 0],
  [1618848000000, -0.06741708041081407, 0],
  [1618934400000, -0.06856498435967062, 0],
  [1619020800000, -0.06924394164370695, 0],
  [1619107200000, -0.06626020687845091, 0],
  [1619366400000, -0.07010880499058258, 0],
  [1619452800000, -0.07461039181467777, 0],
  [1619539200000, -0.06621424770510054, 0],
  [1619625600000, -0.06582886749175187, 0],
  [1619712000000, -0.06864248625093428, 0],
  [1620230400000, -0.06810210112893422, 0],
  [1620316800000, -0.06592082952651601, 0],
  [1620576000000, -0.07344574861560893, 0],
  [1620662400000, -0.0833205105842234, 0],
  [1620748800000, -0.06979623644486888, 0],
  [1620835200000, -0.0860287096007386, 0],
  [1620921600000, -0.07615386742327002, 0],
  [1621180800000, -0.06437601367958401, 0],
  [1621267200000, -0.06064887145504361, 0],
  [1621353600000, -0.06115747656417869, 0],
  [1621440000000, -0.06807122413108058, 0],
  [1621526400000, -0.07391330590261158, 0],
  [1621785600000, -0.07382522606821129, 0],
  [1621872000000, -0.0579792067912317, 0],
  [1621958400000, -0.05016429323646543, 0],
  [1622044800000, -0.04253840717196533, 0],
  [1622131200000, -0.04406548662636556, 0],
  [1622390400000, -0.03555221524762764, 0],
  [1622476800000, -0.02127248863367992, 0],
  [1622563200000, -0.021663628039414906, 0],
  [1622649600000, -0.02677428194484599, 0],
  [1622736000000, -0.01800916155375676, 0],
  [1622995200000, -0.017451958679402857, 0],
  [1623081600000, -0.02793615984229314, 0],
  [1623168000000, -0.020173316490483373, 0],
  [1623254400000, -0.017970605222454195, 0],
  [1623340800000, -0.02558288783635776, 0],
  [1623686400000, -0.03727691361434249, 0],
  [1623772800000, -0.059319424294923095, 0],
  [1623859200000, -0.059627846885166313, 0],
  [1623945600000, -0.057948723946422476, 0],
  [1624204800000, -0.05990548972639398, 0],
  [1624291200000, -0.04840956137532637, 0],
  [1624377600000, -0.03803564831987383, 0],
  [1624464000000, -0.04347187041388523, 0],
  [1624550400000, -0.024250918854897052, 0],
  [1624809600000, -0.010050309836266091, 0],
  [1624896000000, -0.014131380446224417, 0],
  [1624982400000, -0.009086844405960304, 0],
  [1625068800000, -0.024952413744436686, 0],
  [1625155200000, -0.03421239757164796, 0],
  [1625414400000, -0.021245516845424528, 0],
  [1625500800000, -0.009470100770793577, 0],
  [1625587200000, -0.0004675019785609358, 0],
  [1625673600000, -0.0059618702231989396, 0],
  [1625760000000, 0, 0],
  [1626019200000, 0, 0],
  [1626105600000, 0, 0],
  [1626192000000, -0.012552715913951549, 0],
  [1626278400000, -0.0030767475462969134, 0],
  [1626364800000, -0.010847438341420799, 0],
  [1626624000000, -0.024049374570149044, 0],
  [1626710400000, -0.023828317916610903, 0],
  [1626796800000, -0.008353357018254896, 0],
  [1626883200000, 0, 0],
  [1626969600000, -0.013823607153624563, 0],
  [1627228800000, -0.025547770233715617, 0],
  [1627315200000, -0.05908916759212299, 0],
  [1627401600000, -0.07909264323277827, 0],
  [1627488000000, -0.04969549749632674, 0],
  [1627574400000, -0.05269867772763188, 0],
  [1627833600000, -0.020925578970206585, 0],
  [1627920000000, -0.02587188540571191, 0],
  [1628006400000, -0.008654808869765395, 0],
  [1628092800000, -0.018157294461029486, 0],
  [1628179200000, -0.01296408442811031, 0],
  [1628438400000, 0, 0],
  [1628524800000, -0.0033038657595481245, 0],
  [1628611200000, 0, 0],
  [1628697600000, 0, 0],
  [1628784000000, 0, 0],
  [1629043200000, -0.012405967063304449, 0],
  [1629129600000, -0.04050689595302598, 0],
  [1629216000000, -0.03341863050630064, 0],
  [1629302400000, -0.03672056716220777, 0],
  [1629388800000, -0.03688961975912262, 0],
  [1629648000000, -0.01736363991192377, 0],
  [1629734400000, -0.007299688480787789, 0],
  [1629820800000, 0, 0],
  [1629907200000, -0.011519669193254723, 0],
  [1629993600000, -0.00358933921082729, 0],
  [1630252800000, 0, 0],
  [1630339200000, 0, 0],
  [1630425600000, -0.01240128038913972, 0],
  [1630512000000, 0, 0],
  [1630598400000, -0.007937209161930794, 0],
  [1630857600000, 0, 0],
  [1630944000000, 0, 0],
  [1631030400000, 0, 0],
  [1631116800000, 0, 0],
  [1631203200000, -0.0005509398102590659, 0],
  [1631462400000, 0, 0],
  [1631548800000, -0.005037980244521297, 0],
  [1631635200000, 0, 0],
  [1631721600000, -0.006806198849724881, 0],
  [1631808000000, -0.007915826805198473, 0],
  [1632240000000, -0.010469439340424689, 0],
  [1632326400000, -0.01870110586769629, 0],
  [1632412800000, -0.043345670321182535, 0],
  [1632672000000, -0.06635414293800884, 0],
  [1632758400000, -0.07284664026702418, 0],
  [1632844800000, -0.09759335626558718, 0],
  [1632931200000, -0.07451100781964624, 0],
  [1633622400000, -0.06954167633981677, 0],
  [1633881600000, -0.06971881441459105, 0],
  [1633968000000, -0.09036524569871017, 0],
  [1634054400000, -0.08934291484586013, 0],
  [1634140800000, -0.09084670971744602, 0],
  [1634227200000, -0.09089319754848038, 0],
  [1634486400000, -0.07215407239254559, 0],
  [1634572800000, -0.05297511921160707, 0],
  [1634659200000, -0.05523730226701217, 0],
  [1634745600000, -0.0547807629512626, 0],
  [1634832000000, -0.06458567360105041, 0],
  [1635091200000, -0.05039080643504048, 0],
  [1635177600000, -0.05860703275385597, 0],
  [1635264000000, -0.057648000819469976, 0],
  [1635350400000, -0.08331667921523393, 0],
  [1635436800000, -0.06968511686785221, 0],
  [1635696000000, -0.06622668908325458, 0],
  [1635782400000, -0.07737784938332684, 0],
  [1635868800000, -0.07325081336842965, 0],
  [1635955200000, -0.06666273321623015, 0],
  [1636041600000, -0.09383432350416153, 0],
  [1636300800000, -0.08626891023683148, 0],
  [1636387200000, -0.07709065160987594, 0],
  [1636473600000, -0.08482184966312128, 0],
  [1636560000000, -0.07835980912751558, 0],
  [1636646400000, -0.07123753088337885, 0],
  [1636905600000, -0.082970418796631, 0],
  [1636992000000, -0.09258238322451535, 0],
  [1637078400000, -0.08262859759996735, 0],
  [1637164800000, -0.0815387636881364, 0],
  [1637251200000, -0.0754399281923781, 0],
  [1637510400000, -0.06219891655687947, 0],
  [1637596800000, -0.06711425273343201, 0],
  [1637683200000, -0.07694238116353627, 0],
  [1637769600000, -0.07758554982623402, 0],
  [1637856000000, -0.0747305505204339, 0],
  [1638115200000, -0.07122547667789135, 0],
  [1638201600000, -0.07109786418946415, 0],
  [1638288000000, -0.06668026939855709, 0],
  [1638374400000, -0.07025112714311608, 0],
  [1638460800000, -0.06447575016098572, 0],
  [1638720000000, -0.07331713555339728, 0],
  [1638806400000, -0.0829462117910345, 0],
  [1638892800000, -0.06736906489083175, 0],
  [1638979200000, -0.0666558090408531, 0],
  [1639065600000, -0.06075916027902202, 0],
  [1639324800000, -0.053545098083308644, 0],
  [1639411200000, -0.05815800268332657, 0],
  [1639497600000, -0.06631319228753925, 0],
  [1639584000000, -0.06107600631692846, 0],
  [1639670400000, -0.07024834264954252, 0],
  [1639929600000, -0.08416595063966983, 0],
  [1640016000000, -0.07784907679615513, 0],
  [1640102400000, -0.06675640552886061, 0],
  [1640188800000, -0.060157576656114424, 0],
  [1640275200000, -0.07188742074093361, 0],
  [1640534400000, -0.06807658264889802, 0],
  [1640620800000, -0.05973624544908317, 0],
  [1640707200000, -0.06199952814703014, 0],
  [1640793600000, -0.0620277338937104, 0],
  [1640880000000, -0.05142998691173657, 0],
  [1641225600000, -0.04385739614133085, 0],
  [1641312000000, -0.05541288236821655, 0],
  [1641398400000, -0.05214883310704905, 0],
  [1641484800000, -0.06970909035669196, 0],
  [1641744000000, -0.05513915716358479, 0],
  [1641830400000, -0.06417484809327687, 0],
  [1641916800000, -0.050576122348162965, 0],
  [1642003200000, -0.06980296462135038, 0],
  [1642089600000, -0.0724673519765018, 0],
  [1642348800000, -0.06702940097533638, 0],
  [1642435200000, -0.07030165802826689, 0],
  [1642521600000, -0.08347841890447302, 0],
  [1642608000000, -0.09455388070198235, 0],
  [1642694400000, -0.10942462598803267, 0],
  [1642953600000, -0.10525670295398662, 0],
  [1643040000000, -0.13416195091983318, 0],
  [1643126400000, -0.12369785846776658, 0],
  [1643212800000, -0.14163348582099594, 0],
  [1643299200000, -0.13541306654376428, 0],
  [1644163200000, -0.11928811188593341, 0],
  [1644249600000, -0.1112725556554399, 0],
  [1644336000000, -0.09522814068914749, 0],
  [1644422400000, -0.08505031820756737, 0],
  [1644508800000, -0.09805524100176435, 0],
  [1644768000000, -0.1042192664552149, 0],
  [1644854400000, -0.10285906037891511, 0],
  [1644940800000, -0.09653166545903813, 0],
  [1645027200000, -0.08549133155348075, 0],
  [1645113600000, -0.08058007532290332, 0],
  [1645372800000, -0.07706893027358033, 0],
  [1645459200000, -0.07775091441901802, 0],
  [1645545600000, -0.06563213747480787, 0],
  [1645632000000, -0.08411965926403898, 0],
  [1645718400000, -0.07945000243204564, 0],
  [1645977600000, -0.07389647298599722, 0],
];

const data2 = [] as any;

const option: EChartsOption = {
  legend: {
    itemHeight: 0,
    itemWidth: 10,
    left: 140,
    lineStyle: {
      type: "solid",
    },
  },
  color: ["#5180FF", "#FF9749", "#1ABFB0"],
  xAxis: {
    type: "time",
    axisLabel: {
      hideOverlap: true,
      formatter: "{yyyy}-{MM}-{dd}",
    },
    splitLine: {
      lineStyle: {
        type: "dashed",
      },
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      hideOverlap: true,
      formatter: "{value}%",
    },
  },
  tooltip: {
    trigger: "axis",
    position(pt) {
      return [pt[0], "10%"];
    },
    appendToBody: true,
    confine: true,
    renderMode: "html",
    hideDelay: 0,
    textStyle: {
      fontSize: 12,
    },
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    axisPointer: {
      lineStyle: {
        color: "#eaeaea",
        width: 2,
        type: "solid",
      },
    },
    formatter: (params) => {
      if (!Array.isArray(params)) {
        return "";
      }

      /** @ts-ignore-next-line */
      const axisValueLabel = params[0].axisValueLabel;

      const title = `<div style="width:100%;text-align:center;font-size:14px;color: #333;font-weight:400;margin-bottom:5px;">${axisValueLabel}</div>`;

      const lines = params.reduce((tol, cur) => {
        const { data = [], marker = "", seriesName } = cur;
        const [, yAxisValue] = data as any[];

        return `${tol}
        <li style="list-style:none;display:flex;justify-content:space-between;">
          <span style="display:flex;height:14px;align-items:center;">
            ${(marker as string).replace(
              "border-radius:10px;width:10px;height:10px;",
              "border-radius:0px;width:10px;height:2px;"
            )}
            ${seriesName}
          </span>
          <span>${yAxisValue}%</span>
        </li>
        `;
      }, "");

      return `
        <div style="min-width:120px;">
          ${title}
          <ul style="padding-left:0px;margin-bottom:0px;">${lines}</ul>
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
      symbol: "round",
      data: forSeriesItem(data1),
      areaStyle: {
        color: "rgba(81,128,255,0.4)",
      },
      lineStyle: {
        width: 1,
      },
    },
    {
      name: "最大回撤(1.54%)",
      type: "line",
      smooth: 0.3,
      showSymbol: false,
      symbol: "round",
      data: [],
      markLine: {
        symbol: "none",
        label: {
          show: false,
        },
        lineStyle: {
          color: "#FF9749",
          width: 1,
        },
        data: [
          {
            yAxis: "-0.14",
          },
        ],
      },
    },
  ],
};

export default option;
