//
//  BWWalkthroughViewController.swift
//  Turn Off the Lights
//
//  Created by Stefan Van Damme on 02/07/15.
//  Copyright (c) 2015 Stefan vd. All rights reserved.
//

import Foundation
import UIKit
import MessageUI
import AVKit
import AVFoundation

extension UIImage {

/**
 - Parameter cornerRadius: The radius to round the image to.
 - Returns: A new image with the specified `cornerRadius`.
 **/
func roundedImage(cornerRadius: CGFloat) -> UIImage? {
    let size = self.size

    // create image layer
    let imageLayer = CALayer()
    imageLayer.frame = CGRect(x: 0, y: 0, width: size.width, height: size.height)
    imageLayer.contents = self.cgImage

    // set radius
    imageLayer.masksToBounds = true
    imageLayer.cornerRadius = cornerRadius

    // get rounded image
    UIGraphicsBeginImageContext(size)
    if let context = UIGraphicsGetCurrentContext() {
        imageLayer.render(in: context)
    }
    let roundImage = UIGraphicsGetImageFromCurrentImageContext()
    UIGraphicsEndImageContext()

    return roundImage
}
}


// MARK: - Protocols -

/**
Walkthrough Delegate:
This delegate performs basic operations such as dismissing the Walkthrough or call whatever action on page change.
Probably the Walkthrough is presented by this delegate.
**/

@objc protocol BWWalkthroughViewControllerDelegate{
    
    @objc optional func walkthroughCloseButtonPressed()              // If the skipRequest(sender:) action is connected to a button, this function is called when that button is pressed.
    @objc optional func walkthroughPageDidChange(_ pageNumber:Int)     // Called when current page changes
}

@objc class BWWalkthroughViewController: UIViewController, UIScrollViewDelegate,MFMailComposeViewControllerDelegate{
    // MARK: - Public properties -
    var delegate:BWWalkthroughViewControllerDelegate?
    
    // If you need a page control, next or prev buttons add them via IB and connect them with these Outlets
    @IBOutlet var pageControl:UIPageControl?
    @IBOutlet weak var closeButton: UIButton!
    
    
    @IBOutlet weak var imagestep2: UIImageView?
    @IBOutlet weak var imagestep3: UIImageView?
    @IBOutlet weak var imagestep4: UIImageView?
    
    var currentPage:Int{    // The index of the current page (readonly)
        get{
            let page = Int((scrollview.contentOffset.x / view.bounds.size.width))
            return page
        }
    }
    
    // MARK: - Private properties -
    fileprivate let scrollview:UIScrollView!
    fileprivate var controllers:[UIViewController]!
    fileprivate var lastViewConstraint:NSArray?
    
     // MARK: - Overrides -
    required init?(coder aDecoder: NSCoder) {
        // Setup the scrollview
        scrollview = UIScrollView()
        scrollview.showsHorizontalScrollIndicator = false
        scrollview.showsVerticalScrollIndicator = false
        scrollview.isPagingEnabled = true
        
        // Controllers as empty array
        controllers = Array()
        
        super.init(coder: aDecoder)
    }
    
