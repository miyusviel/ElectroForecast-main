import { FunctionComponent } from 'react';
import styles from './css/HomePage.module.css';
import './global.css';

const HomePage:FunctionComponent = () => {
  	return (
    		<div className={styles.homePage}>
      			<div className={styles.header}>
        				<div className={styles.block}>
          					<div className={styles.iconButton} />
          					<div className={styles.iconButton} />
          					<div className={styles.figma}>
            						<img className={styles.icon} alt="" src="Icon.svg" />
          					</div>
        				</div>
        				<div className={styles.electroforecast}>ElectroForecast</div>
        				<div className={styles.navigationPillList} />
        				<div className={styles.headerAuth}>
          					<div className={styles.button}>
            						<div className={styles.button1}>Sign in</div>
          					</div>
          					<div className={styles.button2}>
            						<div className={styles.button1}>Register</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.section}>
        				<img className={styles.prophetHeader1Icon} alt="" src="prophet-header 1.png" />
      			</div>
      			<div className={styles.heroActions}>
        				<div className={styles.textContentTitle}>
          					<b className={styles.title}>ElectroForecast</b>
          					<div className={styles.subtitle}>Intelligent Forecasting for Energy Costs</div>
        				</div>
        				<div className={styles.buttonGroup}>
          					<div className={styles.button4}>
            						<div className={styles.button1}>Register</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.footerParent}>
        				<div className={styles.footer}>
          					<div className={styles.title1}>
            						<div className={styles.manageEnergyConsumption}>Manage energy consumption and  expenses more effectively.</div>
            						<div className={styles.figma1}>
              							<img className={styles.icon} alt="" src="Icon.svg" />
            						</div>
          					</div>
          					<div className={styles.textLinkList}>
            						<div className={styles.title2}>
              							<div className={styles.textStrong}>
                								<div className={styles.textStrong1}>Use cases</div>
              							</div>
            						</div>
            						<div className={styles.textLinkListItem}>
              							<div className={styles.listItem}>UI design</div>
            						</div>
            						<div className={styles.textLinkListItem}>
              							<div className={styles.listItem}>UX design</div>
            						</div>
            						<div className={styles.textLinkListItem}>
              							<div className={styles.listItem}>Wireframing</div>
            						</div>
            						<div className={styles.textLinkListItem}>
              							<div className={styles.listItem}>Diagramming</div>
            						</div>
            						<div className={styles.textLinkListItem}>
              							<div className={styles.listItem}>Brainstorming</div>
            						</div>
            						<div className={styles.textLinkListItem}>
              							<div className={styles.listItem}>Online whiteboard</div>
            						</div>
            						<div className={styles.textLinkListItem}>
              							<div className={styles.listItem}>Team collaboration</div>
            						</div>
          					</div>
          					<div className={styles.textLinkList1}>
            						<div className={styles.title3}>
              							<div className={styles.textStrong}>
                								<div className={styles.textStrong1}>Account Management</div>
              							</div>
            						</div>
            						<div className={styles.textLinkListItem7}>
              							<div className={styles.listItem}>Login</div>
            						</div>
            						<div className={styles.textLinkListItem7}>
              							<div className={styles.listItem}>Registration</div>
            						</div>
            						<div className={styles.textLinkListItem7}>
              							<div className={styles.developmentFeatures}>Development features</div>
            						</div>
            						<div className={styles.textLinkListItem}>
              							<div className={styles.listItem}>Design systems</div>
            						</div>
            						<div className={styles.textLinkListItem}>
              							<div className={styles.listItem}>Collaboration features</div>
            						</div>
            						<div className={styles.textLinkListItem}>
              							<div className={styles.listItem}>Design process</div>
            						</div>
            						<div className={styles.textLinkListItem}>
              							<div className={styles.listItem}>FigJam</div>
            						</div>
          					</div>
          					<div className={styles.textLinkList1}>
            						<div className={styles.title3}>
              							<div className={styles.textStrong}>
                								<div className={styles.textStrong1}>Resources</div>
              							</div>
            						</div>
            						<div className={styles.textLinkListItem7}>
              							<div className={styles.listItem}>Privacy Policy</div>
            						</div>
            						<div className={styles.textLinkListItem7}>
              							<div className={styles.listItem}>FAQ</div>
            						</div>
            						<div className={styles.textLinkListItem7}>
              							<div className={styles.listItem}>About Prophet</div>
            						</div>
            						<div className={styles.textLinkListItem7}>
              							<div className={styles.listItem}>About Us</div>
            						</div>
            						<div className={styles.textLinkListItem} />
            						<div className={styles.textLinkListItem} />
            						<div className={styles.textLinkListItem} />
          					</div>
        				</div>
        				<div className={styles.buttonList}>
          					<img className={styles.xLogoIcon} alt="" src="X Logo.svg" />
          					<img className={styles.logoInstagramIcon} alt="" src="Logo Instagram.svg" />
          					<img className={styles.logoInstagramIcon} alt="" src="Logo YouTube.svg" />
          					<img className={styles.linkedinIcon} alt="" src="LinkedIn.svg" />
        				</div>
      			</div>
    		</div>);
};

export default HomePage;
