//
//  SmalliPadCell1.swift
//  Turn Off the Lights for Safari (iOS)
//
//  Created by Stefan Van Damme on 24/08/2022.
//

import UIKit

class SmalliPadCell1: UICollectionViewCell {
    let defaults = UserDefaults(suiteName: "group.stefanvd.turnoffthelightsforsafari")

    @IBAction func closeaction(_ sender: Any) {
        NotificationCenter.default.post(name: Notification.Name(rawValue: "callcloseinstallpanel"), object: nil)
    }
    
    @IBOutlet weak var lblstep1settings: UILabel!
    @IBOutlet weak var lblstep2safari: UILabel!
    @IBOutlet weak var lblstep3extensions: UILabel!
    @IBOutlet weak var lblstep4hometab: UILabel!
    @IBOutlet weak var lblstep5newtab: UILabel!
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
        startsmalldesign()
    }
    
    func startsmalldesign(){
        let boldAttribute = [NSAttributedString.Key.font: UIFont(name: "HelveticaNeue-Bold", size: 17.0)!]
        let regularAttribute = [NSAttributedString.Key.font: UIFont(name: "HelveticaNeue", size: 17.0)!]
        let spaceText = NSAttributedString(string: " ", attributes: regularAttribute)

        //step1
        let regularText = NSAttributedString(string: Stefanfunctions().i18string(text: "bannerstep1a"), attributes: regularAttribute)
        let boldText = NSAttributedString(string: Stefanfunctions().i18string(text: "bannerstep1b"), attributes: boldAttribute)
        let regularTextb = NSAttributedString(string: Stefanfunctions().i18string(text: "bannerstep1c"), attributes: regularAttribute)
        let newString1 = NSMutableAttributedString()
        newString1.append(regularText)
        newString1.append(spaceText)
        newString1.append(boldText)
        newString1.append(spaceText)
        newString1.append(regularTextb)
        lblstep1settings.attributedText = newString1
        
        //step2
        let regularTextstep2 = NSAttributedString(string: Stefanfunctions().i18string(text: "bannerstep2a"), attributes: regularAttribute)
        let boldTextstep2 = NSAttributedString(string: Stefanfunctions().i18string(text: "bannerstep2b"), attributes: boldAttribute)
        let newString2 = NSMutableAttributedString()
        newString2.append(regularTextstep2)
        newString2.append(spaceText)
        newString2.append(boldTextstep2)
        lblstep2safari.attributedText = newString2
        
        //step3
        let regularTextstep3 = NSAttributedString(string: Stefanfunctions().i18string(text: "bannerstep3a"), attributes: regularAttribute)
        let boldTextstep3 = NSAttributedString(string: Stefanfunctions().i18string(text: "bannerstep3b"), attributes: boldAttribute)
        let newString3 = NSMutableAttributedString()
        newString3.append(regularTextstep3)
        newString3.append(spaceText)
        newString3.append(boldTextstep3)
        lblstep3extensions.attributedText = newString3
        
        //step4
        let newString4 = NSMutableAttributedString()
        newString4.append(NSAttributedString(string: Stefanfunctions().i18string(text: "bannerstep4a"), attributes: regularAttribute))
        newString4.append(spaceText)
        newString4.append(NSAttributedString(string: Stefanfunctions().i18string(text: "bannerstep4b"), attributes: boldAttribute))
        lblstep4hometab.attributedText = newString4
        
        //step5
        let regularTextstep5 = NSAttributedString(string: Stefanfunctions().i18string(text: "bannerstep5a"), attributes: regularAttribute)
        let boldTextstep5b = NSAttributedString(string: Stefanfunctions().i18string(text: "bannerstep5b"), attributes: boldAttribute)
        let boldTextstep5c = NSAttributedString(string: Stefanfunctions().i18string(text: "bannerstep5c"), attributes: regularAttribute)
        let newString5 = NSMutableAttributedString()
        newString5.append(regularTextstep5)
        newString5.append(spaceText)
        newString5.append(boldTextstep5b)
        newString5.append(spaceText)
        newString5.append(boldTextstep5c)
        lblstep5newtab.attributedText = newString5
    }
}
