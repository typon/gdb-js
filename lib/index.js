module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports._parseMI = exports.Variable = exports.Frame = exports.Breakpoint = exports.ThreadGroup = exports.Thread = exports.GDB = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _debug = __webpack_require__(1);
	
	var _debug2 = _interopRequireDefault(_debug);
	
	var _events = __webpack_require__(2);
	
	var _highland = __webpack_require__(3);
	
	var _highland2 = _interopRequireDefault(_highland);
	
	var _error = __webpack_require__(4);
	
	var _error2 = _interopRequireDefault(_error);
	
	var _thread = __webpack_require__(5);
	
	var _thread2 = _interopRequireDefault(_thread);
	
	var _group = __webpack_require__(6);
	
	var _group2 = _interopRequireDefault(_group);
	
	var _breakpoint = __webpack_require__(7);
	
	var _breakpoint2 = _interopRequireDefault(_breakpoint);
	
	var _frame = __webpack_require__(8);
	
	var _frame2 = _interopRequireDefault(_frame);
	
	var _variable = __webpack_require__(9);
	
	var _variable2 = _interopRequireDefault(_variable);
	
	var _gdbmi = __webpack_require__(10);
	
	var _base = __webpack_require__(11);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _exec2 = __webpack_require__(12);
	
	var _exec3 = _interopRequireDefault(_exec2);
	
	var _context18 = __webpack_require__(13);
	
	var _context19 = _interopRequireDefault(_context18);
	
	var _sources = __webpack_require__(14);
	
	var _sources2 = _interopRequireDefault(_sources);
	
	var _group3 = __webpack_require__(15);
	
	var _group4 = _interopRequireDefault(_group3);
	
	var _thread3 = __webpack_require__(16);
	
	var _thread4 = _interopRequireDefault(_thread3);
	
	var _event = __webpack_require__(17);
	
	var _event2 = _interopRequireDefault(_event);
	
	var _objfile = __webpack_require__(18);
	
	var _objfile2 = _interopRequireDefault(_objfile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Custom error class.
	
	// Thread object class.
	
	// Thread group object class.
	
	// Breakpoint object class.
	
	// Frame object class.
	
	// Variable object class.
	
	// Parser for the GDB/MI output syntax.
	
	// Base class for custom GDB commands.
	
	// Command that executes CLI commands and returns them as a string.
	
	// Command that lists all symbols (e.g. locals, globals) in the current context.
	
	// Command that searches source files using regex.
	
	// Command that returns the current thread group.
	
	// Command that returns the current thread.
	
	// Base handler for custom GDB events.
	
	// Event that emits when new objfile is added.
	
	
	// Debug logging.
	var debugOutput = (0, _debug2.default)('gdb-js:output');
	var debugCLIInput = (0, _debug2.default)('gdb-js:input:cli');
	var debugMIInput = (0, _debug2.default)('gdb-js:input:mi');
	var debugCLIResluts = (0, _debug2.default)('gdb-js:results:cli');
	var debugMIResluts = (0, _debug2.default)('gdb-js:results:mi');
	var debugEvents = (0, _debug2.default)('gdb-js:events');
	
	/**
	 * Converts string to integer.
	 *
	 * @param {string} str The input string.
	 * @returns {number} The output integer.
	 *
	 * @ignore
	 */
	function toInt(str) {
	  return parseInt(str, 10);
	}
	
	/**
	 * Escapes symbols in python code so that we can send it using inline mode.
	 *
	 * @param {string} script The Python script.
	 * @returns {string} The escaped python script.
	 *
	 * @ignore
	 */
	function escape(script) {
	  return script.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/"/g, '\\"');
	}
	
	/**
	 * Task to execute.
	 *
	 * @name Task
	 * @function
	 * @returns {Promise<any, GDBError>|any} Whatever.
	 *
	 * @ignore
	 */
	
	/**
	 * Class representing a GDB abstraction.
	 *
	 * @extends EventEmitter
	 * @public
	 */
	
	var GDB = function (_EventEmitter) {
	  _inherits(GDB, _EventEmitter);
	
	  /**
	   * Create a GDB wrapper.
	   *
	   * @param {object} childProcess A Node.js child process or just an
	   *   object with `stdin`, `stdout`, `stderr` properties that are Node.js streams.
	   *   If you're using GDB all-stop mode, then it should also have implementation of
	   *   `kill` method that is able to send signals (such as `SIGINT`).
	   */
	  function GDB(childProcess) {
	    _classCallCheck(this, GDB);
	
	    var _this = _possibleConstructorReturn(this, (GDB.__proto__ || Object.getPrototypeOf(GDB)).call(this));
	
	    _this._process = childProcess;
	    /**
	     * The main queue of commands sent to GDB.
	     *
	     * @ignore
	     */
	    _this._queue = (0, _highland2.default)();
	    /**
	     * The mutex to make simultaneous execution of public methods impossible.
	     *
	     * @ignore
	     */
	    _this._lock = Promise.resolve();
	
	    var stream = (0, _highland2.default)(_this._process.stdout).map(function (chunk) {
	      return chunk.toString();
	    }).splitBy(/\r\n|\n/).tap(debugOutput).map(_gdbmi.parse);
	
	    // Basically, we're just branching our stream to the messages that should
	    // be emitted and the results which we then zip with the sent commands.
	    // Results can be either result records or framed console records.
	
	    var results = stream.observe().filter(function (msg) {
	      return msg.type === 'result';
	    }).zip(_this._queue).map(function (msg) {
	      return Object.assign({}, msg[0], msg[1]);
	    });
	
	    results.fork().filter(function (msg) {
	      return msg.state === 'error';
	    }).each(function (msg) {
	      var data = msg.data,
	          cmd = msg.cmd,
	          reject = msg.reject;
	
	      var text = 'Error while executing "' + cmd + '". ' + data.msg;
	      var err = new _error2.default(cmd, text, toInt(data.code));
	      reject(err);
	    });
	
	    var success = results.fork().filter(function (msg) {
	      return msg.state !== 'error';
	    });
	
	    success.fork().filter(function (msg) {
	      return msg.interpreter === 'mi';
	    }).tap(function (msg) {
	      return debugMIResluts(msg.data);
	    }).each(function (msg) {
	      msg.resolve(msg.data);
	    });
	
	    var commands = stream.observe().filter(function (msg) {
	      return msg.type === 'console';
	    })
	    // It's not possible for a command message to be split into multiple
	    // console records, so we can safely just regex every record.
	    .map(function (msg) {
	      return (/<gdbjs:cmd:[a-z-]+ (.*?) [a-z-]+:cmd:gdbjs>/.exec(msg.data)
	      );
	    }).compact().map(function (msg) {
	      return JSON.parse(msg[1]);
	    }).tap(debugCLIResluts);
	
	    success.observe().filter(function (msg) {
	      return msg.interpreter === 'cli';
	    }).zip(commands).each(function (msg) {
	      msg[0].resolve(msg[1]);
	    });
	
	    // Emitting raw async records.
	
	    /**
	     * Raw output of GDB/MI notify records.
	     * Contains supplementary information that the client should handle.
	     * Please, see
	     * {@link https://sourceware.org/gdb/onlinedocs/gdb/GDB_002fMI-Async-Records.html|the official GDB/MI documentation}.
	     *
	     * @event GDB#notify
	     * @type {object}
	     * @property {string} state The class of the notify record (e.g. `thread-created`).
	     * @property {object} data JSON representation of GDB/MI message.
	     */
	
	    /**
	     * Raw output of GDB/MI status records.
	     * Contains on-going status information about the progress of a slow operation.
	     *
	     * @event GDB#status
	     * @type {object}
	     * @property {string} state The class of the status record.
	     * @property {object} data JSON representation of GDB/MI message.
	     */
	
	    /**
	     * Raw output of GDB/MI exec records.
	     * Contains asynchronous state change on the target.
	     *
	     * @event GDB#exec
	     * @type {object}
	     * @property {string} state The class of the exec record (e.g. `stopped`).
	     * @property {object} data JSON representation of GDB/MI message.
	     */
	    stream.fork().filter(function (msg) {
	      return ['exec', 'notify', 'status'].includes(msg.type);
	    }).each(function (msg) {
	      _this.emit(msg.type, { state: msg.state, data: msg.data });
	    });
	
	    // Exposing streams of raw stream records.
	
	    /**
	     * Raw output of GDB/MI console records.
	     *
	     * @type {Readable<string>}
	     */
	    _this.consoleStream = stream.observe().filter(function (msg) {
	      return msg.type === 'console';
	    }).map(function (msg) {
	      return msg.data.replace(/<gdbjs:.*?:gdbjs>/g, '');
	    });
	
	    /**
	     * Raw output of GDB/MI log records.
	     * The log stream contains debugging messages being produced by gdb's internals.
	     *
	     * @type {Readable<string>}
	     */
	    _this.logStream = stream.observe().filter(function (msg) {
	      return msg.type === 'log';
	    }).map(function (msg) {
	      return msg.data;
	    });
	
	    /**
	     * Raw output of GDB/MI target records.
	     * The target output stream contains any textual output from the running target.
	     * Please, note that it's currently impossible
	     * to distinguish the target and the MI output correctly due to a bug in GDB/MI. Thus,
	     * it's recommended to use `--tty` option with your GDB process.
	     *
	     * @type {Readable<string>}
	     */
	    _this.targetStream = stream.observe().filter(function (msg) {
	      return msg.type === 'target';
	    }).map(function (msg) {
	      return msg.data;
	    });
	
	    // Emitting defined events.
	
	    /**
	     * This event is emitted when target or one of its threads has stopped due to some reason.
	     * Note that `thread` property indicates the thread that caused the stop. In an all-stop mode
	     * all threads will be stopped.
	     *
	     * @event GDB#stopped
	     * @type {object}
	     * @property {string} reason The reason of why target has stopped (see
	     *   {@link https://sourceware.org/gdb/onlinedocs/gdb/GDB_002fMI-Async-Records.html|the official GDB/MI documentation}) for more information.
	     * @property {Thread} [thread] The thread that caused the stop.
	     * @property {Breakpoint} [breakpoint] Breakpoint is provided if the reason is
	     *   `breakpoint-hit`.
	     */
	    stream.fork().filter(function (msg) {
	      return msg.type === 'exec' && msg.state === 'stopped';
	    }).each(function (msg) {
	      var data = msg.data;
	
	      var thread = data['thread-id'];
	      var event = { reason: data.reason };
	      if (thread) {
	        event.thread = new _thread2.default(toInt(thread), {
	          frame: new _frame2.default({
	            file: data.frame.fullname,
	            line: toInt(data.frame.line)
	          }),
	          status: 'stopped'
	        });
	      }
	      if (data.reason === 'breakpoint-hit') {
	        event.breakpoint = new _breakpoint2.default(toInt(data.bkptno));
	      }
	
	      _this.emit('stopped', event);
	    });
	
	    /**
	     * This event is emitted when target changes state to running.
	     *
	     * @event GDB#running
	     * @type {object}
	     * @property {Thread} [thread] The thread that has changed its state.
	     *   If it's not provided, all threads have changed their states.
	     */
	    stream.fork().filter(function (msg) {
	      return msg.type === 'exec' && msg.state === 'running';
	    }).each(function (msg) {
	      var data = msg.data;
	
	      var thread = data['thread-id'];
	      var event = {};
	      if (thread !== 'all') {
	        event.thread = new _thread2.default(toInt(thread), { status: 'running' });
	      }
	
	      _this.emit('running', event);
	    });
	
	    /**
	     * This event is emitted when new thread spawns.
	     *
	     * @event GDB#thread-created
	     * @type {Thread}
	     */
	
	    /**
	     * This event is emitted when thread exits.
	     *
	     * @event GDB#thread-exited
	     * @type {Thread}
	     */
	    stream.fork().filter(function (msg) {
	      return msg.type === 'notify' && ['thread-created', 'thread-exited'].includes(msg.state);
	    }).each(function (msg) {
	      var state = msg.state,
	          data = msg.data;
	
	
	      _this.emit(state, new _thread2.default(toInt(data.id), {
	        // GDB/MI stores group id as `i<id>` string.
	        group: new _group2.default(toInt(data['group-id'].slice(1)))
	      }));
	    });
	
	    /**
	     * This event is emitted when thread group starts.
	     *
	     * @event GDB#thread-group-started
	     * @type {ThreadGroup}
	     */
	
	    /**
	     * This event is emitted when thread group exits.
	     *
	     * @event GDB#thread-group-exited
	     * @type {ThreadGroup}
	     */
	    stream.fork().filter(function (msg) {
	      return msg.type === 'notify' && ['thread-group-started', 'thread-group-exited'].includes(msg.state);
	    }).each(function (msg) {
	      var state = msg.state,
	          data = msg.data;
	
	
	      _this.emit(state, new _group2.default(toInt(data.id.slice(1)), {
	        pid: data.pid ? toInt(data.pid) : null
	      }));
	    });
	
	    /**
	     * This event is emitted with the full path to executable
	     * when the new objfile is added.
	     *
	     * @event GDB#new-objfile
	     * @type {string}
	     */
	    stream.fork().filter(function (msg) {
	      return msg.type === 'console';
	    }).flatMap(function (msg) {
	      return msg.data.match(/<gdbjs:event:.*?:event:gdbjs>/g) || [];
	    }).map(function (msg) {
	      return (/<gdbjs:event:([a-z-]+) (.*?) [a-z-]+:event:gdbjs>/g.exec(msg)
	      );
	    }).tap(function (msg) {
	      return debugEvents(msg[1], msg[2]);
	    }).each(function (msg) {
	      _this.emit(msg[1], msg[2]);
	    });
	    return _this;
	  }
	
	  // Public methods.
	  // Note, that it's really important to not call public methods
	  // inside other public methods, because it may cause blocking!
	
	  /**
	   * Get the child process object.
	   *
	   * @type {object}
	   * @readonly
	   */
	
	
	  _createClass(GDB, [{
	    key: 'init',
	
	
	    /**
	     * Extend GDB CLI interface with some useful commands that are
	     * necessary for executing some methods of this GDB wrapper
	     * (e.g. {@link GDB#context|context}, {@link GDB#execCLI|execCLI}).
	     * It also enables custom actions (like {@link GDB#new-objfile|`new-objfile` event}).
	     *
	     * @returns {Promise<undefined, GDBError>} A promise that resolves/rejects
	     *   after completion of a GDB command.
	     */
	    value: function init() {
	      var _this2 = this;
	
	      return this._sync(function _callee() {
	        var scripts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, s;
	
	        return regeneratorRuntime.async(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                scripts = [_base2.default, _event2.default, _exec3.default, _context19.default, _sources2.default, _group4.default, _thread4.default, _objfile2.default];
	                _iteratorNormalCompletion = true;
	                _didIteratorError = false;
	                _iteratorError = undefined;
	                _context.prev = 4;
	                _iterator = scripts[Symbol.iterator]();
	
	              case 6:
	                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	                  _context.next = 13;
	                  break;
	                }
	
	                s = _step.value;
	                _context.next = 10;
	                return regeneratorRuntime.awrap(_this2._execMI('-interpreter-exec console "python\\n' + escape(s) + '"'));
	
	              case 10:
	                _iteratorNormalCompletion = true;
	                _context.next = 6;
	                break;
	
	              case 13:
	                _context.next = 19;
	                break;
	
	              case 15:
	                _context.prev = 15;
	                _context.t0 = _context['catch'](4);
	                _didIteratorError = true;
	                _iteratorError = _context.t0;
	
	              case 19:
	                _context.prev = 19;
	                _context.prev = 20;
	
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                  _iterator.return();
	                }
	
	              case 22:
	                _context.prev = 22;
	
	                if (!_didIteratorError) {
	                  _context.next = 25;
	                  break;
	                }
	
	                throw _iteratorError;
	
	              case 25:
	                return _context.finish(22);
	
	              case 26:
	                return _context.finish(19);
	
	              case 27:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, null, _this2, [[4, 15, 19, 27], [20,, 22, 26]]);
	      });
	    }
	
	    /**
	     * Set internal GDB variable.
	     *
	     * @param {string} param The name of a GDB variable.
	     * @param {string} value The value of a GDB variable.
	     *
	     * @returns {Promise<undefined, GDBError>} A promise that resolves/rejects
	     *   after completion of a GDB command.
	     */
	
	  }, {
	    key: 'set',
	    value: function set(param, value) {
	      var _this3 = this;
	
	      return this._sync(function () {
	        return _this3._set(param, value);
	      });
	    }
	
	    /**
	     * Enable the `detach-on-fork` option which will automatically
	     * attach GDB to any of forked processes. Please, note that it makes
	     * sense only for systems that support `fork` and `vfork` calls.
	     * It won't work for Windows, for example.
	     *
	     * @returns {Promise<undefined, GDBError>} A promise that resolves/rejects
	     *   after completion of a GDB command.
	     */
	
	  }, {
	    key: 'attachOnFork',
	    value: function attachOnFork() {
	      var _this4 = this;
	
	      return this._sync(function () {
	        return _this4._set('detach-on-fork', 'off');
	      });
	    }
	
	    /**
	     * Enable async and non-stop modes in GDB. This mode is *highly* recommended!
	     *
	     * @returns {Promise<undefined, GDBError>} A promise that resolves/rejects
	     *   after completion of a GDB command.
	     */
	
	  }, {
	    key: 'enableAsync',
	    value: function enableAsync() {
	      var _this5 = this;
	
	      return this._sync(function _callee2() {
	        return regeneratorRuntime.async(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                _context2.prev = 0;
	                _context2.next = 3;
	                return regeneratorRuntime.awrap(_this5._set('mi-async', 'on'));
	
	              case 3:
	                _context2.next = 9;
	                break;
	
	              case 5:
	                _context2.prev = 5;
	                _context2.t0 = _context2['catch'](0);
	                _context2.next = 9;
	                return regeneratorRuntime.awrap(_this5._set('target-async', 'on'));
	
	              case 9:
	                _context2.next = 11;
	                return regeneratorRuntime.awrap(_this5._set('non-stop', 'on'));
	
	              case 11:
	                _this5._async = true;
	
	              case 12:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, null, _this5, [[0, 5]]);
	      });
	    }
	
	    /**
	     * Attach a new target (inferior) to GDB.
	     *
	     * @param {number} pid The process id or to attach.
	     *
	     * @returns {Promise<ThreadGroup, GDBError>} A promise that resolves/rejects
	     *   with the added thread group.
	     */
	
	  }, {
	    key: 'attach',
	    value: function attach(pid) {
	      var _this6 = this;
	
	      return this._sync(function () {
	        return function _callee3() {
	          var res, id, group;
	          return regeneratorRuntime.async(function _callee3$(_context3) {
	            while (1) {
	              switch (_context3.prev = _context3.next) {
	                case 0:
	                  _context3.next = 2;
	                  return regeneratorRuntime.awrap(_this6._execCMD('exec add-inferior'));
	
	                case 2:
	                  res = _context3.sent;
	                  id = toInt(/Added inferior (\d+)/.exec(res)[1]);
	                  group = new _group2.default(id);
	                  _context3.next = 7;
	                  return regeneratorRuntime.awrap(_this6._execMI('-target-attach ' + pid, group));
	
	                case 7:
	                  return _context3.abrupt('return', group);
	
	                case 8:
	                case 'end':
	                  return _context3.stop();
	              }
	            }
	          }, null, _this6);
	        };
	      });
	    }
	
	    /**
	     * Detache a target (inferior) from GDB.
	     *
	     * @param {ThreadGroup|number} process The process id or the thread group to detach.
	     *
	     * @returns {Promise<undefined, GDBError>} A promise that resolves/rejects
	     *   after completion of a GDB command.
	     */
	
	  }, {
	    key: 'detach',
	    value: function detach(process) {
	      var _this7 = this;
	
	      return this._sync(function () {
	        return _this7._execMI('-target-detach ' + (process instanceof _group2.default ? 'i' + process.id : process));
	      });
	    }
	
	    /**
	     * Interrupt the target. In all-stop mode and in non-stop mode without arguments
	     * it interrupts all threads. In non-stop mode it can interrupt only specific thread or
	     * a thread group.
	     *
	     * @param {Thread|ThreadGroup} [scope] The thread or thread-group to interrupt.
	     *   If this parameter is omitted, it will interrupt all threads.
	     *
	     * @returns {Promise<undefined, GDBError>} A promise that resolves/rejects
	     *   after completion of a GDB command.
	     */
	
	  }, {
	    key: 'interrupt',
	    value: function interrupt(scope) {
	      var _this8 = this;
	
	      return this._sync(function () {
	        if (!_this8._async) {
	          _this8._process.kill('SIGINT');
	        } else {
	          return _this8._execMI(scope ? '-exec-interrupt' : '-exec-interrupt --all', scope);
	        }
	      });
	    }
	
	    /**
	     * Get the information about all the threads or about specific threads.
	     *
	     * @param {Thread|ThreadGroup} [scope] Get information about threads of the specific
	     *   thread group or even about the specific thread (if it doesn't have enough information
	     *   or it's outdated). If this parameter is absent, then information about all
	     *   threads is returned.
	     *
	     * @returns {Promise<Thread[]|Thread, GDBError>} A promise that resolves with an array
	     *   of threads or a single thread.
	     */
	
	  }, {
	    key: 'threads',
	    value: function threads(scope) {
	      var _this9 = this;
	
	      return this._sync(function _callee4() {
	        var mapToThread, _ref, threads, _ref2, _threads, _ref3, _threads2;
	
	        return regeneratorRuntime.async(function _callee4$(_context4) {
	          while (1) {
	            switch (_context4.prev = _context4.next) {
	              case 0:
	                mapToThread = function mapToThread(t) {
	                  var options = { status: t.state };
	                  if (t.frame) {
	                    options.frame = new _frame2.default({
	                      file: t.frame.fullname,
	                      line: toInt(t.frame.line),
	                      level: toInt(t.frame.level)
	                    });
	                  }
	
	                  return new _thread2.default(toInt(t.id), options);
	                };
	
	                if (!(scope instanceof _thread2.default)) {
	                  _context4.next = 9;
	                  break;
	                }
	
	                _context4.next = 4;
	                return regeneratorRuntime.awrap(_this9._execMI('-thread-info ' + scope.id));
	
	              case 4:
	                _ref = _context4.sent;
	                threads = _ref.threads;
	                return _context4.abrupt('return', mapToThread(threads[0]));
	
	              case 9:
	                if (!(scope instanceof _group2.default)) {
	                  _context4.next = 17;
	                  break;
	                }
	
	                _context4.next = 12;
	                return regeneratorRuntime.awrap(_this9._execMI('-list-thread-groups i' + scope.id));
	
	              case 12:
	                _ref2 = _context4.sent;
	                _threads = _ref2.threads;
	                return _context4.abrupt('return', _threads.map(mapToThread));
	
	              case 17:
	                _context4.next = 19;
	                return regeneratorRuntime.awrap(_this9._execMI('-thread-info'));
	
	              case 19:
	                _ref3 = _context4.sent;
	                _threads2 = _ref3.threads;
	                return _context4.abrupt('return', _threads2.map(mapToThread));
	
	              case 22:
	              case 'end':
	                return _context4.stop();
	            }
	          }
	        }, null, _this9);
	      });
	    }
	
	    /**
	     * Get the current thread.
	     *
	     * @returns {Promise<Thread, GDBError>} A promise that resolves with a thread.
	     */
	
	  }, {
	    key: 'currentThread',
	    value: function currentThread() {
	      var _this10 = this;
	
	      return this._sync(function () {
	        return _this10._currentThread();
	      });
	    }
	
	    /**
	     * Although you can pass scope to commands, you can also explicitly change
	     * the context of command execution. Sometimes it might be slightly faster.
	     *
	     * @param {Thread} thread The thread that should be selected.
	     *
	     * @returns {Promise<undefined, GDBError>} A promise that resolves/rejects
	     *   after completion of a GDB command.
	     */
	
	  }, {
	    key: 'selectThread',
	    value: function selectThread(thread) {
	      var _this11 = this;
	
	      return this._sync(function () {
	        return _this11._selectThread(thread);
	      });
	    }
	
	    /**
	     * Get thread groups.
	     *
	     * @returns {Promise<ThreadGroup[], GDBError>} A promise that resolves with
	     *   an array thread groups.
	     */
	
	  }, {
	    key: 'threadGroups',
	    value: function threadGroups() {
	      var _this12 = this;
	
	      return this._sync(function () {
	        return _this12._threadGroups();
	      });
	    }
	
	    /**
	     * Get the current thread group.
	     *
	     * @returns {Promise<ThreadGroup, GDBError>} A promise that resolves with the thread group.
	     */
	
	  }, {
	    key: 'currentThreadGroup',
	    value: function currentThreadGroup() {
	      var _this13 = this;
	
	      return this._sync(function () {
	        return _this13._currentThreadGroup();
	      });
	    }
	
	    /**
	     * Although you can pass scope to commands, you can also explicitly change
	     * the context of command execution. Sometimes it might be slightly faster.
	     *
	     * @param {ThreadGroup} group The thread group that should be selected.
	     *
	     * @returns {Promise<undefined, GDBError>} A promise that resolves/rejects
	     *   after completion of a GDB command.
	     */
	
	  }, {
	    key: 'selectThreadGroup',
	    value: function selectThreadGroup(group) {
	      var _this14 = this;
	
	      return this._sync(function () {
	        return _this14._selectThreadGroup(group);
	      });
	    }
	    /**
	     * Lists all breakpoints.
	     *
	     * @returns {Promise<Breakpoints, GDBError>} A promise that resolves with list of breakpoints.
	     **/
	
	  }, {
	    key: 'getBreaks',
	    value: function getBreaks() {
	      var _this15 = this;
	
	      return this._sync(function _callee5() {
	        var bkpts, result, thread, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, bkpt, enabled, bpObj;
	
	        return regeneratorRuntime.async(function _callee5$(_context5) {
	          while (1) {
	            switch (_context5.prev = _context5.next) {
	              case 0:
	                _context5.next = 2;
	                return regeneratorRuntime.awrap(_this15._execMI('-break-list'));
	
	              case 2:
	                bkpts = _context5.sent;
	
	                bkpts = bkpts.BreakpointTable.body;
	                result = [];
	                thread = '';
	                _iteratorNormalCompletion2 = true;
	                _didIteratorError2 = false;
	                _iteratorError2 = undefined;
	                _context5.prev = 9;
	
	                for (_iterator2 = bkpts[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                  bkpt = _step2.value;
	
	                  bkpt = bkpt.value;
	                  enabled = bkpt.enabled == 'y' ? true : false;
	                  bpObj = new _breakpoint2.default(toInt(bkpt.number), {
	                    file: bkpt.fullname,
	                    line: toInt(bkpt.line),
	                    func: bkpt.func,
	                    thread: thread,
	                    enabled: enabled
	                  });
	
	                  result.push(bpObj);
	                }
	                _context5.next = 17;
	                break;
	
	              case 13:
	                _context5.prev = 13;
	                _context5.t0 = _context5['catch'](9);
	                _didIteratorError2 = true;
	                _iteratorError2 = _context5.t0;
	
	              case 17:
	                _context5.prev = 17;
	                _context5.prev = 18;
	
	                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                  _iterator2.return();
	                }
	
	              case 20:
	                _context5.prev = 20;
	
	                if (!_didIteratorError2) {
	                  _context5.next = 23;
	                  break;
	                }
	
	                throw _iteratorError2;
	
	              case 23:
	                return _context5.finish(20);
	
	              case 24:
	                return _context5.finish(17);
	
	              case 25:
	                return _context5.abrupt('return', result);
	
	              case 26:
	              case 'end':
	                return _context5.stop();
	            }
	          }
	        }, null, _this15, [[9, 13, 17, 25], [18,, 20, 24]]);
	      });
	    }
	
	    /**
	     * Insert a breakpoint at the specified position.
	     *
	     * @param {string} file The full name or just a file name.
	     * @param {number|string} pos The function name or a line number.
	     * @param {Thread} [thread] The thread where breakpoint should be set.
	     *   If this field is absent, breakpoint applies to all threads.
	     *
	     * @returns {Promise<Breakpoint, GDBError>} A promise that resolves with a breakpoint.
	     */
	
	  }, {
	    key: 'addBreak',
	    value: function addBreak(file, pos, thread) {
	      var _this16 = this;
	
	      return this._sync(function _callee6() {
	        var opt, _ref4, bkpt;
	
	        return regeneratorRuntime.async(function _callee6$(_context6) {
	          while (1) {
	            switch (_context6.prev = _context6.next) {
	              case 0:
	                opt = thread ? '-p ' + thread.id : '';
	                _context6.next = 3;
	                return regeneratorRuntime.awrap(_this16._execMI('-break-insert ' + opt + ' ' + file + ':' + pos));
	
	              case 3:
	                _ref4 = _context6.sent;
	                bkpt = _ref4.bkpt;
	                return _context6.abrupt('return', new _breakpoint2.default(toInt(bkpt.number), {
	                  file: bkpt.fullname,
	                  line: toInt(bkpt.line),
	                  func: bkpt.func,
	                  thread: thread
	                }));
	
	              case 6:
	              case 'end':
	                return _context6.stop();
	            }
	          }
	        }, null, _this16);
	      });
	    }
	
	    /**
	     * Removes a specific breakpoint.
	     *
	     * @param {Breakpoint} [bp] The breakpoint.
	     *
	     * @returns {Promise<undefined, GDBError>} A promise that resolves/rejects
	     *   after completion of a GDB command.
	     */
	
	  }, {
	    key: 'removeBreak',
	    value: function removeBreak(bp) {
	      var _this17 = this;
	
	      return this._sync(function () {
	        return _this17._execMI('-break-delete ' + bp.id);
	      });
	    }
	
	    /**
	     * Step in.
	     *
	     * @param {Thread|ThreadGroup} [scope] The thread or thread group where
	     *   the stepping should be done.
	     *
	     * @returns {Promise<undefined, GDBError>} A promise that resolves/rejects
	     *   after completion of a GDB command.
	     */
	
	  }, {
	    key: 'stepIn',
	    value: function stepIn(scope) {
	      var _this18 = this;
	
	      return this._sync(function () {
	        return _this18._execMI('-exec-step', scope);
	      });
	    }
	
	    /**
	     * Step out.
	     *
	     * @param {Thread|ThreadGroup} [scope] The thread or thread group where
	     *   the stepping should be done.
	     *
	     * @returns {Promise<undefined, GDBError>} A promise that resolves/rejects
	     *   after completion of a GDB command.
	     */
	
	  }, {
	    key: 'stepOut',
	    value: function stepOut(scope) {
	      var _this19 = this;
	
	      return this._sync(function () {
	        return _this19._execMI('-exec-finish', scope);
	      });
	    }
	
	    /**
	     * Execute to the next line.
	     *
	     * @param {Thread|ThreadGroup} [scope] The thread or thread group where
	     *   the stepping should be done.
	     *
	     * @returns {Promise<undefined, GDBError>} A promise that resolves/rejects
	     *   after completion of a GDB command.
	     */
	
	  }, {
	    key: 'next',
	    value: function next(scope) {
	      var _this20 = this;
	
	      return this._sync(function () {
	        return _this20._execMI('-exec-next', scope);
	      });
	    }
	
	    /**
	     * Run the current target.
	     *
	     * @param {ThreadGroup} [group] The thread group to run.
	     *   If this parameter is omitted, current thread group will be run.
	     *
	     * @returns {Promise<undefined, GDBError>} A promise that resolves/rejects
	     *   after completion of a GDB command.
	     */
	
	  }, {
	    key: 'run',
	    value: function run(group) {
	      var _this21 = this;
	
	      // XXX: seems like MI command `-exec-run` has a bug that makes it
	      // run in the foreground mode (although the opposite is stated in the docs).
	      // This can cause blocking even in `target-async` mode.
	      return this._sync(function () {
	        return _this21._async ? _this21._execCMD('exec run&', group) : _this21._execMI('-exec-run', group);
	      });
	    }
	
	    /**
	     * Continue execution.
	     *
	     * @param {Thread|ThreadGroup} [scope] The thread or thread group that should be continued.
	     *   If this parameter is omitted, all threads are continued.
	     *
	     * @returns {Promise<undefined, GDBError>} A promise that resolves/rejects
	     *   after completion of a GDB command.
	     */
	
	  }, {
	    key: 'proceed',
	    value: function proceed(scope) {
	      var _this22 = this;
	
	      return this._sync(function () {
	        return _this22._execMI(scope ? '-exec-continue' : '-exec-continue --all', scope);
	      });
	    }
	
	    /**
	     * List all symbols in the current context (i.e. all global, static, local
	     * variables and constants in the current file).
	     *
	     * @param {Thread} [thread] The thread from which the context should be taken.
	     *
	     * @returns {Promise<Variable[], GDBError>} A promise that resolves with
	     *   an array of variables.
	     */
	
	  }, {
	    key: 'context',
	    value: function context(thread) {
	      var _this23 = this;
	
	      return this._sync(function _callee7() {
	        var res;
	        return regeneratorRuntime.async(function _callee7$(_context7) {
	          while (1) {
	            switch (_context7.prev = _context7.next) {
	              case 0:
	                _context7.next = 2;
	                return regeneratorRuntime.awrap(_this23._execCMD('context', thread));
	
	              case 2:
	                res = _context7.sent;
	                return _context7.abrupt('return', res.map(function (v) {
	                  return new _variable2.default(v);
	                }));
	
	              case 4:
	              case 'end':
	                return _context7.stop();
	            }
	          }
	        }, null, _this23);
	      });
	    }
	
	    /**
	     * Get the callstack.
	     *
	     * @param {Thread} [thread] The thread from which the callstack should be taken.
	     *
	     * @returns {Promise<Frame[], GDBError>} A promise that resolves with an array of frames.
	     */
	
	  }, {
	    key: 'callstack',
	    value: function callstack(thread) {
	      var _this24 = this;
	
	      return this._sync(function _callee8() {
	        var _ref5, stack;
	
	        return regeneratorRuntime.async(function _callee8$(_context8) {
	          while (1) {
	            switch (_context8.prev = _context8.next) {
	              case 0:
	                _context8.next = 2;
	                return regeneratorRuntime.awrap(_this24._execMI('-stack-list-frames', thread));
	
	              case 2:
	                _ref5 = _context8.sent;
	                stack = _ref5.stack;
	                return _context8.abrupt('return', stack.map(function (f) {
	                  return new _frame2.default({
	                    file: f.value.fullname,
	                    line: toInt(f.value.line),
	                    level: toInt(f.value.level)
	                  });
	                }));
	
	              case 5:
	              case 'end':
	                return _context8.stop();
	            }
	          }
	        }, null, _this24);
	      });
	    }
	
	    /**
	     * Get list of source files or a subset of source files that match
	     * the regular expression. Please, note that it doesn't return sources.
	     *
	     * @example
	     * let headers = await gdb.sourceFiles({ pattern: '\.h$' })
	     *
	     * @param {object} [options] The options object.
	     * @param {ThreadGroup} [options.group] The thread group (i.e. target) for
	     *   which source files are needed. If this parameter is absent, then
	     *   source files are returned for all targets.
	     * @param {string} [options.pattern] The regular expression (see
	     *   {@link https://docs.python.org/2/library/re.html|Python regex syntax}).
	     *   This option is useful when the project has a lot of files so that
	     *   it's not desirable to send them all in one chunk along the wire.
	     *
	     * @returns {Promise<string[], GDBError>} A promise that resolves with
	     *   an array of source files.
	     */
	
	  }, {
	    key: 'sourceFiles',
	    value: function sourceFiles() {
	      var _this25 = this;
	
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      return this._sync(function _callee9() {
	        var files, group, pattern, cmd, groups, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, g;
	
	        return regeneratorRuntime.async(function _callee9$(_context9) {
	          while (1) {
	            switch (_context9.prev = _context9.next) {
	              case 0:
	                files = [];
	                group = options.group;
	                pattern = options.pattern || '';
	                cmd = 'sources ' + pattern;
	
	                if (!group) {
	                  _context9.next = 10;
	                  break;
	                }
	
	                _context9.next = 7;
	                return regeneratorRuntime.awrap(_this25._execCMD(cmd, group));
	
	              case 7:
	                files = _context9.sent;
	                _context9.next = 43;
	                break;
	
	              case 10:
	                _context9.next = 12;
	                return regeneratorRuntime.awrap(_this25._threadGroups());
	
	              case 12:
	                groups = _context9.sent;
	                _iteratorNormalCompletion3 = true;
	                _didIteratorError3 = false;
	                _iteratorError3 = undefined;
	                _context9.prev = 16;
	                _iterator3 = groups[Symbol.iterator]();
	
	              case 18:
	                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
	                  _context9.next = 28;
	                  break;
	                }
	
	                g = _step3.value;
	                _context9.t0 = files;
	                _context9.next = 23;
	                return regeneratorRuntime.awrap(_this25._execCMD(cmd, g));
	
	              case 23:
	                _context9.t1 = _context9.sent;
	                files = _context9.t0.concat.call(_context9.t0, _context9.t1);
	
	              case 25:
	                _iteratorNormalCompletion3 = true;
	                _context9.next = 18;
	                break;
	
	              case 28:
	                _context9.next = 34;
	                break;
	
	              case 30:
	                _context9.prev = 30;
	                _context9.t2 = _context9['catch'](16);
	                _didIteratorError3 = true;
	                _iteratorError3 = _context9.t2;
	
	              case 34:
	                _context9.prev = 34;
	                _context9.prev = 35;
	
	                if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                  _iterator3.return();
	                }
	
	              case 37:
	                _context9.prev = 37;
	
	                if (!_didIteratorError3) {
	                  _context9.next = 40;
	                  break;
	                }
	
	                throw _iteratorError3;
	
	              case 40:
	                return _context9.finish(37);
	
	              case 41:
	                return _context9.finish(34);
	
	              case 42:
	                files = files.filter(function (f, index) {
	                  return files.indexOf(f) === index;
	                });
	
	              case 43:
	                return _context9.abrupt('return', files);
	
	              case 44:
	              case 'end':
	                return _context9.stop();
	            }
	          }
	        }, null, _this25, [[16, 30, 34, 42], [35,, 37, 41]]);
	      });
	    }
	
	    /**
	     * Evaluate a GDB expression.
	     *
	     * @param {string} expr The expression to evaluate.
	     * @param {Thread|ThreadGroup} [scope] The thread or thread group where
	     *   the expression should be evaluated.
	     *
	     * @returns {Promise<string, GDBError>} A promise that resolves with the result of expression.
	     */
	
	  }, {
	    key: 'evaluate',
	    value: function evaluate(expr, scope) {
	      var _this26 = this;
	
	      return this._sync(function _callee10() {
	        var res;
	        return regeneratorRuntime.async(function _callee10$(_context10) {
	          while (1) {
	            switch (_context10.prev = _context10.next) {
	              case 0:
	                _context10.next = 2;
	                return regeneratorRuntime.awrap(_this26._execMI('-data-evaluate-expression ' + expr, scope));
	
	              case 2:
	                res = _context10.sent;
	                return _context10.abrupt('return', res.value);
	
	              case 4:
	              case 'end':
	                return _context10.stop();
	            }
	          }
	        }, null, _this26);
	      });
	    }
	
	    /**
	     * Exit GDB.
	     *
	     * @returns {Promise<undefined, GDBError>} A promise that resolves/rejects
	     *   after completion of a GDB command.
	     */
	
	  }, {
	    key: 'exit',
	    value: function exit() {
	      var _this27 = this;
	
	      return this._sync(function () {
	        return _this27._execMI('-gdb-exit');
	      });
	    }
	
	    /**
	     * Execute a custom python script and get the results of its excecution.
	     * If your python script is asynchronous and you're interested in its output, you should
	     * either define a new event (refer to the *Extending* section in the main page) or
	     * read the {@link GDB#consoleStream|console stream}. Here's the example below.
	     *
	     * By the way, with this method you can define your own CLI commands and then call
	     * them via {@link GDB#execCLI|execCLI} method. For more examples, refer to the *Extending*
	     * section on the main page and read
	     * {@link https://sourceware.org/gdb/current/onlinedocs/gdb/Python-API.html|official GDB Python API}
	     * and {@link https://sourceware.org/gdb/wiki/PythonGdbTutorial|PythonGdbTutorial}.
	     *
	     * @example
	     * let script = `
	     * import gdb
	     * import threading
	     *
	     *
	     * def foo():
	     *     sys.stdout.write('bar')
	     *     sys.stdout.flush()
	     *
	     * timer = threading.Timer(5.0, foo)
	     * timer.start()
	     * `
	     * gdb.consoleStream.on('data', (str) => {
	     *   if (str === 'bar') console.log('yep')
	     * })
	     * await gdb.execPy(script)
	     *
	     * @param {string} src The python script.
	     * @param {Thread} [thread] The thread where the script should be executed.
	     *
	     * @returns {Promise<string, GDBError>} A promise that resolves with the output of
	     *   python script execution.
	     */
	
	  }, {
	    key: 'execPy',
	    value: function execPy(src, scope) {
	      var _this28 = this;
	
	      return this._sync(function () {
	        return _this28._execCMD('exec python\\n' + escape(src), scope);
	      });
	    }
	
	    /**
	     * Execute a CLI command.
	     *
	     * @param {string} cmd The CLI command.
	     * @param {Thread|ThreadGroup} [scope] The thread where the command should be executed.
	     *
	     * @returns {Promise<string, GDBError>} A promise that resolves with
	     *   the result of command execution.
	     */
	
	  }, {
	    key: 'execCLI',
	    value: function execCLI(cmd, scope) {
	      var _this29 = this;
	
	      return this._sync(function () {
	        return _this29._execCMD('exec ' + cmd, scope);
	      });
	    }
	
	    /**
	     * Execute a custom defined command. Refer to the *Extending* section on the main
	     * page of the documentation.
	     *
	     * @param {string} cmd The name of the command.
	     * @param {Thread|ThreadGroup} [scope] The thread or thread-group where
	     *   the command should be executed. If this parameter is omitted,
	     *   it executes in the current thread.
	     *
	     * @returns {Promise<object, GDBError>} A promise that resolves with
	     *   the JSON representation of the result of command execution.
	     */
	
	  }, {
	    key: 'execCMD',
	    value: function execCMD(cmd, scope) {
	      var _this30 = this;
	
	      return this._sync(function () {
	        return _this30._execCMD(cmd, scope);
	      });
	    }
	
	    /**
	     * Execute a MI command.
	     *
	     * @param {string} cmd The MI command.
	     * @param {Thread|ThreadGroup} [scope] The thread or thread-group where
	     *   the command should be executed. If this parameter is omitted,
	     *   it executes in the current thread.
	     *
	     * @returns {Promise<object, GDBError>} A promise that resolves with
	     *   the JSON representation of the result of command execution.
	     */
	
	  }, {
	    key: 'execMI',
	    value: function execMI(cmd, scope) {
	      var _this31 = this;
	
	      return this._sync(function () {
	        return _this31._execMI(cmd, scope);
	      });
	    }
	
	    /**
	     * Execute a MI with no expectation of return value.
	     *
	     * @param {string} cmd The MI command.
	     * @param {Thread|ThreadGroup} [scope] The thread or thread-group where
	     *   the command should be executed. If this parameter is omitted,
	     *   it executes in the current thread.
	     *
	     * @returns Nothing.
	     */
	
	  }, {
	    key: 'execMInor',
	    value: function execMInor(cmd, scope) {
	      return this._execMInor(cmd, scope);
	    }
	
	    // Private methods
	    // Note that it's necessary to not call public methods and {@link GDB#_sync}
	    // method in these methods since it may cause blocking.
	
	    /**
	     * Internal method for setting values. See {@link GDB#set}.
	     *
	     * @ignore
	     */
	
	  }, {
	    key: '_set',
	    value: function _set(param, value) {
	      return regeneratorRuntime.async(function _set$(_context11) {
	        while (1) {
	          switch (_context11.prev = _context11.next) {
	            case 0:
	              _context11.next = 2;
	              return regeneratorRuntime.awrap(this._execMI('-gdb-set ' + param + ' ' + value));
	
	            case 2:
	            case 'end':
	              return _context11.stop();
	          }
	        }
	      }, null, this);
	    }
	
	    /**
	     * Internal method for getting the current thread. See {@link GDB#currentThread}.
	     *
	     * @ignore
	     */
	
	  }, {
	    key: '_currentThread',
	    value: function _currentThread() {
	      var _ref6, id, group;
	
	      return regeneratorRuntime.async(function _currentThread$(_context12) {
	        while (1) {
	          switch (_context12.prev = _context12.next) {
	            case 0:
	              _context12.next = 2;
	              return regeneratorRuntime.awrap(this._execCMD('thread'));
	
	            case 2:
	              _ref6 = _context12.sent;
	              id = _ref6.id;
	              group = _ref6.group;
	              return _context12.abrupt('return', id ? new _thread2.default(id, { group: group }) : null);
	
	            case 6:
	            case 'end':
	              return _context12.stop();
	          }
	        }
	      }, null, this);
	    }
	
	    /**
	     * Internal method for getting the current thread group. See {@link GDB#currentThreadGroup}.
	     *
	     * @ignore
	     */
	
	  }, {
	    key: '_currentThreadGroup',
	    value: function _currentThreadGroup() {
	      var _ref7, id, pid;
	
	      return regeneratorRuntime.async(function _currentThreadGroup$(_context13) {
	        while (1) {
	          switch (_context13.prev = _context13.next) {
	            case 0:
	              _context13.next = 2;
	              return regeneratorRuntime.awrap(this._execCMD('group'));
	
	            case 2:
	              _ref7 = _context13.sent;
	              id = _ref7.id;
	              pid = _ref7.pid;
	              return _context13.abrupt('return', new _group2.default(id, { pid: pid }));
	
	            case 6:
	            case 'end':
	              return _context13.stop();
	          }
	        }
	      }, null, this);
	    }
	
	    /**
	     * Internal method for selecting the thread groups. See {@link GDB#selectThread}.
	     *
	     * @ignore
	     */
	
	  }, {
	    key: '_selectThread',
	    value: function _selectThread(thread) {
	      return regeneratorRuntime.async(function _selectThread$(_context14) {
	        while (1) {
	          switch (_context14.prev = _context14.next) {
	            case 0:
	              _context14.next = 2;
	              return regeneratorRuntime.awrap(this._execMI('-thread-select ' + thread.id));
	
	            case 2:
	            case 'end':
	              return _context14.stop();
	          }
	        }
	      }, null, this);
	    }
	
	    /**
	     * Internal method for selecting the thread group. See {@link GDB#selectThreadGroup}.
	     *
	     * @ignore
	     */
	
	  }, {
	    key: '_selectThreadGroup',
	    value: function _selectThreadGroup(group) {
	      return regeneratorRuntime.async(function _selectThreadGroup$(_context15) {
	        while (1) {
	          switch (_context15.prev = _context15.next) {
	            case 0:
	              _context15.next = 2;
	              return regeneratorRuntime.awrap(this._execCMD('exec inferior ' + group.id));
	
	            case 2:
	            case 'end':
	              return _context15.stop();
	          }
	        }
	      }, null, this);
	    }
	
	    /**
	     * Internal method for getting thread groups. See {@link GDB#threadGroups}.
	     *
	     * @ignore
	     */
	
	  }, {
	    key: '_threadGroups',
	    value: function _threadGroups() {
	      var _ref8, groups;
	
	      return regeneratorRuntime.async(function _threadGroups$(_context16) {
	        while (1) {
	          switch (_context16.prev = _context16.next) {
	            case 0:
	              _context16.next = 2;
	              return regeneratorRuntime.awrap(this._execMI('-list-thread-groups'));
	
	            case 2:
	              _ref8 = _context16.sent;
	              groups = _ref8.groups;
	              return _context16.abrupt('return', groups.map(function (g) {
	                return new _group2.default(toInt(g.id.slice(1)), {
	                  pid: toInt(g.pid),
	                  executable: g.executable
	                });
	              }));
	
	            case 5:
	            case 'end':
	              return _context16.stop();
	          }
	        }
	      }, null, this);
	    }
	
	    /**
	     * Helps to restore the current thread between operations and avoid side effect.
	     *
	     * @param {Task} [task] The task to execute.
	     *
	     * @returns {Promise<any, GDBError>} A promise that resolves with task results.
	     *
	     * @ignore
	     */
	
	  }, {
	    key: '_preserveThread',
	    value: function _preserveThread(task) {
	      var thread, res;
	      return regeneratorRuntime.async(function _preserveThread$(_context17) {
	        while (1) {
	          switch (_context17.prev = _context17.next) {
	            case 0:
	              _context17.next = 2;
	              return regeneratorRuntime.awrap(this._currentThread());
	
	            case 2:
	              thread = _context17.sent;
	              _context17.next = 5;
	              return regeneratorRuntime.awrap(task());
	
	            case 5:
	              res = _context17.sent;
	
	              if (!thread) {
	                _context17.next = 9;
	                break;
	              }
	
	              _context17.next = 9;
	              return regeneratorRuntime.awrap(this._selectThread(thread));
	
	            case 9:
	              return _context17.abrupt('return', res);
	
	            case 10:
	            case 'end':
	              return _context17.stop();
	          }
	        }
	      }, null, this);
	    }
	
	    /**
	     * Internal method for calling defined Python commands. See {@link GDB#execCMD}.
	     *
	     * @ignore
	     */
	
	  }, {
	    key: '_execCMD',
	    value: function _execCMD(cmd, scope) {
	      var _this32 = this;
	
	      if (scope instanceof _thread2.default) {
	        return this._preserveThread(function () {
	          return _this32._selectThread(scope).then(function () {
	            return _this32._exec(cmd, 'cli');
	          });
	        });
	      } else if (scope instanceof _group2.default) {
	        return this._preserveThread(function () {
	          return _this32._selectThreadGroup(scope).then(function () {
	            return _this32._exec(cmd, 'cli');
	          });
	        });
	      } else {
	        return this._exec(cmd, 'cli');
	      }
	    }
	
	    /**
	     * Internal method for calling MI commands. See {@link GDB#execMI}.
	     *
	     * @ignore
	     */
	
	  }, {
	    key: '_execMI',
	    value: function _execMI(cmd, scope) {
	      var _this33 = this;
	
	      var _$exec = /([^ ]+)( .*|)/.exec(cmd),
	          _$exec2 = _slicedToArray(_$exec, 3),
	          name = _$exec2[1],
	          options = _$exec2[2];
	
	      if (scope instanceof _thread2.default) {
	        return this._exec(name + ' --thread ' + scope.id + ' ' + options, 'mi');
	      } else if (scope instanceof _group2.default) {
	        // `--thread-group` option changes thread.
	        return this._preserveThread(function () {
	          return _this33._exec(name + ' --thread-group i' + scope.id + ' ' + options, 'mi');
	        });
	      } else {
	        return this._exec(cmd, 'mi');
	      }
	    }
	
	    /**
	     * Internal method for calling MI nor commands.
	     *
	     * @ignore
	     */
	
	  }, {
	    key: '_execMInor',
	    value: function _execMInor(cmd, scope) {
	      var _this34 = this;
	
	      var _$exec3 = /([^ ]+)( .*|)/.exec(cmd),
	          _$exec4 = _slicedToArray(_$exec3, 3),
	          name = _$exec4[1],
	          options = _$exec4[2];
	
	      if (scope instanceof _thread2.default) {
	        return this._exec(name + ' --thread ' + scope.id + ' ' + options, 'minor');
	      } else if (scope instanceof _group2.default) {
	        // `--thread-group` option changes thread.
	        return this._preserveThread(function () {
	          return _this34._exec(name + ' --thread-group i' + scope.id + ' ' + options, 'minor');
	        });
	      } else {
	        return this._exec(cmd, 'minor');
	      }
	    }
	
	    /**
	     * Internal method that executes a MI command and add it to the queue where it
	     * waits for the results of execution.
	     *
	     * @param {string} cmd The command (eaither a MI or a defined Python command).
	     * @param {string} interpreter The interpreter that should execute the command.
	     *
	     * @returns {Promise<object, GDBError>} A promise that resolves with
	     *   the JSON representation of the result of command execution.
	     *
	     * @ignore
	     */
	
	  }, {
	    key: '_exec',
	    value: function _exec(cmd, interpreter) {
	      var _this35 = this;
	
	      if (interpreter === 'mi') {
	        debugMIInput(cmd);
	      } else if (interpreter === 'minor') {
	        debugMIInput(cmd);
	      } else {
	        debugCLIInput('gdbjs-' + cmd);
	        cmd = '-interpreter-exec console "gdbjs-' + cmd + '"';
	      }
	
	      this._process.stdin.write(cmd + '\n', { binary: true });
	
	      if (interpreter == 'minor') {
	        return true;
	      } else {
	        return new Promise(function (resolve, reject) {
	          _this35._queue.write({ cmd: cmd, interpreter: interpreter, resolve: resolve, reject: reject });
	        });
	      }
	    }
	
	    /**
	     * This routine makes it impossible to run multiple punlic methods
	     * simultaneously. Why this matter? It's really important for public
	     * methods to not interfere with each other, because they can change
	     * the state of GDB during execution. They should be atomic,
	     * meaning that calling them simultaneously should produce the same
	     * results as calling them in order. One way to ensure that is to block
	     * execution of public methods until other methods complete.
	     *
	     * @param {Task} task The task to execute.
	     *
	     * @returns {Promise<any, GDBError>} A promise that resolves with task results.
	     *
	     * @ignore
	     */
	
	  }, {
	    key: '_sync',
	    value: function _sync(task) {
	      this._lock = this._lock.then(task, task);
	      return this._lock;
	    }
	  }, {
	    key: 'process',
	    get: function get() {
	      return this._process;
	    }
	  }]);
	
	  return GDB;
	}(_events.EventEmitter);
	
	exports.GDB = GDB;
	exports.Thread = _thread2.default;
	exports.ThreadGroup = _group2.default;
	exports.Breakpoint = _breakpoint2.default;
	exports.Frame = _frame2.default;
	exports.Variable = _variable2.default;
	exports._parseMI = _gdbmi.parse;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("debug");

