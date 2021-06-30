//
//  MasterViewController.swift
//  Turn Off the Lights for Safari (iOS)
//
//  Created by Stefan Van Damme on 22/06/2021.
//

import UIKit

class MasterViewController: UITabBarController,UITabBarControllerDelegate {
    
    // MARK: - UIViewController
    override func viewDidLoad() {
        super.viewDidLoad()
        self.delegate = self
    }
    
    func tabBarController(_ tabBarController: UITabBarController, didSelect viewController: UIViewController) {
        let tabBarIndex = tabBarController.selectedIndex
        //print("tabBarIndex: ",tabBarIndex)
        let defaults = UserDefaults(suiteName: "group.stefanvd.turnoffthelightsforsafari")
        defaults!.set(tabBarIndex, forKey: "currentopentab")
    }

    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        let defaults = UserDefaults(suiteName: "group.stefanvd.turnoffthelightsforsafari")
        let getcurrenttab = defaults!.integer(forKey: "currentopentab")
        if traitCollection.horizontalSizeClass == .compact {
            // iPhone size
            self.selectedIndex = getcurrenttab
        } else {
            // iPad size
        }
    }
    
}
