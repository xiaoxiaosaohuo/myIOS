//
//  SplashScreen.h
//  misMobile
//
//  Created by xin jin on 2018/3/18.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface SplashScreen : NSObject<RCTBridgeModule>

+ (void)waitForLoadingJSBundle;

@end
