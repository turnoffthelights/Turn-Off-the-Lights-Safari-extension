//
//  WelcomeViewController.swift
//  Turn Off the Lights for Safari (iOS)
//
//  Created by Stefan Van Damme on 13/06/2021.
//

import Foundation
import UIKit

class WelcomeViewController: UIViewController{
    
    override func viewDidLoad(){
        super.viewDidLoad()
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        if traitCollection.horizontalSizeClass == .compact {
            // iPhone size
            self.navigationItem.title = "Turn Off the Lights"
        } else {
            // large iPad size
            self.navigationItem.title = ""
        }
    }
    
    override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        if traitCollection.horizontalSizeClass == .compact {
            // iPhone size
            self.navigationItem.title = "Turn Off the Lights"
        } else {
            // large iPad size
            self.navigationItem.title = ""
        }
    }
    
    var productURL = URL(string: "https://itunes.apple.com/app/id1273998507")!
    @IBAction func bigshareaction(_ sender: Any) {
        #if targetEnvironment(simulator)
        let alert = UIAlertController(title: "Share", message: "Share is not available in the iOS simulator", preferredStyle: UIAlertController.Style.alert)
        alert.addAction(UIAlertAction(title: "OK", style: UIAlertAction.Style.default, handler: nil))
            self.present(alert, animated: true, completion: nil)
        #else
        let activityVC = UIActivityViewController(activityItems: [productURL], applicationActivities: nil)
        
        //Apps to be excluded sharing to
        activityVC.excludedActivityTypes = [
                UIActivity.ActivityType.print,
                UIActivity.ActivityType.addToReadingList
            ]
        // Check if user is on iPad and present popover
        if UIDevice.current.userInterfaceIdiom == .pad {
            activityVC.popoverPresentationController?.sourceView = self.view
        }
        // Present share activityView on regular iPhone
        self.present(activityVC, animated: true, completion: nil)
        #endif
    }

}
