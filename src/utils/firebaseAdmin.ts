import * as admin from 'firebase-admin'

const raw = process.env.FIREBASE_ADMIN_KEY
if (!raw) throw new Error('FIREBASE_ADMIN_KEY env variable is missing')

const serviceAccount = JSON.parse(raw) as admin.ServiceAccount

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })
}

export const adminDb = admin.firestore()
