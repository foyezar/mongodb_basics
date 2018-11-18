1. Replacing update() with updateOne(), updateMany(), or replaceOne()
2. Replacing remove() with deleteOne() or deleteMany()
3. Setting mongoose.set('useFindAndModify', false);
4. Setting mongoose.set('useCreateIndex', true);
5. Setting mongoose.set('useNewUrlParser', true);

6. Re: findOneAndUpdate() and findAndModify() deprecation, use mongoose.set('useFindAndModify', false);
7. Re: remove() deprecation, switch to using deleteOne() or deleteMany() depending on if you only want to delete one doc
8. Re: update() deprecation, replace with updateMany()