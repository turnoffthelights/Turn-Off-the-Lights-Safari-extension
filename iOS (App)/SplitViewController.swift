//
//  SplitViewController.swift
//  Turn Off the Lights for Safari (iOS)
//
//  Created by Stefan Van Damme on 22/06/2021.
//

import UIKit

class SplitViewController: UISplitViewController {
    
    // MARK: - UIViewController
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // split code check if offline, then show this offline panel
        DispatchQueue.main.asyncAfter(deadline: .now()+0.3, execute: {
            let connected = UserDefaults.standard.bool(forKey: "connected")
            if(connected == false){
                NotificationCenter.default.post(name: Notification.Name(rawValue: "calloffline"), object: nil)
            }
        })
    }
    
    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        if traitCollection.horizontalSizeClass == .compact {
            // iPhone size
        } else {
            // iPad size
        }
    }

}
