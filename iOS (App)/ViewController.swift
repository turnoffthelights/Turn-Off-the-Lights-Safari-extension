//
//  ViewController.swift
//  Shared (App)
//
//  Created by Stefan Van Damme on 10/06/2021.
//

import WebKit
import UIKit

class ViewController: UIViewController,BWWalkthroughViewControllerDelegate {

    private let imageView:UIImageView = {
        let imageView = UIImageView(frame:  CGRect(x:0 , y: 0, width: 128, height: 128))
        imageView.image = UIImage(named:"LargeIcon")
        return imageView
    }()
    
    override func viewDidAppear(_ animated: Bool) {
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(openwelcomeguide(_:)),
            name: NSNotification.Name(rawValue: "goguide"),
            object: nil)
        
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(closewelcomeguide(_:)),
            name: NSNotification.Name(rawValue: "closeguide"),
            object: nil)
        
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(startmainapp(_:)),
            name: NSNotification.Name(rawValue: "startmainapp"),
            object: nil)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.addSubview(imageView)
    }
    
    @objc func startmainapp(_ notification: Notification) {
        DispatchQueue.main.asyncAfter(deadline: .now()+0.3, execute: {
            let storyboard = UIStoryboard(name: "Main", bundle: nil)
            let vc = storyboard.instantiateViewController(withIdentifier: "mainapp")
            vc.modalTransitionStyle = .crossDissolve
            vc.modalPresentationStyle = .fullScreen
            self.present(vc, animated: true)
        })
    }
    
    var showedintro = false
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        if(showedintro == false){
            imageView.center = view.center
            // heart beat effect
            let popForce = 0.8
            let duration = 3
            let delay = 0.5
            let animation = CAKeyframeAnimation(keyPath: "transform.scale")
            animation.values = [0, 0.1 * popForce, 0.015 * popForce, 0.2 * popForce, 0]
            animation.keyTimes = [0, 0.25, 0.35, 0.55, 1]
            animation.timingFunction = CAMediaTimingFunction(name: CAMediaTimingFunctionName.easeInEaseOut)
            animation.duration = CFTimeInterval(duration/2)
            animation.isAdditive = true
            animation.repeatCount = Float(3)
            animation.beginTime = CACurrentMediaTime() + CFTimeInterval(delay/2)
            self.imageView.layer.add(animation, forKey: "pop")
            // remove zoom out effect
            DispatchQueue.main.asyncAfter(deadline: .now()+3.0) {
                self.animate()
            }
            showedintro = true
        }
    }
    
    private func animate(){
        UIView.animate(withDuration: 1, animations: {
            let size = self.view.frame.size.width * 3
            let diffX = size - self.view.frame.size.width
            let diffY = self.view.frame.size.height - size

            self.imageView.frame = CGRect(x: -(diffX/2), y: diffY/2, width: size, height: size)
        })

        UIView.animate(withDuration: 1.5, animations: {
            self.imageView.alpha = 0
        }, completion: { done in
            if done {
                DispatchQueue.main.asyncAfter(deadline: .now()+0.3, execute: {

                    //for debug
                    //self.showWalkthrough()

//                    let appdefaults = UserDefaults.standard
//                    if !appdefaults.bool(forKey: "walkthroughPresented") {
//                        self.showWalkthrough()
//                        appdefaults.set(true, forKey: "walkthroughPresented")
//                        appdefaults.synchronize()
//                    }else{
//                        // regular open the app
//                        self.showmainapp()
//                    }



                    //statuscheck
                    let storyboard = UIStoryboard(name: "Main", bundle: nil)
                    let vc = storyboard.instantiateViewController(withIdentifier: "statuscheck")
                    vc.modalTransitionStyle = .coverVertical
                    vc.modalPresentationStyle = .pageSheet
                    vc.isModalInPresentation = true
                    self.present(vc, animated: true)

                })


            }
        })
        
    }

    @IBAction func opensafaripref(_ sender: Any) {
//        UIApplication.shared.openURL(NSURL(string: "prefs:root=Safari")! as URL)
        guard let url = URL(string: "calshow://") else { return }
        UIApplication.shared.open(url)
    }
    
    
    @IBAction func showmainapp(){
        let storyboard = UIStoryboard(name: "Main", bundle: nil)
        let vc = storyboard.instantiateViewController(withIdentifier: "mainapp")
        vc.modalTransitionStyle = .crossDissolve
        vc.modalPresentationStyle = .fullScreen
        self.present(vc, animated: false)
    }
    
    //----- welcome guide
    @objc func openwelcomeguide(_ notification: Notification) {
        self.dismiss(animated: true, completion: {
            self.showWalkthrough()
        });//This is intended to dismiss the Info sceen.
    }
    
    @IBAction func showWalkthrough(){
        switch UIDevice.current.userInterfaceIdiom {
        case .phone:
            iphonewelcomeguide()
            //print("yes I am an iPhone");
            // It's an iPhone
        case .pad:
            iphonewelcomeguide()
            //print("yes I am an iPad");
            // It's an iPad
        case .unspecified:
            iphonewelcomeguide()
            //print("yes Apple secret device?");
            // Uh, oh! What could it be?
        default:
            iphonewelcomeguide()
            //print("yes I am an default iPod Touch");
        }
    }
    
    func iphonewelcomeguide(){
        // Get view controllers and build the walkthrough
        let stb = UIStoryboard(name: "Walkthrough", bundle: nil)
        let walkthrough = stb.instantiateViewController(withIdentifier: "walk") as! BWWalkthroughViewController
        let page_zero = stb.instantiateViewController(withIdentifier: "walk0")
        let page_one = stb.instantiateViewController(withIdentifier: "walk1")
        let page_two = stb.instantiateViewController(withIdentifier: "walk2")
        let page_three = stb.instantiateViewController(withIdentifier: "walk3")
        let page_four = stb.instantiateViewController(withIdentifier: "walk4")
        let page_five = stb.instantiateViewController(withIdentifier: "walk5")
        let page_six = stb.instantiateViewController(withIdentifier: "walk6")
        
        // Attach the pages to the master
        walkthrough.delegate = self
        walkthrough.addViewController(page_one)
        walkthrough.addViewController(page_two)
        walkthrough.addViewController(page_three)
        walkthrough.addViewController(page_four)
        walkthrough.addViewController(page_five)
        walkthrough.addViewController(page_six)
        walkthrough.addViewController(page_zero)

        
        let dispatchTime: DispatchTime = DispatchTime.now() + Double(Int64(0.1 * Double(NSEC_PER_SEC))) / Double(NSEC_PER_SEC)
        DispatchQueue.main.asyncAfter(deadline: dispatchTime, execute: { () -> Void in
            //this place to call segue or manually load the view.
            walkthrough.modalPresentationStyle = .overFullScreen
            walkthrough.modalTransitionStyle = .crossDissolve
            self.present(walkthrough, animated: true, completion: nil)
        })
    }
    
    // MARK: - Walkthrough delegate -
    
    func walkthroughPageDidChange(_ pageNumber: Int) {
        print("Current Page \(pageNumber)")
    }
      
    func walkthroughCloseButtonPressed() {
        self.dismiss(animated: true, completion: nil)
    }
    
    @objc func closewelcomeguide(_ notification: Notification) {
        //self.dismiss(animated: true, completion: nil)
        // close the guide, and go back the homeapp
        self.dismiss(animated: true, completion: {
            self.showmainapp()
        })
    }
    
}
