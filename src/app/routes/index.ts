import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { UserRoutes } from '../modules/user/user.route';
import { PostRoutes } from '../modules/post/post.route';
import { CommentRoutes } from '../modules/comment/comment.route';
import { PaymentRoutes } from '../modules/payment/payment.route';
import { NotificationRoutes } from '../modules/notification/notification.route';
import { AnalyticsRoutes } from '../modules/analytics/analytics.route';
import { activityLogRoute } from '../modules/activitylog/activitylog.route';


const router = Router();

const moduleRoutes = [
  {
    path:'/auth',
    route : AuthRoutes,
  },
  {
    path:'/users',
    route : UserRoutes,
  },
  {
    path: '/posts',
    route: PostRoutes,
  },
  {
    path: '/comments',
    route: CommentRoutes,
  },
  {
    path: '/payment',
    route: PaymentRoutes,
  },
  {
    path: '/notifications',
    route: NotificationRoutes,
  },
  {
    path: '/analytics',
    route: AnalyticsRoutes,
  },
  {
    path: '/activity-logs',
    route: activityLogRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