    override init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?){
        scrollview = UIScrollView()
        controllers = Array()
        super.init(nibName: nibNameOrNil, bundle: nibBundleOrNil)
    }
    
    @IBOutlet weak var titledes: UILabel!
    @IBOutlet weak var titlemain: UILabel?
    override func viewDidLoad() {
        super.viewDidLoad()
        
        #if targetEnvironment(macCatalyst)
        // new width
        // 1px -> is marge border possible in macOS window
        self.view.frame = CGRect(x: 0, y: 0, width: (414 - 1), height: self.view.frame.height)
        #endif
        
        // Initialize UIScrollView
        scrollview.delegate = self
        scrollview.translatesAutoresizingMaskIntoConstraints = false
        
        view.insertSubview(scrollview, at: 0) //scrollview is inserted as first view of the hierarchy
        
        // Set scrollview related constraints
        
        view.addConstraints(NSLayoutConstraint.constraints(withVisualFormat: "V:|-0-[scrollview]-0-|", options:[], metrics: nil, views: ["scrollview":scrollview as Any]))
        view.addConstraints(NSLayoutConstraint.constraints(withVisualFormat: "H:|-0-[scrollview]-0-|", options:[], metrics: nil, views: ["scrollview":scrollview as Any]))
    
    }
    
    // prevent scroll vertical
    func scrollViewDidScroll(_ scrollView: UIScrollView) {
       if scrollView.contentOffset.y > 0 || scrollView.contentOffset.y < 0 {
          scrollView.contentOffset.y = 0
       }
    }
    
    @IBOutlet weak var viewbox: UIView!
    
    @IBOutlet weak var widgeta: UIView!
    @IBOutlet weak var widgetb: UIView!
    @IBOutlet weak var widgetc: UIView!
    @IBOutlet weak var widgetd: UIView!
    @IBOutlet weak var widgete: UIView!
    @IBOutlet weak var widgetf: UIView!
    @IBOutlet weak var widgetg: UIView!
    
    @IBOutlet weak var widgetx: UIView!
    @IBOutlet weak var widgety: UIView!
    @IBOutlet weak var widgetz: UIView!
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated);
        
        updateUI()
        
        pageControl?.numberOfPages = controllers.count
        pageControl?.currentPage = 0
        
        // swift:
        titledes?.alpha = 0
        UIView.animate(withDuration: 1.0, delay: 2.0, animations: {
            self.titledes?.alpha = 1.0
        })
        
        titlemain?.alpha = 0
        UIView.animate(withDuration: 1.0, delay: 3.0, animations: {
            self.titlemain?.alpha = 1.0
        })
        
        
        UIView.animate(withDuration: 60.0, delay: 0, options: [.curveLinear, .repeat, .autoreverse], animations: {

            self.viewbox?.frame = CGRect(x: 115, y: 142.5, width: 100, height: 100)

        }, completion: nil)
        
        
        //---
        
        closeButton?.layer.cornerRadius = 15
        closeButton?.layer.maskedCorners = [.layerMaxXMaxYCorner,.layerMaxXMinYCorner,.layerMinXMaxYCorner,.layerMinXMinYCorner]
        closeButton?.clipsToBounds = true
    }
    
    // If you want to implement a "skip" option
    // connect a button to this IBAction and implement the delegate with the skipWalkthrough

    @IBAction func close(_ sender: AnyObject){
        NotificationCenter.default.post(name: Notification.Name(rawValue: "closeguide"), object: nil)
//        delegate?.walkthroughCloseButtonPressed?()
    }
    
    @IBAction func keyPressed(_ sender: UIButton)
    {
        //Reduces the sender's (the button that got pressed) opacity to half.
        sender.alpha = 0.5
        //Code should execute after 0.2 second delay.
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.2) {
        //Bring's sender's opacity back up to fully opaque.
        sender.alpha = 1.0
        }
    }
    
    @IBAction func changepagecontrol(_ sender: Any) {
        let page: Int? = (sender as AnyObject).currentPage
        var frame: CGRect = scrollview.frame
        frame.origin.x = frame.size.width * CGFloat(page ?? 0)
        frame.origin.y = 0
        scrollview.scrollRectToVisible(frame, animated: true)
    }
    
    
    private var player: AVQueuePlayer!
    private var playerLayer: AVPlayerLayer!
    private var playerItem: AVPlayerItem!
    private var playerLooper: AVPlayerLooper!
    
    @IBOutlet weak var jingglevideo: UIView!
    
    /**
    addViewController
    Add a new page to the walkthrough.
    To have information about the current position of the page in the walkthrough add a UIVIewController which implements BWWalkthroughPage    
    */
    func addViewController(_ vc:UIViewController)->Void{
        
        controllers.append(vc)
        
        // Setup the viewController view
        
        vc.view.translatesAutoresizingMaskIntoConstraints = false
        scrollview.addSubview(vc.view)
        
        // Constraints
        
        let metricDict = ["w":vc.view.bounds.size.width,"h":vc.view.bounds.size.height]
        
        // - Generic cnst
        
        vc.view.addConstraints(NSLayoutConstraint.constraints(withVisualFormat: "V:[view(h)]", options:[], metrics: metricDict, views: ["view":vc.view as Any]))
        vc.view.addConstraints(NSLayoutConstraint.constraints(withVisualFormat: "H:[view(w)]", options:[], metrics: metricDict, views: ["view":vc.view as Any]))
        scrollview.addConstraints(NSLayoutConstraint.constraints(withVisualFormat: "V:|-0-[view]|", options:[], metrics: nil, views: ["view":vc.view as Any]))
        
        // cnst for position: 1st element
        
        if controllers.count == 1{
            scrollview.addConstraints(NSLayoutConstraint.constraints(withVisualFormat: "H:|-0-[view]", options:[], metrics: nil, views: ["view":vc.view as Any]))
            
            // cnst for position: other elements
            
        }else{
            
            let previousVC = controllers[controllers.count-2]
            let previousView = previousVC.view;
            
            scrollview.addConstraints(NSLayoutConstraint.constraints(withVisualFormat: "H:[previousView]-0-[view]", options:[], metrics: nil, views: ["previousView":previousView as Any,"view":vc.view as Any]))
            
            if let cst = lastViewConstraint{
                scrollview.removeConstraints(cst as! [NSLayoutConstraint])
            }
            lastViewConstraint = NSLayoutConstraint.constraints(withVisualFormat: "H:[view]-0-|", options:[], metrics: nil, views: ["view":vc.view as Any]) as NSArray?
            scrollview.addConstraints(lastViewConstraint! as! [NSLayoutConstraint])
        }
    }

    /** 
    Update the UI to reflect the current walkthrough situation 
    **/
    
    fileprivate func updateUI(){
        // Get the current page
        pageControl?.currentPage = currentPage
        
        // Notify delegate about the new page
        delegate?.walkthroughPageDidChange?(currentPage)
        
        // hide the close (= Get Started) button
//        if(currentPage == 6){
//            closeButton?.isHidden = false;
//        } else {
//            closeButton?.isHidden = true;
//        }
    }

    func scrollViewDidEndDecelerating(_ scrollView: UIScrollView) {
        updateUI()
    }
    
    func scrollViewDidEndScrollingAnimation(_ scrollView: UIScrollView) {
        updateUI()
    }
    
    override var shouldAutorotate : Bool {
        return true
    }
    
    override var supportedInterfaceOrientations : UIInterfaceOrientationMask {
        return [UIInterfaceOrientationMask.portrait,UIInterfaceOrientationMask.portraitUpsideDown]
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    /* WIP */
    override func willTransition(to newCollection: UITraitCollection, with coordinator: UIViewControllerTransitionCoordinator) {
        //print("CHANGE")
    }
    
    override func viewWillTransition(to size: CGSize, with coordinator: UIViewControllerTransitionCoordinator) {
        //print("SIZE")
    }
    
    
}

// Helper function inserted by Swift 4.2 migrator.
fileprivate func convertToUIApplicationOpenExternalURLOptionsKeyDictionary(_ input: [String: Any]) -> [UIApplication.OpenExternalURLOptionsKey: Any] {
	return Dictionary(uniqueKeysWithValues: input.map { key, value in (UIApplication.OpenExternalURLOptionsKey(rawValue: key), value)})
}
