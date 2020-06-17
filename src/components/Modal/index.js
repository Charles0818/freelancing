import React, { useState, useRef } from 'react';
import { View, Modal, StyleSheet } from 'react-native';
const CenteredModal = ({modalVisible, children: Children}) => {
  return (
    <View style={[modalStyle.container]}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        }}
      >
        {Children}
      </Modal>
    </View>
  )
}

const Confirmation = () => {
  return (
    <View style={[modalStyle.container]}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        }}
      >
        <View className="d-flex column">
            <Text className="font-md font-weight-600 margin-bottom-md">{heading}</Text>
            <Text className="font-sm color-dark padding-bottom-md">{Children}</Text>
            <View className="d-flex justify-content--end" style={{width: '100%'}}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#a0a0a0", true)} className="padding-md margin-right-sm cursor-pointer font-sm font-weight-600 border-r-5 danger-bg color-white" onClick={fireAction}>
                Yes
                </TouchableNativeFeedback>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#a0a0a0", true)} className="padding-md font-sm font-weight-600 cursor-pointer border-r-5 bg-color2 color-white" onClick={closeModal}>
                    No
                </TouchableNativeFeedback>
            </View>
        </View>
      </Modal>
    </View>
  )
}

const DrawUpModal = ({visible, children: Children}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => null}
    >
    {Children}
    </Modal>
  )
}

export const useDrawUpModal = ({children}) => {
  const visible = useRef(false);
  const setVisibility  = (bool) => {
    visible.current = bool;
  }
  const drawUpModal = <DrawUpModal visible={visible.current} children={children} />
  return { setVisibility, drawUpModal }
}
export const useCenteredModal = ({children}) =>  {
  const [modalVisible, setModalVisible] = useState(false);
  const ModalChild = <CenteredModal modalVisible={modalVisible} children={children} />;
  return { ModalChild, setModalVisible }
}

const modalStyle = StyleSheet.create({
  container: {
    paddingVertical: 10,
  }
})