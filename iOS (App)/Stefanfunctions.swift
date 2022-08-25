//
//  Stefanfunctions.swift
//  Turn Off the Lights for Safari (iOS)
//
//  Created by Stefan Van Damme on 25/08/2022.
//

import UIKit

class Stefanfunctions{
    func i18string(text: String) -> String{
        return String.localizedStringWithFormat(NSLocalizedString(text, comment: ""), "")
    }
    
    func openweb(text:String){
        if let url = URL(string: text) {
            UIApplication.shared.open(url)
        }
    }
}
