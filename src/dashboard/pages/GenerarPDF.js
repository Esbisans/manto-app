import React from "react";
import {Document, Page, View, Text} from "@react-pdf/renderer";

const GenerarPDF = ({texto}) => {
    return(
        <Document>
            <Page size='A4' >
                <View>
                    <Text>{texto}</Text>
                </View>
            </Page>
        </Document>
        
    );
};

export default GenerarPDF;