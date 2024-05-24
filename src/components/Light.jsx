import styles from "./Light.module.css";

const Light = ({ className = "" }) => {
  return (
    <div className={[styles.light, className].join(" ")}>
      <div className={styles.lightChild} />
      <div className={styles.componentContent}>
        <div className={styles.componentItemsParent}>
          <img
            className={styles.componentItemsIcon}
            loading="lazy"
            alt=""
            src="/frame-11.svg"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.frameChild} />
            </div>
          </div>
          <img
            className={styles.componentItemsIcon1}
            loading="lazy"
            alt=""
            src="/frame-9@2x.png"
          />
          <img
            className={styles.componentItemsIcon2}
            loading="lazy"
            alt=""
            src="/frame-8@2x.png"
          />
          <img
            className={styles.componentItemsIcon3}
            loading="lazy"
            alt=""
            src="/frame-10@2x.png"
          />
          <div className={styles.rectangleContainer}>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.featherIcons}>
            <div className={styles.featherIconItemsParent}>
              <div className={styles.featherIconItems}>
                <img
                  className={styles.featherIconCommand}
                  alt=""
                  src="/feathericon--command.svg"
                />
              </div>
              <div className={styles.featherIconItems1}>
                <img
                  className={styles.featherIconPieChart}
                  alt=""
                  src="/feathericon--piechart.svg"
                />
              </div>
              <div className={styles.featherIconItems2}>
                <img
                  className={styles.featherIconClock}
                  alt=""
                  src="/feathericon--clock.svg"
                />
              </div>
              <div className={styles.featherIconItems3}>
                <img
                  className={styles.featherIconGlobe}
                  alt=""
                  src="/feathericon--globe.svg"
                />
              </div>
              <div className={styles.featherIconItems4}>
                <img
                  className={styles.featherIconLoader}
                  alt=""
                  src="/feathericon--loader.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.rectangleFrame}>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.messageSquare}>
            <div className={styles.messageSquareInner}>
              <div className={styles.messageSquareIcon}>
                <input
                  className={styles.featherIconMessageSquare}
                  type="checkbox"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dashboardContainerParent}>
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboardContent}>
            <div className={styles.dashboardContentChild} />
            <div className={styles.dashboardItems}>
              <div className={styles.dashboardItemList}>
                <div className={styles.dashboard}>Dashboard</div>
              </div>
              <div className={styles.dashboardItemList1}>
                <div className={styles.advancedQuarry}>Advanced Quarry</div>
              </div>
              <div className={styles.dashboardItemList2}>
                <div className={styles.events}>Events</div>
              </div>
              <div className={styles.dashboardItemsChild} />
              <div className={styles.searchIcon}>
                <img
                  className={styles.featherIconSearch}
                  alt=""
                  src="/feathericon--search.svg"
                />
              </div>
            </div>
            <div className={styles.dashboardContentInner}>
              <div className={styles.rectangleDiv} />
            </div>
          </div>
          <div className={styles.profile}>
            <div className={styles.profileContent}>
              <div className={styles.profileName}>
                <b className={styles.bessieCooper}>Bessie Cooper</b>
              </div>
              <div className={styles.rectangleParent}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-6@2x.png"
                />
                <div className={styles.chevronIcon}>
                  <img
                    className={styles.featherIconChevronDown}
                    alt=""
                    src="/feathericon--chevrondown.svg"
                  />
                </div>
              </div>
              <div className={styles.moonIcon}>
                <div className={styles.moonIconInner}>
                  <img
                    className={styles.featherIconMoon}
                    alt=""
                    src="/feathericon--moon.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dashboardHeader}>
          <div className={styles.dashboardHeaderContent}>
            <div className={styles.dashboardHeaderItemsParent}>
              <div className={styles.dashboardHeaderItems}>
                <b className={styles.dashboard1}>DASHBOARD</b>
                <div className={styles.chevronRight}>
                  <img
                    className={styles.featherIconChevronRight}
                    alt=""
                    src="/feathericon--chevronright.svg"
                  />
                </div>
                <div className={styles.bitforexcom}>BITFOREX.COM</div>
              </div>
              <div className={styles.salesItemsParent}>
                <img
                  className={styles.salesItemsIcon}
                  alt=""
                  src="/sales-items@2x.png"
                />
                <div className={styles.companyName}>
                  <h2 className={styles.eMaps}>E-Maps</h2>
                </div>
                <button className={styles.salesItems}>
                  <img
                    className={styles.emptySalesItem}
                    alt=""
                    src="/empty-sales-item@2x.png"
                  />
                </button>
              </div>
            </div>
            <div className={styles.totalSalesContentParent}>
              <div className={styles.totalSalesContent}>
                <div className={styles.totalSalesHeader}>
                  <b className={styles.totalSales}>Total Sales</b>
                  <div className={styles.alertCircleIcon}>
                    <img
                      className={styles.featherIconAlertCircle}
                      alt=""
                      src="/feathericon--alertcircle.svg"
                    />
                  </div>
                </div>
                <div className={styles.salesChart}>
                  <div className={styles.salesChartInner}>
                    <div className={styles.lineDiv} />
                  </div>
                  <div className={styles.chartLabel}>
                    <div className={styles.provisionsMonth}>
                      Provisions Month
                    </div>
                  </div>
                  <div className={styles.marchContainer}>
                    <div className={styles.march2020}>March 2020</div>
                    <div className={styles.calendarIconContainer}>
                      <img
                        className={styles.featherIconCalendar}
                        alt=""
                        src="/feathericon--calendar.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.moreHorizontalIconContainer}>
                    <img
                      className={styles.featherIconMoreHorizontal}
                      alt=""
                      src="/feathericon--morehorizontal.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.chartContainerParent}>
                <div className={styles.chartContainer}>
                  <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                  <div className={styles.lineParent}>
                    <div className={styles.frameChild1} />
                    <div className={styles.frameChild2} />
                    <div className={styles.frameChild3} />
                    <div className={styles.frameChild4} />
                  </div>
                  <img
                    className={styles.chartContainerChild}
                    alt=""
                    src="/group-3.svg"
                  />
                </div>
                <div className={styles.chartBottomLabelsContainer}>
                  <div className={styles.chartLabelsContainer}>
                    <div className={styles.mParent}>
                      <div className={styles.m}>260M</div>
                      <div className={styles.m1}>220M</div>
                      <div className={styles.m2}>180M</div>
                      <div className={styles.m3}>140M</div>
                    </div>
                  </div>
                  <div className={styles.tooltipParent}>
                    <div className={styles.tooltip}>
                      <div className={styles.wrapperShape}>
                        <img
                          className={styles.shapeIcon1}
                          loading="lazy"
                          alt=""
                          src="/shape-1.svg"
                        />
                      </div>
                      <div className={styles.tooltipLabelsContainer}>
                        <div className={styles.label}>This Month</div>
                        <b className={styles.label1}>220,342,123</b>
                        <div className={styles.label2}>May</div>
                      </div>
                    </div>
                    <div className={styles.lineWrapper}>
                      <div className={styles.frameChild5} />
                    </div>
                    <div className={styles.selector} />
                  </div>
                </div>
                <div className={styles.verticalChartBarsContainer}>
                  <div className={styles.chartBarContainerParent}>
                    <div className={styles.chartBarContainer}>
                      <div className={styles.chartBar}>1</div>
                    </div>
                    <div className={styles.chartBarContainer1}>
                      <div className={styles.div}>5</div>
                    </div>
                    <div className={styles.chartBarContainer2}>
                      <div className={styles.div1}>10</div>
                    </div>
                    <div className={styles.chartBarContainer3}>
                      <div className={styles.div2}>15</div>
                    </div>
                    <div className={styles.chartBarContainer4}>
                      <div className={styles.div3}>20</div>
                    </div>
                    <div className={styles.chartBarContainer5}>25</div>
                    <div className={styles.chartBarContainer6}>30</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.inventoryContainerParent}>
              <div className={styles.inventoryContainer}>
                <div className={styles.inventoryContentContainer}>
                  <div className={styles.inventoryTitleContainer}>
                    <b className={styles.inventory}>Inventory</b>
                    <div className={styles.alertIconContainer}>
                      <img
                        className={styles.featherIconAlertCircle1}
                        alt=""
                        src="/feathericon--alertcircle.svg"
                      />
                    </div>
                  </div>
                  <img
                    className={styles.emptyInventoryContainer}
                    loading="lazy"
                    alt=""
                    src="/frame-1350@2x.png"
                  />
                </div>
                <div className={styles.cardsContainer}>
                  <div className={styles.cardContainer}>
                    <div className={styles.cardContainerInner}>
                      <div className={styles.frameChild6} />
                    </div>
                    <div className={styles.bottomLabelsContainer}>
                      <div className={styles.label3}>Google.com .Inc</div>
                      <div className={styles.label4}>3,124,213 users</div>
                    </div>
                  </div>
                  <div className={styles.cardContainer1}>
                    <div className={styles.cardContainerChild}>
                      <div className={styles.frameChild7} />
                    </div>
                    <div className={styles.labelParent}>
                      <div className={styles.label5}>Recommended flow</div>
                      <div className={styles.label6}>1,523,151 users</div>
                    </div>
                  </div>
                  <div className={styles.cardContainer2}>
                    <div className={styles.frameDiv}>
                      <div className={styles.frameChild8} />
                    </div>
                    <div className={styles.labelGroup}>
                      <div className={styles.label7}>Other</div>
                      <div className={styles.label8}>948,213 users</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.salesCardContainer}>
                <div className={styles.salesTitleContainer}>
                  <b className={styles.sales}>
                    <p className={styles.sales1}>Sales</p>
                  </b>
                  <div className={styles.salesAlertIconContainer}>
                    <img
                      className={styles.featherIconAlertCircle2}
                      alt=""
                      src="/feathericon--alertcircle.svg"
                    />
                  </div>
                </div>
                <div className={styles.salesBottomLabelsContainer}>
                  <b className={styles.label9}>594</b>
                  <div className={styles.salesBottomLabelContainer}>
                    <div className={styles.label10}>Total</div>
                  </div>
                </div>
                <div className={styles.salesChartBarParent}>
                  <div className={styles.salesChartBar} />
                  <div className={styles.salesChartBar1} />
                </div>
                <div className={styles.secondCardsContainer}>
                  <div className={styles.secondCardContainer}>
                    <div className={styles.secondCardContainerInner}>
                      <div className={styles.frameChild9} />
                    </div>
                    <div className={styles.secondBottomLabelsContainer}>
                      <div className={styles.label11}>Online</div>
                      <div className={styles.label12}>179 users</div>
                    </div>
                  </div>
                  <div className={styles.secondCardContainer1}>
                    <div className={styles.secondCardContainerChild}>
                      <div className={styles.frameChild10} />
                    </div>
                    <div className={styles.labelContainer}>
                      <div className={styles.label13}>Offline</div>
                      <div className={styles.label14}>394 users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.superiorityContainerWrapper}>
            <div className={styles.superiorityContainer}>
              <div className={styles.superiorityContentContainer}>
                <div className={styles.superiorityTitleContainer}>
                  <b className={styles.superiority}>Superiority</b>
                  <div className={styles.superiorityAlertIconContain}>
                    <img
                      className={styles.featherIconAlertCircle3}
                      alt=""
                      src="/feathericon--alertcircle.svg"
                    />
                  </div>
                </div>
                <div className={styles.superiorityLinksContainer}>
                  <div className={styles.wrapperEmptySuperiorityCont}>
                    <img
                      className={styles.emptySuperiorityContainer}
                      loading="lazy"
                      alt=""
                      src="/frame-1334@2x.png"
                    />
                  </div>
                  <div className={styles.socialTradingLinkContainer}>
                    <div className={styles.linkIconContainer}>
                      <img
                        className={styles.featherIconLink}
                        alt=""
                        src="/feathericon--link.svg"
                      />
                    </div>
                    <div className={styles.socialTradingPlatform}>
                      Social Trading Platform
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.graphContainer}>
                <div className={styles.graphContentContainer}>
                  <img
                    className={styles.topGraphContainer}
                    alt=""
                    src="/top-graph-container.svg"
                  />
                  <div className={styles.bottomGraphContainer}>
                    <div className={styles.stockTrading}>Stock trading</div>
                    <div className={styles.google}>Google</div>
                  </div>
                </div>
                <img className={styles.graphContentContainer1} alt="" />
                <div className={styles.graphContentContainer2}>
                  <img
                    className={styles.graphContentContainerChild}
                    alt=""
                    src="/frame-1344@2x.png"
                  />
                  <div className={styles.stockTradingParent}>
                    <div className={styles.stockTrading1}>Stock trading</div>
                    <div className={styles.foursquare}>Foursquare</div>
                  </div>
                </div>
                <img className={styles.graphContentContainer3} alt="" />
                <div className={styles.graphContentContainer4}>
                  <img
                    className={styles.graphContentContainerItem}
                    alt=""
                    src="/frame-1342.svg"
                  />
                  <div className={styles.stockTradingGroup}>
                    <div className={styles.stockTrading2}>Stock trading</div>
                    <div className={styles.kickstarter}>Kickstarter</div>
                  </div>
                </div>
                <img className={styles.graphContentContainer5} alt="" />
                <div className={styles.graphContentContainer6}>
                  <img
                    className={styles.graphContentContainerInner}
                    alt=""
                    src="/frame-1345.svg"
                  />
                  <div className={styles.stockTradingContainer}>
                    <div className={styles.stockTrading3}>Stock trading</div>
                    <div className={styles.google1}>Google</div>
                  </div>
                </div>
              </div>
              <div className={styles.incomeContainer}>
                <div className={styles.incomeTitleContainer}>
                  <b className={styles.myIncome}>My Income</b>
                  <div className={styles.incomeAlertIconContainer}>
                    <img
                      className={styles.featherIconAlertCircle4}
                      alt=""
                      src="/feathericon--alertcircle.svg"
                    />
                  </div>
                </div>
                <div className={styles.chart02}>
                  <img className={styles.unionIcon} alt="" src="/union.svg" />
                  <div className={styles.graphPie}>
                    <img
                      className={styles.graphPieChild}
                      alt=""
                      src="/group-31.svg"
                    />
                    <b className={styles.label15}>46%</b>
                  </div>
                  <div className={styles.label16}>Legend</div>
                  <div className={styles.chartLabelContainer}>
                    <div className={styles.label17}>+25%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.icon}
        loading="lazy"
        alt=""
        src="/111111-1@2x.png"
      />
    </div>
  );
};

Light.propTypes = {
  className: PropTypes.string,
};

export default Light;
