//
//  SidebarController.swift
//  Turn Off the Lights for Safari (iOS)
//
//  Created by Stefan Van Damme on 22/06/2021.
//

import UIKit

class SidebarController: UITableViewController {
    
    // MARK: - UIViewController
    override func viewDidLoad() {
        super.viewDidLoad()

        // home first tab is selected
        let indexPath = IndexPath(row: 0, section: 0);
        self.tableView.selectRow(at: indexPath, animated: false, scrollPosition: UITableView.ScrollPosition.none)
        self.tableView(self.tableView, didSelectRowAt: indexPath)
    }
    

    // remove the marge on top for each table
    override func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        return CGFloat.leastNonzeroMagnitude
    }
    
    // remove the marge on bottom for each table
    override func tableView(_ tableView: UITableView, heightForFooterInSection section: Int) -> CGFloat {
        return CGFloat.leastNonzeroMagnitude
    }
    
    let defaults = UserDefaults(suiteName: "group.stefanvd.turnoffthelightsforsafari")
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        if indexPath.section == 0 {
            if indexPath.row == 0 {
                defaults!.set(0, forKey: "currentopentab")
            }
        }
            
        if indexPath.section == 1 {
            if indexPath.row == 0 {
                defaults!.set(1, forKey: "currentopentab")
            }
        }
        
        if indexPath.section == 2 {
            if indexPath.row == 0 {
                defaults!.set(2, forKey: "currentopentab")
            }
        }
        
        if indexPath.section == 3 {
            if indexPath.row == 0 {
                defaults!.set(3, forKey: "currentopentab")
            }
        }
        defaults!.synchronize()
    }
    
}
