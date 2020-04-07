import React, { useState } from 'react';
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