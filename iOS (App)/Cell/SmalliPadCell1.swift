//
//  SmallCollectionViewCell1.swift
//  MyApp
//
//  Created by innovation on 2022-07-27.
//

import UIKit

class SmalliPadCell1: UICollectionViewCell {
    
    func i18string(text: String) -> String{
        return String.localizedStringWithFormat(NSLocalizedString(text, comment: ""), "")
    }
    
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
        
        let boldAttribute = [
          NSAttributedString.Key.font: UIFont(name: "HelveticaNeue-Bold", size: 17.0)!
        ]
        let regularAttribute = [
          NSAttributedString.Key.font: UIFont(name: "HelveticaNeue", size: 17.0)!
        ]
        let spaceText = NSAttributedString(string: " ", attributes: regularAttribute)

        //step1
        let part1a = i18string(text: "bannerstep1a")
        let part1b = i18string(text: "bannerstep1b")
        let part1c = i18string(text: "bannerstep1c")

        let regularText = NSAttributedString(string: part1a, attributes: regularAttribute)
        let boldText = NSAttributedString(string: part1b, attributes: boldAttribute)
        let regularTextb = NSAttributedString(string: part1c, attributes: regularAttribute)
        let newString1 = NSMutableAttributedString()
        newString1.append(regularText)
        newString1.append(spaceText)
        newString1.append(boldText)
        newString1.append(spaceText)
        newString1.append(regularTextb)
        lblstep1settings.attributedText = newString1
        
        //step2
        let part2a = i18string(text: "bannerstep2a")
        let part2b = i18string(text: "bannerstep2b")
        
        let regularTextstep2 = NSAttributedString(string: part2a, attributes: regularAttribute)
        let boldTextstep2 = NSAttributedString(string: part2b, attributes: boldAttribute)
        let newString2 = NSMutableAttributedString()
        newString2.append(regularTextstep2)
        newString2.append(spaceText)
        newString2.append(boldTextstep2)
        lblstep2safari.attributedText = newString2
        
        //step3
        let part3a = i18string(text: "bannerstep3a")
        let part3b = i18string(text: "bannerstep3b")
        
        let regularTextstep3 = NSAttributedString(string: part3a, attributes: regularAttribute)
        let boldTextstep3 = NSAttributedString(string: part3b, attributes: boldAttribute)
        let newString3 = NSMutableAttributedString()
        newString3.append(regularTextstep3)
        newString3.append(spaceText)
        newString3.append(boldTextstep3)
        lblstep3extensions.attributedText = newString3
        
        //step4
        let part4a = i18string(text: "bannerstep4a")
        let part4b = i18string(text: "bannerstep4b")
        
        let regularTextstep4 = NSAttributedString(string: part4a, attributes: regularAttribute)
        let boldTextstep4 = NSAttributedString(string: part4b, attributes: boldAttribute)
        let newString4 = NSMutableAttributedString()
        newString4.append(regularTextstep4)
        newString4.append(spaceText)
        newString4.append(boldTextstep4)
        lblstep4hometab.attributedText = newString4
        
        //step5
        let part5a = i18string(text: "bannerstep5a")
        let part5b = i18string(text: "bannerstep5b")
        let part5c = i18string(text: "bannerstep5c")
        
        let regularTextstep5 = NSAttributedString(string: part5a, attributes: regularAttribute)
        let boldTextstep5b = NSAttributedString(string: part5b, attributes: boldAttribute)
        let boldTextstep5c = NSAttributedString(string: part5c, attributes: regularAttribute)
        let newString5 = NSMutableAttributedString()
        newString5.append(regularTextstep5)
        newString5.append(spaceText)
        newString5.append(boldTextstep5b)
        newString5.append(spaceText)
        newString5.append(boldTextstep5c)
        lblstep5newtab.attributedText = newString5
    }

}
