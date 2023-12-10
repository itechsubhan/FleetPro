import { EditIcon } from "lucide-react-native";

import {
  Pressable,
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from "@gluestack-ui/themed";
import {
  Box,
  Center,
  Button,
  ButtonText,
  ButtonIcon,
  ButtonGroup,
  Icon,
  AddIcon,
  InfoIcon,
  ButtonSpinner,
  ArrowUpIcon,
  Heading,
  Text,
  HStack,
  VStack,
  ThreeDotsIcon,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import { ArrowLeftIcon } from "lucide-react-native";
import { GestureResponderEvent, ImageBackground, View } from "react-native";
import React from "react";

export default function WelcomeScreen({ navigation }) {
  // const image =  ;
  // const image = {uri: };
  function gotoDashboard(): void {
    navigation.navigate("Dashboard");
  }
  const toast = useToast();
  return (
    <ImageBackground source={require("./carbg.png")}>
    <Box h={"$full"} w={"$full"} justifyContent="center" alignItems="center">
        <Text>Welcome to the app</Text>
        <Button
          action={"primary"}
          variant={"solid"}
          size={"lg"}
          isDisabled={false}
          onPress={gotoDashboard}
        >
          <ButtonText>Continue to the Dashboard</ButtonText>
        </Button>
      </Box>
    </ImageBackground>
  );
}
