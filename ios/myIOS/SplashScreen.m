//
//  SplashScreen.m
//  misMobile
//
//  Created by xin jin on 2018/3/18.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "SplashScreen.h"

static bool waiting = true;

@implementation SplashScreen

- (dispatch_queue_t)methodQueue{
  return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

+ (void)waitForLoadingJSBundle {
  while (waiting) {
    NSDate* later = [NSDate dateWithTimeIntervalSinceNow:0.1];
    [[NSRunLoop mainRunLoop] runUntilDate:later];
  }
}

RCT_EXPORT_METHOD(hide) {
  dispatch_async(dispatch_get_main_queue(),
                 ^{
                   waiting = false;
                 });
}

@end