/***/ },
/* 2 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("highland");

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Class representing an internal GDB error.
	 *
	 * @extends Error
	 */
	var GDBError = function (_Error) {
	  _inherits(GDBError, _Error);
	
	  /**
	   * Create a GDBError.
	   *
	   * @param {string} cmd Command that led to this error.
	   * @param {string} msg Error message.
	   * @param {number} [code] Error code.
	   *
	   * @private
	   */
	  function GDBError(cmd, msg, code) {
	    _classCallCheck(this, GDBError);
	
	    var _this = _possibleConstructorReturn(this, (GDBError.__proto__ || Object.getPrototypeOf(GDBError)).call(this, msg));
	
	    _this.name = 'GDBError';
	    /**
	     * Command that led to this error.
	     *
	     * @type {string}
	     **/
	    _this.command = cmd;
	    /**
	     * Error message.
	     *
	     * @type {string}
	     **/
	    _this.message = msg;
	    /**
	     * Error code.
	     *
	     * @type {?number}
	     **/
	    _this.code = code;
	    return _this;
	  }
	
	  return GDBError;
	}(Error);
	
	exports.default = GDBError;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Class representing a thread.
	 */
	var Thread =
	/**
	 * Create a thread object.
	 * Usually you don't need to create it yourself unless
	 * you're doing some low-level stuff.
	 *
	 * @param {number} id The internal GDB ID of a thread.
	 * @param {object} [options] The options object.
	 * @param {string} [options.status] The thread status (e.g. `stopped`).
	 * @param {ThreadGroup} [options.group] The thread group.
	 * @param {Frame} [options.frame] The frame where thread is currently on.
	 */
	function Thread(id) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  _classCallCheck(this, Thread);
	
	  /**
	   * The internal GDB ID of a thread.
	   *
	   * @type {number}
	   */
	  this.id = id;
	
	  /**
	   * The thread status (e.g. `stopped`).
	   *
	   * @type {?string}
	   */
	  this.status = options.status || null;
	
	  /**
	   * The thread group.
	   *
	   * @type {?ThreadGroup}
	   */
	  this.group = options.group || null;
	
	  /**
	   * The frame where thread is currently on.
	   *
	   * @type {?Frame}
	   */
	  this.frame = options.frame || null;
	};
	
	exports.default = Thread;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Class representing a thread group (aka target, aka inferior).
	 */
	var ThreadGroup =
	/**
	 * Create a thread group object.
	 * Usually you don't need to create it yourself unless
	 * you're doing some low-level stuff.
	 *
	 * @param {number} id The internal GDB ID of a thread group.
	 * @param {object} [options] The options object.
	 * @param {string} [options.executable] The executable of target.
	 * @param {number} [options.pid] The PID of the thread-group.
	 */
	function ThreadGroup(id) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  _classCallCheck(this, ThreadGroup);
	
	  /**
	   * The internal GDB ID of a thread group.
	   *
	   * @type {number}
	   */
	  this.id = id;
	
	  /**
	   * The executable of target.
	   *
	   * @type {?string}
	   */
	  this.executable = options.executable || null;
	
	  /**
	   * The PID of the thread-group.
	   *
	   * @type {?number}
	   */
	  this.pid = Number.isInteger(options.pid) ? options.pid : null;
	};
	
	exports.default = ThreadGroup;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Class representing a breakpoint.
	 */
	var Breakpoint =
	/**
	 * Create a breakpoint object.
	 * Usually you don't need to create it yourself unless
	 * you're doing some low-level stuff.
	 *
	 * @param {number} id The internal GDB ID of a breakpoint.
	 * @param {object} [options] The options object.
	 * @param {string} [options.file] The full path to a file in which breakpoint appears.
	 * @param {number} [options.line] The line number at which the breakpoint appears.
	 * @param {string} [options.func] The function in which the breakpoint appears.
	 * @param {enabled} [options.enabled] Bool indiciating whether this breakpoint is enabled.
	 * @param {Thread} [options.thread] The thread for thread-specific breakpoints.
	 */
	function Breakpoint(id) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  _classCallCheck(this, Breakpoint);
	
	  /**
	   * The internal GDB ID of a breakpoint.
	   *
	   * @type {number}
	   */
	  this.id = id;
	
	  /**
	   * The full path to a file in which breakpoint appears.
	   *
	   * @type {?string}
	   */
	  this.file = options.file || null;
	
	  /**
	   * The line number at which the breakpoint appears.
	   *
	   * @type {?number}
	   */
	  this.line = options.line || null;
	
	  /**
	   * The function in which the breakpoint appears.
	   *
	   * @type {?string}
	   */
	  this.func = options.func || null;
	
	  /**
	   * The thread for thread-specific breakpoints.
	   *
	   * @type {?Thread}
	   */
	  this.thread = options.thread || null;
	
	  /**
	   * The thread for thread-specific breakpoints.
	   *
	   * @type {?Thread}
	   */
	  this.enabled = options.enabled || null;
	};
	
	exports.default = Breakpoint;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Class representing a frame.
	 */
	var Frame =
	/**
	 * Create a frame object.
	 *
	 * @param {object} options The options object.
	 * @param {string} options.file The full path to a file.
	 * @param {number} options.line The line number.
	 * @param {number} [options.level] The level of stack frame.
	 */
	function Frame() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  _classCallCheck(this, Frame);
	
	  /**
	   * The full path to a file.
	   *
	   * @type {string}
	   */
	  this.file = options.file;
	
	  /**
	   * The line number.
	   *
	   * @type {number}
	   */
	  this.line = options.line;
	
	  /**
	   * The level of stack frame.
	   *
	   * @type {?number}
	   */
	  this.level = Number.isInteger(options.level) ? options.level : null;
	};
	
	exports.default = Frame;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Class representing a variable.
	 */
	var Variable =
	/**
	 * Create a variable object.
	 * Usually you don't need to create it yourself.
	 *
	 * @param {object} options The options object.
	 * @param {string} options.name The name of the variable.
	 * @param {string} options.type The type of the variable.
	 * @param {string} options.scope The scope of the variable.
	 * @param {string} options.value The value of the variable.
	 */
	function Variable() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  _classCallCheck(this, Variable);
	
	  /**
	   * The name of the variable.
	   *
	   * @type {string}
	   */
	  this.name = options.name;
	
	  /**
	   * The type of the variable.
	   *
	   * @type {string}
	   */
	  this.type = options.type;
	
	  /**
	   * The scope of the variable.
	   *
	   * @type {string}
	   */
	  this.scope = options.scope;
	
	  /**
	   * The value of the variable.
	   *
	   * @type {string}
	   */
	  this.value = options.value;
	};
	
	exports.default = Variable;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = (function() {
	  "use strict";
	
	  /*
	   * Generated by PEG.js 0.9.0.
	   *
	   * http://pegjs.org/
	   */
	
	  function peg$subclass(child, parent) {
	    function ctor() { this.constructor = child; }
	    ctor.prototype = parent.prototype;
	    child.prototype = new ctor();
	  }
	
	  function peg$SyntaxError(message, expected, found, location) {
	    this.message  = message;
	    this.expected = expected;
	    this.found    = found;
	    this.location = location;
	    this.name     = "SyntaxError";
	
	    if (typeof Error.captureStackTrace === "function") {
	      Error.captureStackTrace(this, peg$SyntaxError);
	    }
	  }
	
	  peg$subclass(peg$SyntaxError, Error);
	
	  function peg$parse(input) {
	    var options = arguments.length > 1 ? arguments[1] : {},
	        parser  = this,
	
	        peg$FAILED = {},
	
	        peg$startRuleFunctions = { Line: peg$parseLine },
	        peg$startRuleFunction  = peg$parseLine,
	
	        peg$c0 = "(gdb) ",
	        peg$c1 = { type: "literal", value: "(gdb) ", description: "\"(gdb) \"" },
	        peg$c2 = function() { return { type: 'prompt' } },
	        peg$c3 = { type: "any", description: "any character" },
	        peg$c4 = function() { return { type: 'target', data: text() } },
	        peg$c5 = "^",
	        peg$c6 = { type: "literal", value: "^", description: "\"^\"" },
	        peg$c7 = function(state, results) {
	              return { type: 'result', state, data: makeResults(results) }
	            },
	        peg$c8 = "*",
	        peg$c9 = { type: "literal", value: "*", description: "\"*\"" },
	        peg$c10 = function(obj) {
	              return { type: 'exec', state: obj.state, data: obj.data }
	            },
	        peg$c11 = "+",
	        peg$c12 = { type: "literal", value: "+", description: "\"+\"" },
	        peg$c13 = function(obj) {
	              return { type: 'status', state: obj.state, data: obj.data }
	            },
	        peg$c14 = "=",
	        peg$c15 = { type: "literal", value: "=", description: "\"=\"" },
	        peg$c16 = function(obj) {
	              return { type: 'notify', state: obj.state, data: obj.data }
	            },
	        peg$c17 = "~",
	        peg$c18 = { type: "literal", value: "~", description: "\"~\"" },
	        peg$c19 = function(data) { return { type: 'console', data } },
	        peg$c20 = "@",
	        peg$c21 = { type: "literal", value: "@", description: "\"@\"" },
	        peg$c22 = function(data) { return { type: 'target', data } },
	        peg$c23 = "&",
	        peg$c24 = { type: "literal", value: "&", description: "\"&\"" },
	        peg$c25 = function(data) { return { type: 'log', data } },
	        peg$c26 = function(state, results) {
	              return { state, data: makeResults(results) }
	            },
	        peg$c27 = ",",
	        peg$c28 = { type: "literal", value: ",", description: "\",\"" },
	        peg$c29 = function(result) { return result },
	        peg$c30 = function(value) { return value },
	        peg$c31 = "",
	        peg$c32 = function(name, value) { return { name, value } },
	        peg$c33 = "{}",
	        peg$c34 = { type: "literal", value: "{}", description: "\"{}\"" },
	        peg$c35 = function() { return {}; },
	        peg$c36 = "{",
	        peg$c37 = { type: "literal", value: "{", description: "\"{\"" },
	        peg$c38 = "}",
	        peg$c39 = { type: "literal", value: "}", description: "\"}\"" },
	        peg$c40 = function(result, results) {
	              return makeResults([result, ...results])
	            },
	        peg$c41 = "[]",
	        peg$c42 = { type: "literal", value: "[]", description: "\"[]\"" },
	        peg$c43 = function() { return []; },
	        peg$c44 = "[",
	        peg$c45 = { type: "literal", value: "[", description: "\"[\"" },
	        peg$c46 = "]",
	        peg$c47 = { type: "literal", value: "]", description: "\"]\"" },
	        peg$c48 = function(value, values) { return [value, ...values] },
	        peg$c49 = function(result, results) { return [result, ...results] },
	        peg$c50 = "done",
	        peg$c51 = { type: "literal", value: "done", description: "\"done\"" },
	        peg$c52 = "running",
	        peg$c53 = { type: "literal", value: "running", description: "\"running\"" },
	        peg$c54 = "connected",
	        peg$c55 = { type: "literal", value: "connected", description: "\"connected\"" },
	        peg$c56 = "error",
	        peg$c57 = { type: "literal", value: "error", description: "\"error\"" },
	        peg$c58 = "exit",
	        peg$c59 = { type: "literal", value: "exit", description: "\"exit\"" },
	        peg$c60 = "stopped",
	        peg$c61 = { type: "literal", value: "stopped", description: "\"stopped\"" },
	        peg$c62 = { type: "other", description: "c-string" },
	        peg$c63 = "\"",
	        peg$c64 = { type: "literal", value: "\"", description: "\"\\\"\"" },
	        peg$c65 = function(chars) { return decodeURIComponent(chars.join('')) },
	        peg$c66 = { type: "other", description: "char" },
	        peg$c67 = /^[^%\\"]/,
	        peg$c68 = { type: "class", value: "[^%\\\\\\\"]", description: "[^%\\\\\\\"]" },
	        peg$c69 = "%",
	        peg$c70 = { type: "literal", value: "%", description: "\"%\"" },
	        peg$c71 = function() { return '%25' },
	        peg$c72 = "\\",
	        peg$c73 = { type: "literal", value: "\\", description: "\"\\\\\"" },
	        peg$c74 = /^[0-7]/,
	        peg$c75 = { type: "class", value: "[0-7]", description: "[0-7]" },
	        peg$c76 = function(seq) { return '%' + parseInt(seq.join(''), 8).toString(16) },
	        peg$c77 = function(seq) { return seq },
	        peg$c78 = { type: "other", description: "escaped" },
	        peg$c79 = "b",
	        peg$c80 = { type: "literal", value: "b", description: "\"b\"" },
	        peg$c81 = function() { return '\b' },
	        peg$c82 = "f",
	        peg$c83 = { type: "literal", value: "f", description: "\"f\"" },
	        peg$c84 = function() { return '\f' },
	        peg$c85 = "n",
	        peg$c86 = { type: "literal", value: "n", description: "\"n\"" },
	        peg$c87 = function() { return '\n' },
	        peg$c88 = "r",
	        peg$c89 = { type: "literal", value: "r", description: "\"r\"" },
	        peg$c90 = function() { return '\r' },
	        peg$c91 = "t",
	        peg$c92 = { type: "literal", value: "t", description: "\"t\"" },
	        peg$c93 = function() { return '\t' },
	        peg$c94 = { type: "other", description: "string" },
	        peg$c95 = /^[A-z\-_]/,
	        peg$c96 = { type: "class", value: "[A-z-_]", description: "[A-z-_]" },
	        peg$c97 = function() { return text() },
	        peg$c98 = { type: "other", description: "token" },
	        peg$c99 = /^[0-9]/,
	        peg$c100 = { type: "class", value: "[0-9]", description: "[0-9]" },
	        peg$c101 = function() { return parseInt(text(), 10) },
	
	        peg$currPos          = 0,
	        peg$savedPos         = 0,
	        peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
	        peg$maxFailPos       = 0,
	        peg$maxFailExpected  = [],
	        peg$silentFails      = 0,
	
	        peg$result;
	
	    if ("startRule" in options) {
	      if (!(options.startRule in peg$startRuleFunctions)) {
	        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
	      }
	
	      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
	    }
	
	    function text() {
	      return input.substring(peg$savedPos, peg$currPos);
	    }
	
	    function location() {
	      return peg$computeLocation(peg$savedPos, peg$currPos);
	    }
	
	    function expected(description) {
	      throw peg$buildException(
	        null,
	        [{ type: "other", description: description }],
	        input.substring(peg$savedPos, peg$currPos),
	        peg$computeLocation(peg$savedPos, peg$currPos)
	      );
	    }
	
	    function error(message) {
	      throw peg$buildException(
	        message,
	        null,
	        input.substring(peg$savedPos, peg$currPos),
	        peg$computeLocation(peg$savedPos, peg$currPos)
	      );
	    }
	
	    function peg$computePosDetails(pos) {
	      var details = peg$posDetailsCache[pos],
	          p, ch;
	
	      if (details) {
	        return details;
	      } else {
	        p = pos - 1;
	        while (!peg$posDetailsCache[p]) {
	          p--;
	        }
	
	        details = peg$posDetailsCache[p];
	        details = {
	          line:   details.line,
	          column: details.column,
	          seenCR: details.seenCR
	        };
	
	        while (p < pos) {
	          ch = input.charAt(p);
	          if (ch === "\n") {
	            if (!details.seenCR) { details.line++; }
	            details.column = 1;
	            details.seenCR = false;
	          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
	            details.line++;
	            details.column = 1;
	            details.seenCR = true;
	          } else {
	            details.column++;
	            details.seenCR = false;
	          }
	
	          p++;
	        }
	
	        peg$posDetailsCache[pos] = details;
	        return details;
	      }
	    }
	
	    function peg$computeLocation(startPos, endPos) {
	      var startPosDetails = peg$computePosDetails(startPos),
	          endPosDetails   = peg$computePosDetails(endPos);
	
	      return {
	        start: {
	          offset: startPos,
	          line:   startPosDetails.line,
	          column: startPosDetails.column
	        },
	        end: {
	          offset: endPos,
	          line:   endPosDetails.line,
	          column: endPosDetails.column
	        }
	      };
	    }
	
	    function peg$fail(expected) {
	      if (peg$currPos < peg$maxFailPos) { return; }
	
	      if (peg$currPos > peg$maxFailPos) {
	        peg$maxFailPos = peg$currPos;
	        peg$maxFailExpected = [];
	      }
	
	      peg$maxFailExpected.push(expected);
	    }
	
	    function peg$buildException(message, expected, found, location) {
	      function cleanupExpected(expected) {
	        var i = 1;
	
	        expected.sort(function(a, b) {
	          if (a.description < b.description) {
	            return -1;
	          } else if (a.description > b.description) {
	            return 1;
	          } else {
	            return 0;
	          }
	        });
	
	        while (i < expected.length) {
	          if (expected[i - 1] === expected[i]) {
	            expected.splice(i, 1);
	          } else {
	            i++;
	          }
	        }
	      }
	
	      function buildMessage(expected, found) {
	        function stringEscape(s) {
	          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }
	
	          return s
	            .replace(/\\/g,   '\\\\')
	            .replace(/"/g,    '\\"')
	            .replace(/\x08/g, '\\b')
	            .replace(/\t/g,   '\\t')
	            .replace(/\n/g,   '\\n')
	            .replace(/\f/g,   '\\f')
	            .replace(/\r/g,   '\\r')
	            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
	            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
	            .replace(/[\u0100-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
	            .replace(/[\u1000-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
	        }
	
	        var expectedDescs = new Array(expected.length),
	            expectedDesc, foundDesc, i;
	
	        for (i = 0; i < expected.length; i++) {
	          expectedDescs[i] = expected[i].description;
	        }
	
	        expectedDesc = expected.length > 1
	          ? expectedDescs.slice(0, -1).join(", ")
	              + " or "
	              + expectedDescs[expected.length - 1]
	          : expectedDescs[0];
	
	        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";
	
	        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
	      }
	
	      if (expected !== null) {
	        cleanupExpected(expected);
	      }
	
	      return new peg$SyntaxError(
	        message !== null ? message : buildMessage(expected, found),
	        expected,
	        found,
	        location
	      );
	    }
	
	    function peg$parseLine() {
	      var s0, s1, s2;
	
	      s0 = peg$parseAsyncRecord();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parseStreamRecord();
	        if (s0 === peg$FAILED) {
	          s0 = peg$parseResultRecord();
	          if (s0 === peg$FAILED) {
	            s0 = peg$currPos;
	            if (input.substr(peg$currPos, 6) === peg$c0) {
	              s1 = peg$c0;
	              peg$currPos += 6;
	            } else {
	              s1 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c1); }
	            }
	            if (s1 !== peg$FAILED) {
	              peg$savedPos = s0;
	              s1 = peg$c2();
	            }
	            s0 = s1;
	            if (s0 === peg$FAILED) {
	              s0 = peg$currPos;
	              s1 = [];
	              if (input.length > peg$currPos) {
	                s2 = input.charAt(peg$currPos);
	                peg$currPos++;
	              } else {
	                s2 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c3); }
	              }
	              while (s2 !== peg$FAILED) {
	                s1.push(s2);
	                if (input.length > peg$currPos) {
	                  s2 = input.charAt(peg$currPos);
	                  peg$currPos++;
	                } else {
	                  s2 = peg$FAILED;
	                  if (peg$silentFails === 0) { peg$fail(peg$c3); }
	                }
	              }
	              if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c4();
	              }
	              s0 = s1;
	            }
	          }
	        }
	      }
	
	      return s0;
	    }
	
	    function peg$parseAsyncRecord() {
	      var s0;
	
	      s0 = peg$parseExecAsyncOutput();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parseStatusAsyncOutput();
	        if (s0 === peg$FAILED) {
	          s0 = peg$parseNotifyAsyncOutput();
	        }
	      }
	
	      return s0;
	    }
	
	    function peg$parseStreamRecord() {
	      var s0;
	
	      s0 = peg$parseConsoleStreamOutput();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parseTargetStreamOutput();
	        if (s0 === peg$FAILED) {
	          s0 = peg$parseLogStreamOutput();
	        }
	      }
	
	      return s0;
	    }
	
	    function peg$parseResultRecord() {
	      var s0, s1, s2, s3, s4;
	
	      s0 = peg$currPos;
	      s1 = peg$parseToken();
	      if (s1 === peg$FAILED) {
	        s1 = null;
	      }
	      if (s1 !== peg$FAILED) {
	        if (input.charCodeAt(peg$currPos) === 94) {
	          s2 = peg$c5;
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c6); }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parseResultClass();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parseResultsList();
	            if (s4 !== peg$FAILED) {
	              peg$savedPos = s0;
	              s1 = peg$c7(s3, s4);
	              s0 = s1;
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseExecAsyncOutput() {
	      var s0, s1, s2, s3;
	
	      s0 = peg$currPos;
	      s1 = peg$parseToken();
	      if (s1 === peg$FAILED) {
	        s1 = null;
	      }
	      if (s1 !== peg$FAILED) {
	        if (input.charCodeAt(peg$currPos) === 42) {
	          s2 = peg$c8;
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c9); }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parseAsyncOutput();
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c10(s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseStatusAsyncOutput() {
	      var s0, s1, s2, s3;
	
	      s0 = peg$currPos;
	      s1 = peg$parseToken();
	      if (s1 === peg$FAILED) {
	        s1 = null;
	      }
	      if (s1 !== peg$FAILED) {
	        if (input.charCodeAt(peg$currPos) === 43) {
	          s2 = peg$c11;
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c12); }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parseAsyncOutput();
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c13(s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseNotifyAsyncOutput() {
	      var s0, s1, s2, s3;
	
	      s0 = peg$currPos;
	      s1 = peg$parseToken();
	      if (s1 === peg$FAILED) {
	        s1 = null;
	      }
	      if (s1 !== peg$FAILED) {
	        if (input.charCodeAt(peg$currPos) === 61) {
	          s2 = peg$c14;
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c15); }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parseAsyncOutput();
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c16(s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseConsoleStreamOutput() {
	      var s0, s1, s2;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 126) {
	        s1 = peg$c17;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c18); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseConst();
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c19(s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseTargetStreamOutput() {
	      var s0, s1, s2;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 64) {
	        s1 = peg$c20;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c21); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseConst();
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c22(s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseLogStreamOutput() {
	      var s0, s1, s2;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 38) {
	        s1 = peg$c23;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c24); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseConst();
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c25(s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseAsyncOutput() {
	      var s0, s1, s2;
	
	      s0 = peg$currPos;
	      s1 = peg$parseAsyncClass();
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseResultsList();
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c26(s1, s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseResultsList() {
	      var s0, s1, s2, s3;
	
	      s0 = [];
	      s1 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 44) {
	        s2 = peg$c27;
	        peg$currPos++;
	      } else {
	        s2 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c28); }
	      }
	      if (s2 !== peg$FAILED) {
	        s3 = peg$parseResult();
	        if (s3 !== peg$FAILED) {
	          peg$savedPos = s1;
	          s2 = peg$c29(s3);
	          s1 = s2;
	        } else {
	          peg$currPos = s1;
	          s1 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s1;
	        s1 = peg$FAILED;
	      }
	      while (s1 !== peg$FAILED) {
	        s0.push(s1);
	        s1 = peg$currPos;
	        if (input.charCodeAt(peg$currPos) === 44) {
	          s2 = peg$c27;
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c28); }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parseResult();
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s1;
	            s2 = peg$c29(s3);
	            s1 = s2;
	          } else {
	            peg$currPos = s1;
	            s1 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s1;
	          s1 = peg$FAILED;
	        }
	      }
	
	      return s0;
	    }
	
	    function peg$parseValuesList() {
	      var s0, s1, s2, s3;
	
	      s0 = [];
	      s1 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 44) {
	        s2 = peg$c27;
	        peg$currPos++;
	      } else {
	        s2 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c28); }
	      }
	      if (s2 !== peg$FAILED) {
	        s3 = peg$parseValue();
	        if (s3 !== peg$FAILED) {
	          peg$savedPos = s1;
	          s2 = peg$c30(s3);
	          s1 = s2;
	        } else {
	          peg$currPos = s1;
	          s1 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s1;
	        s1 = peg$FAILED;
	      }
	      while (s1 !== peg$FAILED) {
	        s0.push(s1);
	        s1 = peg$currPos;
	        if (input.charCodeAt(peg$currPos) === 44) {
	          s2 = peg$c27;
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c28); }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parseValue();
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s1;
	            s2 = peg$c30(s3);
	            s1 = s2;
	          } else {
	            peg$currPos = s1;
	            s1 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s1;
	          s1 = peg$FAILED;
	        }
	      }
	
	      return s0;
	    }
	
	    function peg$parseResult() {
	      var s0, s1, s2, s3;
	
	      s0 = peg$currPos;
	      s1 = peg$parseString();
	      if (s1 === peg$FAILED) {
	        s1 = null;
	      }
	      if (s1 !== peg$FAILED) {
	        if (input.charCodeAt(peg$currPos) === 61) {
	          s2 = peg$c14;
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c15); }
	        }
	        if (s2 === peg$FAILED) {
	          s2 = peg$c31;
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parseValue();
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c32(s1, s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseValue() {
	      var s0;
	
	      s0 = peg$parseConst();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parseTuple();
	        if (s0 === peg$FAILED) {
	          s0 = peg$parseList();
	        }
	      }
	
	      return s0;
	    }
	
	    function peg$parseTuple() {
	      var s0, s1, s2, s3, s4;
	
	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 2) === peg$c33) {
	        s1 = peg$c33;
	        peg$currPos += 2;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c34); }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c35();
	      }
	      s0 = s1;
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        if (input.charCodeAt(peg$currPos) === 123) {
	          s1 = peg$c36;
	          peg$currPos++;
	        } else {
	          s1 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c37); }
	        }
	        if (s1 !== peg$FAILED) {
	          s2 = peg$parseResult();
	          if (s2 !== peg$FAILED) {
	            s3 = peg$parseResultsList();
	            if (s3 !== peg$FAILED) {
	              if (input.charCodeAt(peg$currPos) === 125) {
	                s4 = peg$c38;
	                peg$currPos++;
	              } else {
	                s4 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c39); }
	              }
	              if (s4 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c40(s2, s3);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      }
	
	      return s0;
	    }
	
	    function peg$parseList() {
	      var s0, s1, s2, s3, s4;
	
	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 2) === peg$c41) {
	        s1 = peg$c41;
	        peg$currPos += 2;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c42); }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c43();
	      }
	      s0 = s1;
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        if (input.charCodeAt(peg$currPos) === 91) {
	          s1 = peg$c44;
	          peg$currPos++;
	        } else {
	          s1 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c45); }
	        }
	        if (s1 !== peg$FAILED) {
	          s2 = peg$parseValue();
	          if (s2 !== peg$FAILED) {
	            s3 = peg$parseValuesList();
	            if (s3 !== peg$FAILED) {
	              if (input.charCodeAt(peg$currPos) === 93) {
	                s4 = peg$c46;
	                peg$currPos++;
	              } else {
	                s4 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c47); }
	              }
	              if (s4 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c48(s2, s3);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	        if (s0 === peg$FAILED) {
	          s0 = peg$currPos;
	          if (input.charCodeAt(peg$currPos) === 91) {
	            s1 = peg$c44;
	            peg$currPos++;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c45); }
	          }
	          if (s1 !== peg$FAILED) {
	            s2 = peg$parseResult();
	            if (s2 !== peg$FAILED) {
	              s3 = peg$parseResultsList();
	              if (s3 !== peg$FAILED) {
	                if (input.charCodeAt(peg$currPos) === 93) {
	                  s4 = peg$c46;
	                  peg$currPos++;
	                } else {
	                  s4 = peg$FAILED;
	                  if (peg$silentFails === 0) { peg$fail(peg$c47); }
	                }
	                if (s4 !== peg$FAILED) {
	                  peg$savedPos = s0;
	                  s1 = peg$c49(s2, s3);
	                  s0 = s1;
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$FAILED;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        }
	      }
	
	      return s0;
	    }
	
	    function peg$parseResultClass() {
	      var s0;
	
	      if (input.substr(peg$currPos, 4) === peg$c50) {
	        s0 = peg$c50;
	        peg$currPos += 4;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c51); }
	      }
	      if (s0 === peg$FAILED) {
	        if (input.substr(peg$currPos, 7) === peg$c52) {
	          s0 = peg$c52;
	          peg$currPos += 7;
	        } else {
	          s0 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c53); }
	        }
	        if (s0 === peg$FAILED) {
	          if (input.substr(peg$currPos, 9) === peg$c54) {
	            s0 = peg$c54;
	            peg$currPos += 9;
	          } else {
	            s0 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c55); }
	          }
	          if (s0 === peg$FAILED) {
	            if (input.substr(peg$currPos, 5) === peg$c56) {
	              s0 = peg$c56;
	              peg$currPos += 5;
	            } else {
	              s0 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c57); }
	            }
	            if (s0 === peg$FAILED) {
	              if (input.substr(peg$currPos, 4) === peg$c58) {
	                s0 = peg$c58;
	                peg$currPos += 4;
	              } else {
	                s0 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c59); }
	              }
	            }
	          }
	        }
	      }
	
	      return s0;
	    }
	
	    function peg$parseAsyncClass() {
	      var s0;
	
	      if (input.substr(peg$currPos, 7) === peg$c60) {
	        s0 = peg$c60;
	        peg$currPos += 7;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c61); }
	      }
	      if (s0 === peg$FAILED) {
	        s0 = peg$parseString();
	      }
	
	      return s0;
	    }
	
	    function peg$parseConst() {
	      var s0, s1, s2, s3;
	
	      peg$silentFails++;
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 34) {
	        s1 = peg$c63;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c64); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = [];
	        s3 = peg$parseChar();
	        while (s3 !== peg$FAILED) {
	          s2.push(s3);
	          s3 = peg$parseChar();
	        }
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 34) {
	            s3 = peg$c63;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c64); }
	          }
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c65(s2);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c62); }
	      }
	
	      return s0;
	    }
	
	    function peg$parseChar() {
	      var s0, s1, s2, s3, s4, s5;
	
	      peg$silentFails++;
	      if (peg$c67.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c68); }
	      }
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        if (input.charCodeAt(peg$currPos) === 37) {
	          s1 = peg$c69;
	          peg$currPos++;
	        } else {
	          s1 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c70); }
	        }
	        if (s1 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c71();
	        }
	        s0 = s1;
	        if (s0 === peg$FAILED) {
	          s0 = peg$currPos;
	          if (input.charCodeAt(peg$currPos) === 92) {
	            s1 = peg$c72;
	            peg$currPos++;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c73); }
	          }
	          if (s1 !== peg$FAILED) {
	            s2 = peg$currPos;
	            if (peg$c74.test(input.charAt(peg$currPos))) {
	              s3 = input.charAt(peg$currPos);
	              peg$currPos++;
	            } else {
	              s3 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c75); }
	            }
	            if (s3 !== peg$FAILED) {
	              if (peg$c74.test(input.charAt(peg$currPos))) {
	                s4 = input.charAt(peg$currPos);
	                peg$currPos++;
	              } else {
	                s4 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c75); }
	              }
	              if (s4 !== peg$FAILED) {
	                if (peg$c74.test(input.charAt(peg$currPos))) {
	                  s5 = input.charAt(peg$currPos);
	                  peg$currPos++;
	                } else {
	                  s5 = peg$FAILED;
	                  if (peg$silentFails === 0) { peg$fail(peg$c75); }
	                }
	                if (s5 !== peg$FAILED) {
	                  s3 = [s3, s4, s5];
	                  s2 = s3;
	                } else {
	                  peg$currPos = s2;
	                  s2 = peg$FAILED;
	                }
	              } else {
	                peg$currPos = s2;
	                s2 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s2;
	              s2 = peg$FAILED;
	            }
	            if (s2 !== peg$FAILED) {
	              peg$savedPos = s0;
	              s1 = peg$c76(s2);
	              s0 = s1;
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	          if (s0 === peg$FAILED) {
	            s0 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 92) {
	              s1 = peg$c72;
	              peg$currPos++;
	            } else {
	              s1 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c73); }
	            }
	            if (s1 !== peg$FAILED) {
	              s2 = peg$parseEscaped();
	              if (s2 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c77(s2);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          }
	        }
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c66); }
	      }
	
	      return s0;
	    }
	
	    function peg$parseEscaped() {
	      var s0, s1;
	
	      peg$silentFails++;
	      if (input.charCodeAt(peg$currPos) === 34) {
	        s0 = peg$c63;
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c64); }
	      }
	      if (s0 === peg$FAILED) {
	        if (input.charCodeAt(peg$currPos) === 92) {
	          s0 = peg$c72;
	          peg$currPos++;
	        } else {
	          s0 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c73); }
	        }
	      }
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        if (input.charCodeAt(peg$currPos) === 98) {
	          s1 = peg$c79;
	          peg$currPos++;
	        } else {
	          s1 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c80); }
	        }
	        if (s1 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c81();
	        }
	        s0 = s1;
	        if (s0 === peg$FAILED) {
	          s0 = peg$currPos;
	          if (input.charCodeAt(peg$currPos) === 102) {
	            s1 = peg$c82;
	            peg$currPos++;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c83); }
	          }
	          if (s1 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c84();
	          }
	          s0 = s1;
	          if (s0 === peg$FAILED) {
	            s0 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 110) {
	              s1 = peg$c85;
	              peg$currPos++;
	            } else {
	              s1 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c86); }
	            }
	            if (s1 !== peg$FAILED) {
	              peg$savedPos = s0;
	              s1 = peg$c87();
	            }
	            s0 = s1;
	            if (s0 === peg$FAILED) {
	              s0 = peg$currPos;
	              if (input.charCodeAt(peg$currPos) === 114) {
	                s1 = peg$c88;
	                peg$currPos++;
	              } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c89); }
	              }
	              if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c90();
	              }
	              s0 = s1;
	              if (s0 === peg$FAILED) {
	                s0 = peg$currPos;
	                if (input.charCodeAt(peg$currPos) === 116) {
	                  s1 = peg$c91;
	                  peg$currPos++;
	                } else {
	                  s1 = peg$FAILED;
	                  if (peg$silentFails === 0) { peg$fail(peg$c92); }
	                }
	                if (s1 !== peg$FAILED) {
	                  peg$savedPos = s0;
	                  s1 = peg$c93();
	                }
	                s0 = s1;
	              }
	            }
	          }
	        }
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c78); }
	      }
	
	      return s0;
	    }
	
	    function peg$parseString() {
	      var s0, s1, s2;
	
	      peg$silentFails++;
	      s0 = peg$currPos;
	      s1 = [];
	      if (peg$c95.test(input.charAt(peg$currPos))) {
	        s2 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s2 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c96); }
	      }
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          if (peg$c95.test(input.charAt(peg$currPos))) {
	            s2 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s2 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c96); }
	          }
	        }
	      } else {
	        s1 = peg$FAILED;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c97();
	      }
	      s0 = s1;
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c94); }
	      }
	
	      return s0;
	    }
	
	    function peg$parseToken() {
	      var s0, s1, s2;
	
	      peg$silentFails++;
	      s0 = peg$currPos;
	      s1 = [];
	      if (peg$c99.test(input.charAt(peg$currPos))) {
	        s2 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s2 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c100); }
	      }
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          if (peg$c99.test(input.charAt(peg$currPos))) {
	            s2 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s2 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c100); }
	          }
	        }
	      } else {
	        s1 = peg$FAILED;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c101();
	      }
	      s0 = s1;
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c98); }
	      }
	
	      return s0;
	    }
	
	
	      function makeResults (arr) {
	        // XXX: sometimes GDB/MI results don't have name (e.g.
	        // `=breakpoint-modified` when `addr` property is `<MULTIPLE>`).
	        // Below code helps to turn such records into the array.
	
	        for (let i = 0; i < arr.length; i++) {
	          if (!arr[i].name) arr[i].name = arr[i - 1] ? arr[i - 1].name : 'unnamed';
	        }
	
	        let res = arr.reduce((acc, r) => {
	          if (!acc[r.name]) acc[r.name] = []
	          acc[r.name].push(r.value)
	          return acc
	        }, {})
	
	        for (let name in res) {
	          if (res[name].length === 1) res[name] = res[name][0]
	        }
	
	        return res
	      }
	
	
	    peg$result = peg$startRuleFunction();
	
	    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
	      return peg$result;
	    } else {
	      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
	        peg$fail({ type: "end", description: "end of input" });
	      }
	
	      throw peg$buildException(
	        null,
	        peg$maxFailExpected,
	        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
	        peg$maxFailPos < input.length
	          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
	          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
	      );
	    }
	  }
	
	  return {
	    SyntaxError: peg$SyntaxError,
	    parse:       peg$parse
	  };
	})();

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "import gdb\nimport sys\nimport json\n\n\nclass BaseCommand(gdb.Command):\n    \"\"\"Base class for custom GDB commands.\"\"\"\n\n    def __init__(self, name):\n        super(BaseCommand, self).__init__(\"gdbjs-\" + name, gdb.COMMAND_USER)\n        self.name = name\n\n    def invoke(self, arg, from_tty):\n        res = json.dumps(self.action(arg, from_tty), ensure_ascii=False)\n        msg = '<gdbjs:cmd:{0} {1} {0}:cmd:gdbjs>'.format(self.name, res)\n        sys.stdout.write(msg)\n        sys.stdout.flush()\n"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "import gdb\nimport sys\nimport re\n\n\nclass ExecCommand(BaseCommand):\n    \"\"\"Executes a CLI command and prints results.\"\"\"\n\n    def __init__(self):\n        super(ExecCommand, self).__init__(\"exec\")\n\n    def action(self, arg, from_tty):\n        res = gdb.execute(arg, False, True)\n        # Results of CLI execution might accidently contain events.\n        events = re.findall(\"<gdbjs:event:.*?:event:gdbjs>\", res)\n        for e in events: sys.stdout.write(e)\n        return res\n\ngdbjsExec = ExecCommand()\n"

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "import gdb\nfrom builtins import str\n\n\nclass ContextCommand(BaseCommand):\n    \"\"\"Lists all symbols in the current context.\"\"\"\n\n    def __init__(self):\n        super(ContextCommand, self).__init__(\"context\")\n\n    def action(self, arg, from_tty):\n        frame = gdb.selected_frame()\n        block = frame.block()\n        names = set()\n        variables = []\n        while block:\n            for symbol in block:\n                name = symbol.name\n                if (name not in names) and (symbol.is_argument or\n                   symbol.is_variable or symbol.is_function or\n                   symbol.is_constant):\n                    scope = \"global\" if block.is_global else \\\n                            \"static\" if block.is_static else \\\n                            \"argument\" if symbol.is_argument else \\\n                            \"local\"\n                    names.add(name)\n                    variables.append({\n                        \"name\": symbol.name,\n                        \"value\": str(symbol.value(frame)),\n                        \"type\": str(symbol.type),\n                        \"scope\": scope\n                    })\n            block = block.superblock\n        return variables\n\ngdbjsContext = ContextCommand()\n"

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "import gdb\nimport re\n\n\nclass SourcesCommand(BaseCommand):\n    \"\"\"Search for source files using regex.\"\"\"\n\n    def __init__(self):\n        super(SourcesCommand, self).__init__(\"sources\")\n\n    def action(self, arg, from_tty):\n        info = gdb.execute(\"info sources\", False, True)\n        # XXX: not sure, whether there is a better way.\n        info = re.sub(\"Reading symbols .*?\\.{3}done\\.\", \"\", info)\n        files = re.findall(r\"([/\\\\].*?)[,\\n]\", info)\n        return [f for f in files if re.search(arg, f)]\n\ngdbjsSources = SourcesCommand()\n"

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "import gdb\n\n\nclass ThreadGroupCommand(BaseCommand):\n    \"\"\"Returns the current thread group.\"\"\"\n\n    def __init__(self):\n        super(ThreadGroupCommand, self).__init__(\"group\")\n\n    def action(self, arg, from_tty):\n        inferior = gdb.selected_inferior()\n        return { 'id': inferior.num, 'pid': inferior.pid }\n\ngdbjsThreadGroup = ThreadGroupCommand()\n"

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "import gdb\n\n\nclass ThreadCommand(BaseCommand):\n    \"\"\"Returns the current thread.\"\"\"\n\n    def __init__(self):\n        super(ThreadCommand, self).__init__(\"thread\")\n\n    def action(self, arg, from_tty):\n        thread = gdb.selected_thread()\n        # `global_num` was introduced in GDB 7.11\n        num = getattr(thread, 'global_num', None) or thread.num if thread else None\n        inferior = gdbjsThreadGroup.action(arg, from_tty)\n        return { \"id\": num or None, \"group\": inferior }\n\ngdbjsThread = ThreadCommand()\n"

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "import sys\n\n\ndef base_event_handler(name, msg):\n    \"\"\"Base handler for custom events.\"\"\"\n\n    sys.stdout.write('<gdbjs:event:{0} {1} {0}:event:gdbjs>'.format(name, msg))\n    sys.stdout.flush()\n"

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "import gdb\n\n\ndef new_objfile_handler(event):\n    \"\"\"Handle the new objfile event.\"\"\"\n\n    base_event_handler('new-objfile', event.new_objfile.filename)\n\ngdb.events.new_objfile.connect(new_objfile_handler)\n"

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map