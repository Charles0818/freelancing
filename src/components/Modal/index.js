import React, { useState } from 'react';
import { View, Modal } from 'react-native';
const CenteredModal = ({modalVisible, children: Children}) => {
    return (
        <View>
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

export const useModal = () =>  {
    const [modalVisible, setModalVisible] = useState(false);
    const ModalChild = <CenteredModal modalVisible={modalVisible} />;
    return { ModalChild, setModalVisible }
}