import {
  IonContent,
  IonButton,
  IonIcon,
  IonButtons,
  IonMenuButton,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuToggle,
  IonItem,
  IonMenu,
  IonSplitPane,
  IonToggle,
  IonList,
  IonLabel,
  IonSearchbar,
  IonCardContent,
  IonCard,
  IonImg,
  IonRouterLink,
  IonFooter,
  IonLoading,
  RefresherEventDetail,
  IonSkeletonText,
  IonAvatar,
  IonChip,
  IonRefresher,
  IonRefresherContent,
  IonProgressBar,
} from "@ionic/react";

import "./Home.css";
import {
  checkboxOutline,
  homeOutline,
  logOut,
  logOutOutline,
  logOutSharp,
  newspaperOutline,
  personCircleOutline,
  settingsOutline,
  syncOutline,
  logoGithub,
  moon,
  sunnyOutline,
  moonOutline,
  homeSharp,
  analyticsOutline,
  qrCodeOutline,
  mailOpenOutline,
  timeOutline,
  notificationsCircleOutline,
  notifications,
} from "ionicons/icons";
import {
  useIonRouter,
  useIonLoading,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { useEffect, useState } from "react";
const api = "https://api.github.com/users";

const Home: React.FC = () => {
  const [people, setPeople] = useState<any[]>([]);

  const profile = [
    {
      img: "./Ellipse 11.png",
      name: "Wesley Huston",
      ratings: "95",
    },
    {
      img: "./Ellipse 12.png",
      name: "Eleanor Gold",
      ratings: "92",
    },
    {
      img: "./Ellipse 13.png",
      name: "Musa Hammed",
      ratings: "87.5",
    },
    {
      img: "./Ellipse 14.png",
      name: "Clinton Wilson",
      ratings: "85",
    },
    {
      img: "./Ellipse 15.png",
      name: "Jamie Heresey",
      ratings: "81",
    },
  ];

  useEffect(() => {
    setPeople(profile);
  }, []);

  const paths = [
    {
      name: "Overview",
      url: "/home",
      icon: homeSharp,
    },
    {
      name: "Tickets",
      url: "/home",
      icon: qrCodeOutline,
      myNumber: 10,
    },
    {
      name: "Messages",
      url: "/home",
      icon: mailOpenOutline,
      myNumber: 2,
    },
    {
      name: "Analytics",
      url: "/home",
      icon: analyticsOutline,
    },
    {
      name: "History",
      url: "/home",
      icon: timeOutline,
    },
    {
      name: "notification",
      url: "/home",
      icon: notifications,
      myNumber: 5,
    },
    {
      name: "Settings",
      url: "/home",
      icon: settingsOutline,
    },
    {
      name: "Logout",
      url: "/home",
      icon: logOutOutline,
    },
  ];

  return (
    <>
      <IonSplitPane when="xl" contentId="main">
        <IonMenu contentId="main">
          <IonContent className="ion-padding">
            <IonTitle>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <div>
                  <img src="./Rectangle 51.png" alt="" />
                </div>
                <h3>GTBank</h3>
              </div>
            </IonTitle>
            <br />

            {paths.map((path, index) => {
              return (
                <>
                  <IonMenuToggle autoHide={false}>
                    <IonItem
                      routerLink={path.url}
                      routerDirection="none"
                      key={index}
                      className="ion-no-border"
                      style={{ paddingBottom: "1rem", border: "none" }}
                    >
                      {<IonIcon slot="start" icon={path.icon}></IonIcon>}
                      {path.name}

                      {path.myNumber ? (
                        <h6
                          slot="end"
                          style={{
                            height: "1.5rem",
                            width: "1.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            background: "#FF472E",
                            color: "white",
                            fontSize: "12px",
                          }}
                        >
                          {path.myNumber}
                        </h6>
                      ) : null}
                    </IonItem>
                  </IonMenuToggle>
                </>
              );
            })}
            <div className="profile-container">
              <div
                className="profile-img"
                
              >
                <div className="user-login" style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}>
                  <IonAvatar>
                    <IonImg
                      src="./Display Picture Variants.png"
                      style={{ width: "3rem", height: "3rem" }}
                    ></IonImg>
                  </IonAvatar>
                  <div className="profile-name">
                    <h6>
                      Ebubechi Ezewanne <br />
                      support@gtbank.com
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </IonContent>
        </IonMenu>
        <IonPage id="main">
          <IonContent className="ion-padding">
            <section className="contents">
              <IonToolbar color={"light"}>
                <IonButtons slot="start">
                  <IonMenuButton color={"dark"}></IonMenuButton>
                </IonButtons>
                <IonSearchbar slot="end" style={{ width: "17rem" }} />
              </IonToolbar>
              <section className="dashboard-figures">
                <IonGrid>
                  <IonRow>
                    <div className="dashboard-values">
                      <IonCol>
                        <IonCard
                          style={{
                            height: "15rem",
                            border: "1px solid white",
                            boxShadow: "1px 1px 1px 1px white",
                            width: "12rem",
                            paddingTop: "3rem",
                          }}
                        >
                          <IonCardContent>
                            <div className="progres-data">
                              <div className="pregress-image">
                                <IonImg src="./circle.jpg"></IonImg>
                              </div>
                            </div>
                          </IonCardContent>
                        </IonCard>
                      </IonCol>
                      <IonCol>
                        <IonCard style={{ height: "11rem", width: "100%" }}>
                          <IonCardContent>
                            <div className="card-data-wrapper">
                              <div className="card-data">
                                <div className="headset">
                                  <img
                                    src="./headset_mic.png"
                                    alt=""
                                    className="headset-img"
                                  />
                                </div>
                                <br />
                                <h3 style={{ fontSize: "1REM" }}>Answered</h3>
                                <br />
                                <h3
                                  style={{
                                    fontSize: "25px",
                                    fontWeight: "600",
                                    color:'black'
                                  }}
                                >
                                  10,175
                                </h3>
                              </div>
                              <div className="card-value">
                                <h3>53.7%</h3>
                              </div>
                            </div>
                          </IonCardContent>
                        </IonCard>
                      </IonCol>
                      <IonCol>
                        <IonCard style={{ height: "11rem", width: "100%" }}>
                          <IonCardContent>
                            <div className="card-data-wrapper">
                              <div className="card-data">
                                <div className="headset">
                                  <img
                                    src="./headset_mic.png"
                                    alt=""
                                    className="headset-img"
                                  />
                                </div>
                                <br />
                                <h3 style={{ fontSize: "1REM" }}>Declined</h3>
                                <br />
                                <h3
                                  style={{
                                    fontSize: "25px",
                                    fontWeight: "600",
                                    color:'black'
                                  }}
                                >
                                  2,055
                                </h3>
                              </div>
                              <div className="card-value">
                                <h3 style={{ background: "#FF000026" }}>
                                  14.5%
                                </h3>
                              </div>
                            </div>
                          </IonCardContent>
                        </IonCard>
                      </IonCol>
                      <IonCol>
                        <IonCard style={{ height: "11rem", width: "100%" }}>
                          <IonCardContent>
                            <div className="card-data-wrapper">
                              <div className="card-data">
                                <div className="headset">
                                  <img
                                    src="./headset_mic.png"
                                    alt=""
                                    className="headset-img"
                                  />
                                </div>
                                <br />
                                <h3 style={{ fontSize: "1REM" }}>Unaswered</h3>
                                <br />
                                <h3
                                  style={{
                                    fontSize: "25px",
                                    fontWeight: "600",
                                    color:'black'
                                  }}
                                >
                                  1,575
                                </h3>
                              </div>
                              <div className="card-value" slot="end">
                                <h3 style={{ background: "#71839B26" }}>10%</h3>
                              </div>
                            </div>
                          </IonCardContent>
                        </IonCard>
                      </IonCol>
                    </div>
                  </IonRow>
                </IonGrid>

                <section className="bar-side">
                  <IonGrid>
                    <IonRow>
                      <div className="socials">
                        <IonCol
                          slot="start"
                          sizeXl="9"
                          sizeLg="11"
                          sizeXs="12"
                          sizeMd="8"
                          sizeSm="6"
                        >
                          <div className="progress-bar">
                            <IonCard style={{ width: "100%" }}>
                              <IonCardContent>
                                <h3>Reasons for Request</h3>
                                <br />
                                <div
                                  className="progress-details"
                                  style={{
                                    padding: ".4rem .4rem",
                                    border: "2px solid #bbbdc0",
                                  }}
                                >
                                  <IonProgressBar
                                    style={{
                                      height: "2rem",
                                      width: "45%",
                                      background: "#4187A5",
                                    }}
                                    color={"#4187A5"}
                                    value={5}
                                  ></IonProgressBar>
                                </div>

                                <IonToolbar>
                                  <div
                                    className="percent-description"
                                    slot="start"
                                  >
                                    <h3>Product / Service problems</h3>
                                  </div>

                                  <div className="percent-text" slot="end">
                                    <h2>45%</h2>
                                  </div>
                                </IonToolbar>
                                <div
                                  className="progress-details"
                                  style={{
                                    padding: ".4rem .4rem",
                                    border: "2px solid #bbbdc0",
                                    width: "100%",
                                  }}
                                >
                                  <IonProgressBar
                                    style={{
                                      height: "2rem",
                                      width: "8%",
                                      background: "#A56541",
                                    }}
                                    color={"#4187A5"}
                                    value={5}
                                  ></IonProgressBar>
                                </div>

                                <IonToolbar>
                                  <div
                                    className="percent-description"
                                    slot="start"
                                  >
                                    <h3>Technical issues</h3>
                                  </div>

                                  <div className="percent-text" slot="end">
                                    <h2>8%</h2>
                                  </div>
                                </IonToolbar>
                                <div
                                  className="progress-details"
                                  style={{
                                    padding: ".4rem .4rem",
                                    border: "2px solid #bbbdc0",
                                  }}
                                >
                                  <IonProgressBar
                                    style={{
                                      height: "2rem",
                                      width: "12%",
                                      background: "#6D41A5",
                                    }}
                                    color={"#4187A5"}
                                    value={5}
                                  ></IonProgressBar>
                                </div>

                                <IonToolbar>
                                  <div
                                    className="percent-description"
                                    slot="start"
                                  >
                                    <h3>Card Transactions</h3>
                                  </div>

                                  <div className="percent-text" slot="end">
                                    <h2>12%</h2>
                                  </div>
                                </IonToolbar>
                                <div
                                  className="progress-details"
                                  style={{
                                    padding: ".4rem .4rem",
                                    border: "2px solid #bbbdc0",
                                  }}
                                >
                                  <IonProgressBar
                                    style={{
                                      height: "2rem",
                                      width: "20%",
                                      background: "#A5419B",
                                    }}
                                    color={"#4187A5"}
                                    value={5}
                                  ></IonProgressBar>
                                </div>

                                <IonToolbar>
                                  <div
                                    className="percent-description"
                                    slot="start"
                                  >
                                    <h3>Payment issues</h3>
                                  </div>

                                  <div className="percent-text" slot="end">
                                    <h2>20%</h2>
                                  </div>
                                </IonToolbar>
                              </IonCardContent>
                            </IonCard>
                          </div>
                        </IonCol>
                        <IonCol
                          sizeXl="7"
                          sizeLg="7"
                          sizeXs="13"
                          sizeSm="5"
                          sizeMd="6"
                        >
                          <IonCard>
                            <IonCardContent>
                              <div className="title">
                                <h3>Best Care Staff</h3>
                                {people.map((person, index) => {
                                  const { name, img, ratings } = person;
                                  return (
                                    <>
                                      <div className="container">
                                        <div
                                          className="container-wrapper"
                                          key={index}
                                        >
                                          <IonAvatar>
                                            <IonImg src={img}></IonImg>
                                          </IonAvatar>
                                          <div className="text">
                                            <div className="user-name">
                                              <h3>{name}</h3>
                                            </div>
                                            <div className="ratings">
                                              <h3>
                                                Customer Satisfaction: {ratings}
                                                %
                                              </h3>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                            </IonCardContent>
                          </IonCard>
                        </IonCol>
                      </div>
                    </IonRow>
                  </IonGrid>
                </section>
              </section>
            </section>
          </IonContent>
        </IonPage>
      </IonSplitPane>
    </>
  );
};

export default Home;
