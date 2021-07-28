//
//  WelcomeViewController.swift
//  Turn Off the Lights for Safari (iOS)
//
//  Created by Stefan Van Damme on 13/06/2021.
//

import Foundation
import UIKit
import SafariServices
import Turn_Off_the_Lights_for_Safari_Extension
import LinkPresentation

class WelcomeViewController: UIViewController, UIActivityItemSource {
    var metadata: LPLinkMetadata?

    func activityViewControllerLinkMetadata(_ activityViewController: UIActivityViewController) -> LPLinkMetadata? {
        return self.metadata
    }

    func activityViewControllerPlaceholderItem(_ activityViewController: UIActivityViewController) -> Any {
        return String.localizedStringWithFormat(NSLocalizedString("lblplaceholder", comment: ""), "")
    }

    let websitelink = "https://www.turnoffthelights.com"
    func activityViewController(_ activityViewController: UIActivityViewController, itemForActivityType activityType: UIActivity.ActivityType?) -> Any? {
        if activityType == .postToTwitter {
            return String.localizedStringWithFormat(NSLocalizedString("lblsharetwitter", comment: ""), "") + " " + websitelink
        } else {
            return String.localizedStringWithFormat(NSLocalizedString("lblshareregular", comment: ""), "") + " " + websitelink
        }
    }
    
    func activityViewController(_ activityViewController: UIActivityViewController, subjectForActivityType activityType: UIActivity.ActivityType?) -> String {
        return String.localizedStringWithFormat(NSLocalizedString("lblemailsubject", comment: ""), "")
    }
    
    @IBAction func openoptions(_ sender: Any) {
        if let url = URL(string: "https://www.turnoffthelights.com/extension/redirection/") {
            UIApplication.shared.open(url)
        }
    }
    
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

    @IBOutlet weak var btnshare: UIButton!
    @IBAction func bigshareaction(_ sender: Any) {
        let url = URL(string: "https://www.turnoffthelights.com")!
        LPMetadataProvider().startFetchingMetadata(for: url) { [self] linkMetadata, _ in
            //linkMetadata?.iconProvider = linkMetadata?.imageProvider
            self.metadata = linkMetadata
            let items = [self]
            let ac = UIActivityViewController(activityItems: items, applicationActivities: nil)
            // Check if user is on iPad and present popover
            if UIDevice.current.userInterfaceIdiom == .pad {
                ac.popoverPresentationController?.sourceView = self.btnshare
                ac.popoverPresentationController?.sourceRect = self.btnshare.bounds;
                ac.popoverPresentationController?.permittedArrowDirections = UIPopoverArrowDirection.down;
            }
            // Present share activityView on regular iPhone
            DispatchQueue.main.async {
                self.present(ac, animated: true)
            }
        }
    }

}
