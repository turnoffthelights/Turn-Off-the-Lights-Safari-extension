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
    
    func checkoffline(){
        DispatchQueue.main.asyncAfter(deadline: .now()+0.3, execute: {
            let connected = UserDefaults.standard.bool(forKey: "connected")
            if(connected == false){
                NotificationCenter.default.post(name: Notification.Name(rawValue: "calloffline"), object: nil)
            }
        })
    }
}
