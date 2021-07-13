//
//  ViewController.swift
//  Shared (App)
//
//  Created by Stefan Van Damme on 10/06/2021.
//

import WebKit
import UIKit

class ViewController: UIViewController{

    private let imageView:UIImageView = {
        let imageView = UIImageView(frame:  CGRect(x:0 , y: 0, width: 128, height: 128))
        imageView.image = UIImage(named:"LargeIcon")
        return imageView
    }()
    
    override func viewDidAppear(_ animated: Bool) {
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
        let connected = UserDefaults.standard.bool(forKey: "connected")

        DispatchQueue.main.asyncAfter(deadline: .now()+0.3, execute: {
            let storyboard = UIStoryboard(name: "Main", bundle: nil)
            let vc = storyboard.instantiateViewController(withIdentifier: "mainapp")
            vc.modalTransitionStyle = .crossDissolve
            vc.modalPresentationStyle = .fullScreen
            self.present(vc, animated: true)
            DispatchQueue.main.asyncAfter(deadline: .now()+0.3, execute: {
                if(connected == false){
                    NotificationCenter.default.post(name: Notification.Name(rawValue: "calloffline"), object: nil)
                }
            })
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

                    let appdefaults = UserDefaults.standard
                    if !appdefaults.bool(forKey: "walkthroughPresented") {
                        //statuscheck
                        let storyboard = UIStoryboard(name: "Main", bundle: nil)
                        let vc = storyboard.instantiateViewController(withIdentifier: "statuscheck")
                        vc.modalTransitionStyle = .coverVertical
                        vc.modalPresentationStyle = .pageSheet
                        vc.isModalInPresentation = true
                        self.present(vc, animated: true)
                        
                        appdefaults.set(true, forKey: "walkthroughPresented")
                        appdefaults.synchronize()
                    }else{
                        // regular open the app
                        self.showmainapp()
                    }

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
    
}
