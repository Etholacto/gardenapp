import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AndroidLarge1 = () => {
  return (
    <View style={styles.androidLarge1}>
      <View style={styles.selectscreen}>
        <View style={styles.topimage}>
          <Image
            style={[styles.backdropIcon, styles.plantlistPosition]}
            contentFit="cover"
            source={require("../assets/backdrop.png")}
          />
          <View style={styles.arrowBack}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </View>
          <Image
            style={[styles.topimageChild, styles.plantlistPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
        </View>
        <View style={styles.bottomSheet}>
          <View style={[styles.plantlist, styles.plantlistPosition]}>
            <View style={styles.trailingIcons}>
              <Image
                style={styles.plantIcon}
                contentFit="cover"
                source={require("../assets/plant.png")}
              />
              <Image
                style={styles.plantIcon}
                contentFit="cover"
                source={require("../assets/plant.png")}
              />
              <Image
                style={styles.plantIcon}
                contentFit="cover"
                source={require("../assets/plant.png")}
              />
            </View>
            <View style={[styles.trailingIcons1, styles.trailingSpaceBlock]}>
              <Image
                style={styles.plantIcon}
                contentFit="cover"
                source={require("../assets/plant1.png")}
              />
              <Image
                style={styles.plantIcon}
                contentFit="cover"
                source={require("../assets/plant1.png")}
              />
              <Image
                style={styles.plantIcon}
                contentFit="cover"
                source={require("../assets/plant1.png")}
              />
            </View>
            <View style={styles.trailingSpaceBlock}>
              <Image
                style={styles.plantIcon}
                contentFit="cover"
                source={require("../assets/plant.png")}
              />
              <Image
                style={styles.plantIcon}
                contentFit="cover"
                source={require("../assets/plant.png")}
              />
              <Image
                style={styles.plantIcon}
                contentFit="cover"
                source={require("../assets/plant.png")}
              />
            </View>
            <View style={[styles.trailingIcons1, styles.trailingSpaceBlock]}>
              <Image
                style={styles.plantIcon}
                contentFit="cover"
                source={require("../assets/plant1.png")}
              />
              <Image
                style={styles.plantIcon}
                contentFit="cover"
                source={require("../assets/plant1.png")}
              />
              <Image
                style={styles.plantIcon}
                contentFit="cover"
                source={require("../assets/plant1.png")}
              />
            </View>
          </View>
          <View style={[styles.fixedaText, styles.fixedaShadowBox1]}>
            <View style={[styles.fixedaText1, styles.fixedaShadowBox2]}>
              <Text style={[styles.month, styles.julyTypo]}>Month</Text>
              <View style={[styles.fixedaText2, styles.fixedaShadowBox]}>
                <Image
                  style={styles.arrowIconLayout}
                  contentFit="cover"
                  source={require("../assets/arrow-back-ios.png")}
                />
                <Text style={[styles.july, styles.julyTypo]}>July</Text>
                <Image
                  style={[styles.arrowForwardIosIcon, styles.arrowIconLayout]}
                  contentFit="cover"
                  source={require("../assets/arrow-forward-ios.png")}
                />
              </View>
            </View>
            <View style={[styles.fixedaText3, styles.fixedaShadowBox2]}>
              <Text style={[styles.month, styles.julyTypo]}>Hemisphere</Text>
              <View style={[styles.fixedaText4, styles.fixedaShadowBox]}>
                <Image
                  style={styles.arrowIconLayout}
                  contentFit="cover"
                  source={require("../assets/brightness-5.png")}
                />
                <Image
                  style={styles.arrowIconLayout}
                  contentFit="cover"
                  source={require("../assets/bedtime.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.fixedaText5, styles.fixedaShadowBox1]}>
            <View style={styles.rectangleParent}>
              <View style={[styles.frameChild, styles.frameChildLayout]} />
              <Text style={[styles.spice, styles.julyTypo]}>Spice</Text>
              <Image
                style={[styles.frameItem, styles.framePosition]}
                contentFit="cover"
                source={require("../assets/polygon-1.png")}
              />
            </View>
            <View style={styles.rectangleParent}>
              <View style={[styles.frameChild, styles.frameChildLayout]} />
              <Text style={[styles.spice, styles.julyTypo]}>Veggie</Text>
              <Image
                style={[styles.frameItem, styles.framePosition]}
                contentFit="cover"
                source={require("../assets/polygon-1.png")}
              />
            </View>
            <View style={[styles.herbParent, styles.frameChildLayout]}>
              <Text style={[styles.spice, styles.julyTypo]}>Herb</Text>
              <Image
                style={[styles.frameItem, styles.framePosition]}
                contentFit="cover"
                source={require("../assets/polygon-1.png")}
              />
            </View>
            <View style={styles.rectangleParent}>
              <View style={[styles.frameChild, styles.frameChildLayout]} />
              <Text style={[styles.spice, styles.julyTypo]}>Fruit</Text>
              <Image
                style={[styles.frameItem, styles.framePosition]}
                contentFit="cover"
                source={require("../assets/polygon-1.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  plantlistPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  trailingSpaceBlock: {
    marginTop: 12.5,
    justifyContent: "space-between",
    paddingVertical: Padding.p_smi_5,
    paddingHorizontal: 0,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  fixedaShadowBox1: {
    width: 360,
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.primary500,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    left: "50%",
    top: "50%",
    marginLeft: -180,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  fixedaShadowBox2: {
    elevation: 4,
    shadowRadius: 4,
    backgroundColor: Color.primary500,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  julyTypo: {
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.button,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.button_size,
    justifyContent: "center",
    alignItems: "center",
  },
  fixedaShadowBox: {
    backgroundColor: Color.mediumblue_100,
    elevation: 4,
    shadowRadius: 4,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    alignSelf: "stretch",
    flex: 1,
  },
  arrowIconLayout: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  frameChildLayout: {
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_11xs,
    height: 15,
  },
  framePosition: {
    top: 0,
    position: "absolute",
  },
  backdropIcon: {
    marginTop: -100,
    width: 480,
    height: 360,
    marginLeft: -180,
    top: "50%",
  },
  vectorIcon: {
    width: 21,
    height: 20,
  },
  arrowBack: {
    top: 32,
    left: 8,
    padding: 6,
    position: "absolute",
    overflow: "hidden",
  },
  topimageChild: {
    marginTop: 0,
    marginLeft: -50,
    width: 100,
    height: 100,
    display: "none",
  },
  topimage: {
    backgroundColor: "#4cf8ce",
    height: 200,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  plantIcon: {
    width: 75,
    height: 75,
  },
  trailingIcons: {
    justifyContent: "space-between",
    paddingVertical: Padding.p_smi_5,
    paddingHorizontal: 0,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  trailingIcons1: {
    alignItems: "center",
  },
  plantlist: {
    marginTop: -219,
    marginLeft: -113,
    width: 225,
    alignItems: "center",
  },
  month: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.button,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.button_size,
    alignSelf: "stretch",
    flex: 1,
  },
  july: {
    width: 36,
    marginLeft: 5,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.button,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.button_size,
    alignSelf: "stretch",
  },
  arrowForwardIosIcon: {
    marginLeft: 5,
  },
  fixedaText2: {
    justifyContent: "center",
  },
  fixedaText1: {
    width: 180,
  },
  fixedaText4: {
    justifyContent: "space-between",
  },
  fixedaText3: {
    flex: 1,
  },
  fixedaText: {
    marginTop: -300,
    height: 50,
  },
  frameChild: {
    left: 0,
    width: 86,
    top: 0,
    position: "absolute",
  },
  spice: {
    marginTop: -7.5,
    marginLeft: -37,
    color: Color.dimgray,
    width: 65,
    height: 15,
    textAlign: "center",
    fontFamily: FontFamily.button,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.button_size,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frameItem: {
    right: 0,
    width: 11,
    height: 15,
  },
  rectangleParent: {
    height: 15,
    overflow: "hidden",
    flex: 1,
  },
  herbParent: {
    overflow: "hidden",
    flex: 1,
  },
  fixedaText5: {
    marginTop: -249.5,
  },
  bottomSheet: {
    backgroundColor: "#363434",
    shadowRadius: 5,
    elevation: 5,
    height: 600,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    alignSelf: "stretch",
  },
  selectscreen: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  androidLarge1: {
    backgroundColor: Color.white,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default AndroidLarge1;
